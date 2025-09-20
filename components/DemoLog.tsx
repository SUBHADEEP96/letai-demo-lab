"use client";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Play, Square } from "lucide-react";

import { cn } from "@/lib/utils";

interface DemoLogProps {
  logs: string[];
  isRunning: boolean;
  onStartDemo: () => void;
  onStopDemo: () => void;
  className?: string;
}

export function DemoLog({
  logs,
  isRunning,
  onStartDemo,
  onStopDemo,
  className,
}: DemoLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(logs.join("\n"));
    } catch (err) {
      console.error("Failed to copy logs:", err);
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Controls */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">Demo Console</h4>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            disabled={logs.length === 0}
          >
            <Copy className="h-3 w-3 mr-1" />
            Copy
          </Button>
          {isRunning ? (
            <Button size="sm" variant="destructive" onClick={onStopDemo}>
              <Square className="h-3 w-3 mr-1" />
              Stop
            </Button>
          ) : (
            <Button size="sm" onClick={onStartDemo} className="brand-gradient">
              <Play className="h-3 w-3 mr-1" />
              Run Demo
            </Button>
          )}
        </div>
      </div>

      {/* Log Display */}
      <div
        ref={scrollRef}
        className={cn(
          "demo-log bg-muted/50 border rounded-lg p-4 h-64 overflow-y-auto",
          "text-sm text-muted-foreground",
          logs.length === 0 && "flex items-center justify-center"
        )}
      >
        {logs.length === 0 ? (
          <span className="text-muted-foreground/60">
            Click "Run Demo" to start the simulation...
          </span>
        ) : (
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-2",
                  log.includes("✅") && "text-green-600 dark:text-green-400",
                  log.includes("🚀") && "text-blue-600 dark:text-blue-400",
                  log.includes("🔧") && "text-orange-600 dark:text-orange-400",
                  log.includes("🧠") && "text-purple-600 dark:text-purple-400",
                  log.includes("📊") && "text-cyan-600 dark:text-cyan-400",
                  log.includes("✨") && "text-pink-600 dark:text-pink-400"
                )}
              >
                <span className="text-muted-foreground/40 text-xs mt-0.5 flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{log}</span>
              </div>
            ))}
            {isRunning && (
              <div className="flex items-center gap-2 text-brand-primary">
                <span className="text-muted-foreground/40 text-xs">
                  {String(logs.length + 1).padStart(2, "0")}
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                  Processing...
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
