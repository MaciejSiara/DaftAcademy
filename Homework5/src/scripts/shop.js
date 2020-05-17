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
      let singleItem = document.createElement("div");
      singleItem.classList.add("col-6");
      singleItem.classList.add("col-lg-4");
      singleItem.classList.add("col-xl-3");
      singleItem.classList.add("content__item");
      let itemImage = document.createElement("img");
      itemImage.src = `https://${el.image}`;
      singleItem.appendChild(itemImage);

      // show sale if is sale
      if (el.sale === true) {
        let saleItem = document.createElement("div");
        saleItem.classList.add("content__item__sale");
        saleItem.innerHTML = "sale";
        singleItem.appendChild(saleItem);
      }
      //item description
      let itemDescription = document.createElement("div");
      itemDescription.classList.add("content__item__description");
      itemDescription.classList.add("item-description");

      //element info
      if (el.info) {
        let itemDescInfo = document.createElement("div");
        itemDescInfo.classList.add("content__item__description__info");
        itemDescInfo.innerHTML = el.info;
        itemDescription.appendChild(itemDescInfo);
      }

      //element name
      let itemDescName = document.createElement("div");
      itemDescName.classList.add("content__item__description__name");
      itemDescName.innerHTML = el.name;
      itemDescription.appendChild(itemDescName);

      //element price
      let itemDescPrice = document.createElement("div");
      itemDescPrice.classList.add("content__item__description__price");
      itemDescPrice.innerHTML = `${el.price} ${el.priceCurrency}`;
      itemDescription.appendChild(itemDescPrice);

      //element on hover container
      let itemOnHover = document.createElement("div");
      itemOnHover.classList.add("content__item__hover");
      itemOnHover.classList.add("item-details-to-buy");

      //elem hover name
      let itemHoverName = document.createElement("div");
      itemHoverName.classList.add("content__item__hover__name");
      itemHoverName.innerHTML = el.name;
      itemOnHover.appendChild(itemHoverName);

      //elem hover options
      let itemHoverOptions = document.createElement("div");
      itemHoverOptions.classList.add("content__item__hover__options");

      //elem hover desc
      let hoverOptionsDesc = document.createElement("div");
      hoverOptionsDesc.classList.add("content__item__hover__options__desc");
      hoverOptionsDesc.innerHTML = "add to cart";
      itemHoverOptions.appendChild(hoverOptionsDesc);

      //elem hover icons
      let hoverOptionsIconsWrapper = document.createElement("div");
      hoverOptionsIconsWrapper.classList.add(
        "content__item__hover__options__icons"
      );
      let searchIconElem = document.createElement("img");
      searchIconElem.src = searchIcon;
      hoverOptionsIconsWrapper.appendChild(searchIconElem);

      let heartIconElem = document.createElement("img");
      heartIconElem.src = heartIcon;
      hoverOptionsIconsWrapper.appendChild(heartIconElem);

      itemHoverOptions.appendChild(hoverOptionsIconsWrapper);
      itemOnHover.appendChild(itemHoverOptions);

      //add elem
      singleItem.appendChild(itemDescription);
      singleItem.appendChild(itemOnHover);
      allItemsContainer.appendChild(singleItem);
    });

    contentWrapper.appendChild(allItemsContainer);
  }
}
