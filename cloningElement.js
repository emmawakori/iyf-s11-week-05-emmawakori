const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

//function that add a new nav item dynamically
function addNavItem(text, href) {
  const navItem = document.querySelector(".nav-link").parentElement;
  const clone = navItem.cloneNode(true);
  const clonedLink = clone.querySelector("a");
  clonedLink.textContent = text;
  clonedLink.href = href;
  document.querySelector(".nav-list").appendChild(clone);
}
  
