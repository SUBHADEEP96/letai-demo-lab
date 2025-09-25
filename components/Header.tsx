import { Button } from "@/components/ui/button";
import { BarChart3, Database, GitBranch, FlaskConical } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Link className="text-xl font-bold hidden md:block" href="/">
              Let's AI
            </Link>
            <div className=" brand-gradient flex items-center justify-center">
              <FlaskConical className="h-4 w-4 text-white hidden md:block" />
              <div className="text-white flex gap-2 font-bold text-sm md:hidden">
                <span>Ls.Ai</span>
                <FlaskConical className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              Traces
            </Button>
            <Button variant="ghost" size="sm">
              <GitBranch className="h-4 w-4 mr-2" />
              Evals
            </Button>
            <Button variant="outline" size="sm">
              <Database className="h-4 w-4 mr-2" />
              Ingest Data
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
