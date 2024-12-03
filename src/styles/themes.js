export const themes = {
  cyberpunk: {
    name: "cyberpunk",
    colors: {
      primary: "#00ff9f",
      primaryRgb: "0, 255, 159",
      secondary: "#ff00ff",
      text: "#ffffff",
      textSecondary: "#b3b3b3",
      background: "#000000",
      backgroundGradient: "linear-gradient(135deg, #000000, #1a1a1a)",
      border: "#333333",
      card: "rgba(255, 255, 255, 0.05)",
      shadow: "0 0 20px rgba(0, 255, 159, 0.3)",
      hover: "#00ff9f33",
    },
  },
  minimal: {
    name: "minimal",
    colors: {
      primary: "#2196f3",
      primaryRgb: "33, 150, 243",
      secondary: "#90caf9",
      text: "#333333",
      textSecondary: "#666666",
      background: "#ffffff",
      backgroundGradient: "linear-gradient(135deg, #ffffff, #f5f5f5)",
      border: "#e0e0e0",
      card: "rgba(0, 0, 0, 0.02)",
      shadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      hover: "#2196f333",
    },
  },
  retro: {
    name: "retro",
    colors: {
      primary: "#ff6b6b",
      primaryRgb: "255, 107, 107",
      secondary: "#ffd93d",
      text: "#2f2f2f",
      textSecondary: "#4f4f4f",
      background: "#fff6e5",
      backgroundGradient: "linear-gradient(135deg, #fff6e5, #ffe5e5)",
      border: "#ffd3b6",
      card: "rgba(255, 107, 107, 0.05)",
      shadow: "0 4px 15px rgba(255, 107, 107, 0.2)",
      hover: "#ff6b6b33",
    },
  },
};

export const applyTheme = (themeName) => {
  const theme = themes[themeName] || themes.minimal;
  if (!theme) return;

  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--theme-${key}`, value);
  });

  localStorage.setItem("theme", themeName);
};
