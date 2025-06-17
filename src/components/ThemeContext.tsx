import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the type for our theme context
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: 'dark' | 'light';
} | null;

const ThemeContext = createContext<ThemeContextType>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Apply theme class to document body and save to localStorage
  useEffect(() => {
    const body = document.body;
    const theme = isDarkMode ? 'dark' : 'light';
    
    // Remove existing theme classes
    body.classList.remove('light', 'dark');
    // Add current theme class
    body.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      theme: isDarkMode ? 'dark' : 'light'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};