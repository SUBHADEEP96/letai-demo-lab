"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Send, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge, CategoryBadge } from "@/components/Badges";
import { DemoLog } from "@/components/DemoLog";
import { getServiceByCode, runDemo } from "@/lib/services";

export default function PlaygroundPage() {
  const router = useRouter();
  const params = useParams<{ code?: string | string[] }>();

  const code = useMemo(() => {
    const c = params?.code;
    return Array.isArray(c) ? c[0] : c || undefined;
  }, [params]);

  const service = useMemo(
    () => (code ? getServiceByCode(code) : undefined),
    [code]
  );

  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Replace <Navigate/>: if no service, redirect to home
  useEffect(() => {
    if (code && !service) router.replace("/");
  }, [code, service, router]);

  const handleStartDemo = async () => {
    if (isRunning || !service) return;

    setIsRunning(true);
    setLogs([]);

    try {
      const stream = await runDemo(service.code, input);
      const reader = (stream as ReadableStream<any>).getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk =
          typeof value === "string"
            ? value
            : decoder.decode(value, { stream: true });

        const lines = chunk.split("\n").filter((line) => line.trim());
        setLogs((prev) => [...prev.slice(-9), ...lines].slice(-10));
      }
    } catch (error) {
      setLogs((prev) => [
        ...prev,
        `❌ Error: ${error instanceof Error ? error.message : "Demo failed"}`,
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleStopDemo = () => setIsRunning(false);

  // While redirecting, render nothing
  if (!service) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Solutions
          </Button>
          <span>/</span>
          <span>Playground</span>
          <span>/</span>
          <span className="text-foreground">{service.code}</span>
        </div>

        <div className="max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                {service.code}
              </span>
              <CategoryBadge category={service.category} />
              <StatusBadge status={service.status} />
            </div>
            <h1 className="text-3xl font-bold mb-2">{service.name}</h1>
            <p className="text-lg text-muted-foreground">
              Interactive Demo Environment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Input</h2>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-1" />
                    Configure
                  </Button>
                </div>

                <Textarea
                  placeholder={`Enter your input for ${service.name}...`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[200px] resize-none"
                />

                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs text-muted-foreground">
                    {input.length}/1000 characters
                  </p>
                  <Button
                    onClick={handleStartDemo}
                    disabled={isRunning}
                    className="brand-gradient"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isRunning ? "Running..." : "Send"}
                  </Button>
                </div>
              </div>

              {/* Configuration Panel */}
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Configuration</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Temperature</label>
                    <div className="text-xs text-muted-foreground">
                      Controls randomness in responses
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      defaultValue="0.7"
                      className="w-full mt-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Max Tokens</label>
                    <div className="text-xs text-muted-foreground">
                      Maximum response length
                    </div>
                    <input
                      type="number"
                      defaultValue="500"
                      className="w-full mt-2 px-3 py-1 text-sm border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Output Panel */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Output & Logs</h2>
              <DemoLog
                logs={logs}
                isRunning={isRunning}
                onStartDemo={handleStartDemo}
                onStopDemo={handleStopDemo}
                className="h-[400px]"
              />
            </div>
          </div>

          {/* Usage Examples */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Example Inputs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Analyze the quarterly sales data for trends and anomalies",
                "Generate a summary of the latest policy updates",
                "Extract key entities from the uploaded document",
                "Predict maintenance needs for equipment ID 12345",
              ].map((example, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setInput(example)}
                >
                  <p className="text-sm">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
