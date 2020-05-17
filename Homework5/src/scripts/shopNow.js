export default (products) => {
  let counter = 1;
  products.forEach((el) => {
    const item = `
    <div class="shopnow__category cat${counter}">
        <img class="cat-img" src="http://${el.image}" alt="" />
        <div class="category__info">
          <span class="info__header">${el.brand}</span>
          <span class="info__goto">Shop now</span>
        </div>
      </div>
    `;
    document.querySelector(".shopnow").insertAdjacentHTML("beforeend", item);
    counter++;
  });
};
