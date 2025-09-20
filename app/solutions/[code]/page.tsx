"use client";

import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusBadge, CategoryBadge, Tag, KPIChip } from "@/components/Badges";
import { getServiceByCode } from "@/lib/services";

export default function SolutionDetailPage() {
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

  // Replace <Navigate/>: redirect when service not found
  useEffect(() => {
    if (code && !service) router.replace("/");
  }, [code, service, router]);

  if (!service) return null; // render nothing while redirecting

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
          <span>Documentation</span>
          <span>/</span>
          <span className="text-foreground">{service.code}</span>
        </div>

        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                {service.code}
              </span>
              <CategoryBadge category={service.category} />
              <StatusBadge status={service.status} />
            </div>
            <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
            <p className="text-lg text-muted-foreground">{service.summary}</p>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mb-8 p-4 bg-muted/50 rounded-lg">
            <Button onClick={() => router.push(`/playground/${service.code}`)}>
              <PlayCircle className="h-4 w-4 mr-2" />
              Open Playground
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push(`/api-reference/${service.code}`)}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              API Reference
            </Button>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  This AI solution leverages cutting-edge machine learning
                  techniques to deliver enterprise-grade performance. The system
                  is designed for scalability, reliability, and ease of
                  integration with existing workflows.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <p className="text-muted-foreground">
                Built with industry-standard frameworks and optimized for
                production deployment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Performance Metrics
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.kpis.map((kpi: string) => (
                  <KPIChip key={kpi}>{kpi}</KPIChip>
                ))}
              </div>
              <p className="text-muted-foreground">
                Key performance indicators demonstrating the solution&apos;s
                effectiveness in real-world scenarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Quick Setup</h3>
                <pre className="demo-log text-sm bg-background p-4 rounded border overflow-x-auto">
                  {`# Install the CLI tool
npm install -g letsai-cli

# Initialize your project
letsai init ${service.code.toLowerCase()}

# Configure your environment
letsai configure --api-key YOUR_API_KEY

# Run your first demo
letsai demo ${service.code.toLowerCase()}`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Integration</h2>
              <p className="text-muted-foreground mb-4">
                This solution can be integrated into your existing
                infrastructure through our REST API, SDK, or webhook endpoints.
                Contact our team for custom integration support.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  📧 For technical support:{" "}
                  <span className="text-foreground">
                    contact@letsprinkleai.com
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
