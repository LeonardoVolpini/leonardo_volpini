"use client"
import Link from "next/link";
//import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from "react";
import { NavItem } from "@/types/nav";
import { cn } from "@/utils/utils";

interface HeaderProps {
  navItems?: NavItem[]
}

export const Header = ({ navItems }: HeaderProps) => {
  /*const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (selectedTheme) {
      setIsDarkMode(selectedTheme === 'dark');
      document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };*/

  return (
    <header className="header sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-header/95">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            L V
          </Link>

          {navItems?.length ? (
            <nav className="flex gap-6">
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

          {/* Dark mode toggle */}
          {/*
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full hover:bg-accent"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
          */}
        </nav>
      </div>
    </header>
  )
}