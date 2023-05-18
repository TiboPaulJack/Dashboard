const handleDarkModeToggle = (isDarkModeEnabled) => {
  if (isDarkModeEnabled) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

export default handleDarkModeToggle;
