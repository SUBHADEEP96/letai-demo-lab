import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StatusBadge, CategoryBadge, Tag, KPIChip } from "@/components/Badges";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
  className?: string;
}

export function ServiceCard({ service, onClick, className }: ServiceCardProps) {
  return (
    <Card 
      className={cn(
        "card-gradient cursor-pointer group relative overflow-hidden border-0",
        "hover:scale-[1.02] transition-all duration-300",
        className
      )}
      onClick={onClick}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground group-hover:text-brand-primary transition-colors duration-200 line-clamp-2">
              {service.name}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
              {service.code}
            </span>
            <StatusBadge status={service.status} />
          </div>
        </div>
        
        <CategoryBadge category={service.category} />
      </CardHeader>
      
      <CardContent className="relative pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {service.summary}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
          {service.tags.length > 3 && (
            <Tag>+{service.tags.length - 3}</Tag>
          )}
        </div>
        
        {/* KPIs */}
        <div className="flex flex-wrap gap-1.5">
          {service.kpis.slice(0, 2).map((kpi, index) => (
            <KPIChip key={index}>{kpi}</KPIChip>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}