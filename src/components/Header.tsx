"use client"
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icone hamburger e close
import { NavItem } from "@/types/nav";
import { cn } from "@/utils/utils";
import { useState } from "react";

interface HeaderProps {
  navItems?: NavItem[]
}

export const Header = ({ navItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-header/95">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          L V
        </Link>

        {/* Desktop Navigation */}
        {navItems?.length ? (
          <nav className="hidden md:flex gap-6">
            {navItems?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center font-medium text-header-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-header-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-header-foreground" />
          )}
        </button>

      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t shadow-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4 bg-header">
            {navItems?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-header-foreground font-medium"
                    onClick={() => setIsMenuOpen(false)} // Chiude il menu al click
                  >
                    {item.title}
                  </Link>
                )
            )}
          </div>
        </nav>
      )}

    </header>
  )
}