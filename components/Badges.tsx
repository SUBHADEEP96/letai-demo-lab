import { cn } from "@/lib/utils";
import type { Status, Category } from "@/lib/services";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variants = {
    demo: "bg-status-demo text-status-demo-foreground",
    alpha: "bg-status-alpha text-status-alpha-foreground",
    beta: "bg-status-beta text-status-beta-foreground",
    prod: "bg-status-prod text-status-prod-foreground",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide",
      variants[status],
      className
    )}>
      {status}
    </span>
  );
}

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
      "bg-muted text-muted-foreground border border-border",
      "hover:bg-accent hover:text-accent-foreground transition-colors",
      className
    )}>
      {children}
    </span>
  );
}

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const categoryColors = {
    'RAG': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'Copilot': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Vision': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Time-Series': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    'Compliance': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'Legal': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    'Healthcare': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    'Finance': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Manufacturing': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
    'ITOps': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Marketing': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
    'Real-Estate': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
    'NLP': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      categoryColors[category],
      className
    )}>
      {category}
    </span>
  );
}

interface KPIChipProps {
  children: React.ReactNode;
  className?: string;
}

export function KPIChip({ children, className }: KPIChipProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-2 py-1 rounded-md text-xs font-mono font-medium",
      "bg-brand-primary/10 text-brand-primary border border-brand-primary/20",
      "dark:bg-brand-primary/20 dark:text-brand-primary",
      className
    )}>
      {children}
    </span>
  );
}