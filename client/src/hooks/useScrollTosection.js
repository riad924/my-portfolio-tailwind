import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return scrollToSection;
};

export default useScrollToSection;