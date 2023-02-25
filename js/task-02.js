const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

  const ingredientsEl = document.querySelector("#ingredients");

  ingredients.forEach(element => {
    const linkEl = document.createElement("li");
    linkEl.textContent = `${element}`;
    linkEl.classList.add("item");   

    ingredientsEl.appendChild(linkEl)   
    
    console.log(linkEl)
  })
    