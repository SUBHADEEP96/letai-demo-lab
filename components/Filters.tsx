import { Search, Command } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUniqueCategories, getUniqueStatuses } from "@/lib/services";
import type { Category, Status } from "@/lib/services";

interface FiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  status: Status | "all";
  onStatusChange: (value: Status | "all") => void;
}

export function Filters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
}: FiltersProps) {
  const categories = getUniqueCategories();
  const statuses = getUniqueStatuses();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search AI solutions..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-12"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
          <Command className="h-3 w-3" />
          <span>K</span>
        </div>
      </div>

      {/* Category Filter */}
      <Select
        value={category}
        onValueChange={(value) => onCategoryChange(value as Category | "all")}
      >
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Status Filter */}
      <Select
        value={status}
        onValueChange={(value) => onStatusChange(value as Status | "all")}
      >
        <SelectTrigger className="w-full sm:w-36">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          {statuses.map((stat) => (
            <SelectItem key={stat} value={stat}>
              {stat.charAt(0).toUpperCase() + stat.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}