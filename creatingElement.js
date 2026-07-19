// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling
// ...existing code...

//create image
function createImage() {
  const imageContainer = document.getElementById('imageContainer');
  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/150';
  image.alt = 'Created Image';
  image.style.maxWidth = '100%';
  image.style.height = 'auto';
  imageContainer.appendChild(image);
}