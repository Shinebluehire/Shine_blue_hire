"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <Image
              src="/images/logo.png"
              alt="Shine Blue Hire Logo"
              width={80}
              height={20}
              priority
            />
            <span
              className="hidden sm:inline-block text-lg font-bold text-gray-800 group-hover:text-primary 
                         animate-fadeInSlideUp transition-all duration-700 ease-in-out tracking-wide"
            >
              Shine Blue Hire <span className="text-accent">Purchase Pvt. Ltd.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/governance", label: "Governance" },
              { href: "/our-team", label: "Our Team" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium px-3 py-2 text-gray-700 hover:text-primary"
              >
                {label}
              </Link>
            ))}

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary px-3 py-2 focus:outline-none">
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
                <Link
                  href="/career"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                >
                  Career
                </Link>
                <Link
                  href="/contact-us"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full max-w-xs bg-background p-6 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="Shine Blue Hire Logo"
                      width={112}
                      height={28}
                      priority
                    />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>

                <ScrollArea className="flex-grow">
                  <div className="flex flex-col space-y-1">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/products", label: "Products" },
                      { href: "/governance", label: "Governance" },
                      { href: "/our-team", label: "Our Team" },
                    ].map(({ href, label }) => (
                      <SheetClose key={href} asChild>
                        <Link
                          href={href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {label}
                        </Link>
                      </SheetClose>
                    ))}

                    {/* About Us submenu */}
                    <div className="px-3 py-2 text-base font-medium text-foreground flex items-center">
                      About Us <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                    <div className="pl-6 space-y-1">
                      <SheetClose asChild>
                        <Link
                          href="/career"
                          className="block py-1 text-sm text-muted-foreground hover:text-primary"
                        >
                          Career
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/contact-us"
                          className="block py-1 text-sm text-muted-foreground hover:text-primary"
                        >
                          Contact Us
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}