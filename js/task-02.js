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
    const linkArreyEl = [];
    const linkEl = document.createElement("li");
    linkEl.textContent = `${element}`;
    linkEl.classList.add("item");   

    linkArreyEl.push(linkEl)
    
    ingredientsEl.append(...linkArreyEl)   
    console.log(linkArreyEl)
  })
  