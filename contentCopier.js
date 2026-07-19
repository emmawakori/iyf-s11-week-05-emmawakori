const source = document.getElementById("source");
const target = document.getElementById("target");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
  target.innerHTML = source.innerHTML;
});

//drag and drop
// Make source draggable
source.setAttribute("draggable", true);

source.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", source.innerHTML);
});

target.addEventListener("dragover", (event) => {
  event.preventDefault(); // allow drop
});

target.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  target.innerHTML = data;
});
