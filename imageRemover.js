// Function to remove all images from the page
function removeImages() {
  const images = document.querySelectorAll("img");
  images.forEach(img => img.remove());
}

//toggle between hide/show
let imagesHidden = false;

function toggleImages() {
  const images = document.querySelectorAll("img");
  const button = document.querySelector("button");

  if (!imagesHidden) {
    images.forEach(img => img.style.display = "none");
    button.textContent = "Show Images";
    imagesHidden = true;
  } else {
    images.forEach(img => img.style.display = "inline");
    button.textContent = "Hide Images";
    imagesHidden = false;
  }
}
