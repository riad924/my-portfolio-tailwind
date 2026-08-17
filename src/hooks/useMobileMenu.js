import { useState } from "react";

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleMenu,
    closeMenu,
  };
};

export default useMobileMenu;