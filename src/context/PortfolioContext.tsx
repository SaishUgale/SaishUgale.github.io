"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Lens = "pm" | "dev";
type Theme = "dark" | "light";

interface PortfolioContextType {
  lens: Lens;
  setLens: (lens: Lens) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [lens, setLens] = useState<Lens>("dev");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Sync theme with HTML class
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <PortfolioContext.Provider value={{ lens, setLens, theme, toggleTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
