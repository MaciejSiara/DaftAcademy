import searchIcon from "../assets/kz-search-space.png";
import heartIcon from "../assets/kz-heart.png";

export default function (products) {
  const contentWrapper = document.getElementById("content__items");
  const allItemsContainer = document.createElement("div");
  const allProductsButton = document.getElementById("show-more-btn");

  document.querySelector(".content").style.display = "block";
  document.querySelector(".content__showMore").style.display = "flex";

  allItemsContainer.classList.add("row");
  allItemsContainer.classList.add("align-items-start");

  let showItemsOnPage = 8;
  let counter = 1;

  showItems(0, showItemsOnPage);

  // all products button
  allProductsButton.addEventListener("click", (e) => {
    let temp = counter;
    counter += 1;
    showItems(temp * showItemsOnPage, counter * showItemsOnPage);

    if (counter * showItemsOnPage >= products.length) {
      allProductsButton.style.display = "none";
    }
  });

  function showItems(first, last) {
    let elements = products.slice(first, last);
    elements.forEach((el) => {
      let item = `
      <div class="col-6 col-lg-4 col-xl-3 content__item">
        <img src="http://${el.image}"/>
        <div class="content__item__description item-description">
          <div class="content__item__description__name">${el.name}
          </div>
          <div class="content__item__description__price">${el.price} ${el.priceCurrency}</div>
        </div>
        <div class="content__item__hover item-details-to-buy">
          <div class="content__item__hover__name">${el.name}</div>
          <div class="content__item__hover__options">
            <div class="content__item__hover__options__desc">add to cart
            </div>
            <div class="content__item__hover__options__icons">
              <img src=${searchIcon}>
                <img src=${heartIcon}/>
            </div>
          </div>
        </div>
      </div>
      `;
      allItemsContainer.insertAdjacentHTML("beforeend", item);
    });
    contentWrapper.appendChild(allItemsContainer);
  }
}
