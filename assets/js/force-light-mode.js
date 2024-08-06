if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Si el navegador está en modo oscuro, forzar el modo claro
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }
  
  // Escuchar cambios en la preferencia del esquema de color
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      // Si el navegador cambia a modo oscuro, forzar el modo claro
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  });