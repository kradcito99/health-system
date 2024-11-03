// src/pages/home_page.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../stylesheets/home_page/home_page.scss';

export const HomePage = () => {
  const [showParagraph, setShowParagraph] = useState(false); // Estado para controlar la visibilidad del párrafo

  // Configuración de la animación para el encabezado y el párrafo
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // Duración de la animación para ambos
    },
  };

  // Efecto para mostrar el párrafo después de que el encabezado termine
  const handleAnimationComplete = () => {
    setShowParagraph(true); // Muestra el párrafo después de la animación del encabezado
  };

  return (
    <div>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={handleAnimationComplete} // Maneja el evento de finalización de la animación
      >
        Mide la salud de tu equipo agil
      </motion.h1>
      {showParagraph && ( // Renderiza el párrafo solo si showParagraph es verdadero
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Te presentamos distintas pruebas para que puedas medir la salud de tu equipo ágil.
        </motion.p>
      )}
    </div>
  );
};

export default HomePage;
