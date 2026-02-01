"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container, Button } from "@nesso/shared-ui";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Servizi", href: "#servizi" },
    { name: "Settori", href: "#settori" },
    { name: "Metodo di lavoro", href: "#method" },
    { name: "Chi siamo", href: "#team" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100">
        <Container size="lg">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="shrink-0">
              <a href="#home" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={150} 
                  height={35}
                  className="w-auto h-8 lg:h-10"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-6 bg-[#F1F1F1] py-3 px-8 rounded-full font-poppins">
              {navigation.map((item) => {
                const isActive = item.href === "#home";
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm transition-all hover:text-black flex items-center gap-2",
                      isActive
                        ? "text-[#232323] font-semibold"
                        : "text-[#636363] font-medium"
                    )}
                  >
                    {isActive && (
                      <span className="w-1 h-1 bg-black rounded-full" />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-6"
              >
                Contatti
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 z-60 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-55 bg-white transition-transform duration-300 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border border-black! text-black! hover:text-white absolute py-2.5 top-4 right-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          X
        </Button>
        <div className="flex flex-col h-full pt-24 px-6">
          <div className="flex flex-col gap-6">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold text-gray-900 border-b border-gray-50 pb-4 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
                <span className="text-gray-300">→</span>
              </a>
            ))}
          </div>

          <div className="mt-auto mb-12">
            <Button size="lg" className="w-full rounded-xl">
              Contatti
            </Button>
            <p className="text-center text-gray-500 mt-6 text-sm">
              © 2026 Nesso Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
