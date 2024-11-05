// tailwind.config.js
module.exports = {
  darkMode: 'class', // Habilitar el modo oscuro por clase
  content: ["./*.html"], // Asegúrate de incluir todos los archivos HTML en los que usarás Tailwind
  theme: {
    extend: {
      colors: {
        primary: '#162d33',
        secondary: '#c8cf02',
        accent: '#F59E0B',
        background: '#40585e',
        textPrimary: '#111827',
        textSecondary: '#6B7280',
        // Agregar colores para el modo oscuro
        darkBackground: '#1F2937', // Fondo oscuro
        darkTextPrimary: '#FFFFFF', // Texto principal en oscuro
        darkTextSecondary: '#D1D5DB', // Texto secundario en oscuro
      },
    },
  },
};
