import { Link as RouterLink } from "react-router-dom";

export const SmoothScroll = ({ to, children }) => {
  const handleScroll = (event) => {
    event.preventDefault();

    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <RouterLink
      to={to}
      onClick={handleScroll}
      style={{ textDecoration: "none" }}>
      {children}
    </RouterLink>
  );
};
