// 1. Select the header, then navigate to the nav inside it
const header = document.getElementById("main-header");
const nav = header.getElementsByTagName("nav")[0];
console.log("Header:", header);
console.log("Nav inside header:", nav);

// 2. Select the first nav-link, then get its parent li
const firstLink = document.querySelector(".nav-link");
const parentLi = firstLink.parentElement;
console.log("First nav-link:", firstLink);
console.log("Parent li:", parentLi);

// 3. Select the article, then get its next sibling (section)
const article = document.getElementsByTagName("article")[0];
const nextSection = article.nextElementSibling;
console.log("Article:", article);
console.log("Next sibling (section):", nextSection);

// 4. Select the ul, then get all its child li elements
const ul = document.getElementsByTagName("ul")[0];
const liChildren = ul.getElementsByTagName("li");
console.log("UL:", ul);
console.log("Child li elements:", liChildren);

// Loop through li children and log their text
for (let li of liChildren) {
  console.log("LI text:", li.textContent);
}

// 5. Start from the footer and navigate up to the body
const footer = document.getElementsByTagName("footer")[0];
const body = footer.closest("body");
console.log("Footer:", footer);
console.log("Body (navigated up):", body);

