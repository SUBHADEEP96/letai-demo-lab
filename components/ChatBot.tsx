"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, BarChart3, TrendingUp, PieChart } from "lucide-react";
import type { Service } from "@/lib/services";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  hasChart?: boolean;
  chartType?: string;
}

interface ChatBotProps {
  service: Service;
  className?: string;
}

const MOCK_RESPONSES: Record<
  string,
  { responses: string[]; hasVisuals?: boolean }
> = {
  EKN: {
    responses: [
      "📊 Analytics Report: I've found 47 relevant documents in your enterprise knowledge base. Query accuracy: 91%",
      "🔍 Document Analysis: Retrieved most relevant information with 95% confidence score",
      "📈 Usage Trends: 12,000+ documents indexed with increasing query accuracy over time",
    ],
    hasVisuals: true,
  },
  RGPT: {
    responses: [
      "💰 Revenue Analysis: Bundle recommendations could increase AOV by 23% - generating visual breakdown",
      "📊 Inventory Dashboard: 342 high-demand units identified with optimized pricing strategy",
      "📈 Sales Forecast: Winter accessories promotion projected 15% revenue boost",
    ],
    hasVisuals: true,
  },
  FSGPT: {
    responses: [
      "⚠️ Risk Dashboard: 3 high-priority AML alerts detected - showing risk distribution chart",
      "📊 Compliance Metrics: 98.7% transaction compliance rate with detailed breakdown",
      "📈 Market Analysis: Portfolio risk increased 12% - volatility trends visualized",
    ],
    hasVisuals: true,
  },
  SFACT: {
    responses: [
      "🏭 Maintenance Dashboard: Machine A-4 failure probability 87% - showing equipment health metrics",
      "📊 Efficiency Report: 15% OEE improvement across production lines",
      "⚙️ Predictive Analytics: Conveyor belt anomaly detected - maintenance schedule optimized",
    ],
    hasVisuals: true,
  },
  VQC: {
    responses: [
      "🎯 Quality Metrics: 99.2% pass rate achieved - generating defect analysis charts",
      "📊 Production Dashboard: 8 defects identified with pattern analysis visualization",
      "📈 Efficiency Trends: Computer vision prevented 23 defective products - showing impact metrics",
    ],
    hasVisuals: true,
  },
  MEDIQ: {
    responses: [
      "🏥 Patient Dashboard: Risk stratification complete - showing patient distribution by risk level",
      "📊 Clinical Metrics: Drug interaction analysis with safety compliance charts",
      "📈 Outcome Trends: Treatment protocol effectiveness visualized by patient cohort",
    ],
    hasVisuals: true,
  },
  default: {
    responses: [
      "I'm processing your request using advanced AI capabilities.",
      "Analysis complete. Here are the insights based on your data.",
      "How can I help you optimize your workflow today?",
    ],
  },
};

export function ChatBot({ service, className = "" }: ChatBotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: `Hello! I'm the AI assistant for ${service.name}. How can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateMockResponse = () => {
    const serviceData = MOCK_RESPONSES[service.code] || MOCK_RESPONSES.default;
    const responses = serviceData.responses || MOCK_RESPONSES.default.responses;
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    return {
      content: randomResponse,
      hasChart: serviceData.hasVisuals && Math.random() > 0.5,
      chartType: serviceData.hasVisuals
        ? ["analytics", "trends", "distribution"][Math.floor(Math.random() * 3)]
        : undefined,
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const response = generateMockResponse();
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.content,
        timestamp: new Date(),
        hasChart: response.hasChart,
        chartType: response.chartType,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000);
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="flex items-center gap-2 p-3 border-b bg-muted/30">
        <Bot className="h-5 w-5 text-primary" />
        <span className="font-medium">{service.name} Assistant</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] ${
                message.role === "user" ? "order-first" : ""
              }`}
            >
              <Card
                className={`p-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-background"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </Card>

              {/* Mock Chart Visualization */}
              {message.hasChart && message.role === "assistant" && (
                <Card className="p-4 mt-3 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="flex items-center gap-2 mb-3">
                    {message.chartType === "analytics" && (
                      <BarChart3 className="h-4 w-4 text-primary" />
                    )}
                    {message.chartType === "trends" && (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    )}
                    {message.chartType === "distribution" && (
                      <PieChart className="h-4 w-4 text-blue-500" />
                    )}
                    <span className="text-sm font-medium capitalize">
                      {message.chartType} Dashboard
                    </span>
                  </div>

                  <div className="space-y-2">
                    {message.chartType === "analytics" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Query Accuracy</span>
                          <span className="text-green-600 font-medium">
                            91%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                            style={{ width: "91%" }}
                          ></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="text-center">
                            <div className="font-medium text-primary">2.4K</div>
                            <div className="text-muted-foreground">Queries</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-blue-600">47</div>
                            <div className="text-muted-foreground">Results</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-green-600">
                              3.2s
                            </div>
                            <div className="text-muted-foreground">
                              Avg Time
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {message.chartType === "trends" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Performance Trend</span>
                          <span className="text-green-600 font-medium">
                            ↗ +15%
                          </span>
                        </div>
                        <div className="flex items-end space-x-1 h-16">
                          {[65, 72, 68, 85, 91, 89, 94].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-primary/70 to-primary rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          Last 7 days performance
                        </div>
                      </div>
                    )}

                    {message.chartType === "distribution" && (
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded"></div>
                            <span>Pass: 89%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                            <span>Warning: 8%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded"></div>
                            <span>Critical: 3%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                            <span>Review: 0%</span>
                          </div>
                        </div>
                        <div className="flex h-4 rounded overflow-hidden">
                          <div
                            className="bg-green-500"
                            style={{ width: "89%" }}
                          ></div>
                          <div
                            className="bg-yellow-500"
                            style={{ width: "8%" }}
                          ></div>
                          <div
                            className="bg-red-500"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              <div className="text-xs text-muted-foreground mt-1 px-2">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <Card className="p-3 bg-background">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask ${service.name} something...`}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            size="sm"
            className="brand-gradient"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
