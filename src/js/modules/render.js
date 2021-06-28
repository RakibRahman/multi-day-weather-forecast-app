function render() {
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "dynamic");
  const body = document.querySelector("body");
  h1.innerText = "Dynamically generated";
  body.appendChild(h1);
}
export default render;
