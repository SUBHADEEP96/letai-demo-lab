"use client";

import { useMemo, useState } from "react";

import { Header } from "@/components/Header";
import { Filters } from "@/components/Filters";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceModal } from "@/components/ServiceModal";

import {
  SERVICES,
  type Service,
  type Category,
  type Status,
} from "@/lib/services";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [status, setStatus] = useState<Status | "all">("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter services based on search and filters
  const filteredServices = useMemo(() => {
    const q = search.trim().toLowerCase();
    return SERVICES.filter((service) => {
      const matchesSearch =
        q === "" ||
        service.name.toLowerCase().includes(q) ||
        service.summary.toLowerCase().includes(q) ||
        service.code.toLowerCase().includes(q) ||
        service.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory =
        category === "all" || service.category === category;
      const matchesStatus = status === "all" || service.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            AI Solutions{" "}
            <span className="brand-gradient bg-clip-text text-transparent">
              Showcase
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive suite of AI-powered solutions designed to
            transform your business operations across industries.
          </p>
          <p className="text-bold text-muted-foreground max-w-2xl mx-auto">
            <i>
              -- Custom AI Solutions to Solve Complex, High-Impact Challenges --
            </i>
          </p>
        </div>

        {/* Filters */}
        <Filters
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          status={status}
          onStatusChange={setStatus}
        />

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredServices.length} of {SERVICES.length} solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => handleCardClick(service)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No solutions found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="border-t pt-8 mt-16">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} letsAI-Lab — Demo only
          </div>
        </footer>
      </main>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
