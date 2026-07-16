let count = 0;
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

addBtn.addEventListener("click", () => {
  count++;
  const paraDiv = document.createElement("div");
  paraDiv.className = "paragraph";

  const para = document.createElement("p");
  para.textContent = `Paragraph ${count}`;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", () => {
    container.removeChild(paraDiv);
    renumberParagraphs();
  });

  paraDiv.appendChild(para);
  paraDiv.appendChild(delBtn);
  container.appendChild(paraDiv);
});

// Function to renumber paragraphs after deletion
function renumberParagraphs() {
  const paragraphs = container.querySelectorAll(".paragraph p");
  paragraphs.forEach((p, index) => {
    p.textContent = `Paragraph ${index + 1}`;
  });
  count = paragraphs.length;
}
