"use client"
import Link from "next/link";
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from "react";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            L V
          </Link>

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

            <Link href="/contact" className="hover:text-primary transition-colors">
              Contattami
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}