export const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
  const storedTheme = localStorage.getItem("theme");
  localStorage.setItem("theme", storedTheme === "dark" ? "light" : "dark");
};

export const checkSystemPreference = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  document.documentElement.classList.toggle("dark", prefersDarkMode);
};
