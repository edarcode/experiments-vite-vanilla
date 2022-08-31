export const h1 = ({ className, textContent } = {}) => {
  const h1 = document.createElement("h1");
  h1.className = className || "";
  h1.textContent = textContent || "";

  return h1;
};
