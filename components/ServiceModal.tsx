import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StatusBadge, CategoryBadge, Tag, KPIChip } from "@/components/Badges";
import { DemoLog } from "@/components/DemoLog";
import { ChatBot } from "@/components/ChatBot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, FileText, PlayCircle, X, MessageSquare, Terminal } from "lucide-react";
import type { Service } from "@/lib/services";
import { runDemo } from "@/lib/services";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setLogs([]);
      setIsRunning(false);
    }
  }, [isOpen]);

  const handleStartDemo = async () => {
    if (!service || isRunning) return;

    setIsRunning(true);
    setLogs([]);

    try {
      const stream = await runDemo(service.code);
      const reader = stream.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const lines = value.split("\n").filter((line) => line.trim());
        setLogs((prev) => [...prev.slice(-9), ...lines].slice(-10)); // Keep last 10 lines
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

  const handleStopDemo = () => {
    setIsRunning(false);
  };

  const handleDocsClick = () => {
    window.open(`/solutions/${service?.code}`, "_blank");
  };

  const handlePlaygroundClick = () => {
    window.open(`/playground/${service?.code}`, "_blank");
  };

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-4">
              <DialogTitle className="text-xl font-bold mb-2 line-clamp-2">
                {service.name}
              </DialogTitle>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                  {service.code}
                </span>
                <CategoryBadge category={service.category} />
                <StatusBadge status={service.status} />
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <h4 className="font-medium mb-2">Overview</h4>
            <p className="text-muted-foreground">{service.summary}</p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-medium mb-3">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div>
            <h4 className="font-medium mb-3">Key Performance Indicators</h4>
            <div className="flex flex-wrap gap-2">
              {service.kpis.map((kpi, index) => (
                <KPIChip key={index}>{kpi}</KPIChip>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2 border-t">
            <Button onClick={handleDocsClick} variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Documentation
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
            <Button onClick={handlePlaygroundClick} variant="outline">
              <PlayCircle className="h-4 w-4 mr-2" />
              Open Playground
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>

          {/* Interactive Demo */}
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Interactive Chat
              </TabsTrigger>
              <TabsTrigger value="console" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Demo Console
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="mt-4">
              <div className="h-[400px] border rounded-lg overflow-hidden">
                <ChatBot service={service} className="h-full" />
              </div>
            </TabsContent>
            
            <TabsContent value="console" className="mt-4">
              <DemoLog
                logs={logs}
                isRunning={isRunning}
                onStartDemo={handleStartDemo}
                onStopDemo={handleStopDemo}
              />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
