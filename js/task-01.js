const linkEl = document.querySelector("#categories");
console.log("Number of categories:", linkEl.children.length);


const linkFirstItemEl = document.querySelectorAll(".item");
linkFirstItemEl.forEach(element => {
    console.log("Category: ", element.firstElementChild.textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
})
