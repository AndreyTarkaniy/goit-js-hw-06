const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const listEl = document.querySelector(".gallery");

  images.forEach(element => {

    const listImagEl = document.createElement("li");
   
    const linkImageEl = document.createElement("img");
    linkImageEl.classList.add("gallery-img")

     linkImageEl.src = `${element.url}`;
     linkImageEl.alt = `${element.alt}`;

     listImagEl.append(linkImageEl);

     listEl.insertAdjacentElement("beforeend",listImagEl);

  })
