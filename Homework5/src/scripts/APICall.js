import axios from "axios";

export default function getProducts() {
  const allProducts = [];

  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4208&limit=48&store=US",
        {
          headers: {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key":
              "181b612297mshd0e7e19beb1bc7fp1b8e4fjsnfe7f21eb28e8",
          },
        }
      )
      .then((res) => {
        res.data.products.forEach((el) => {
          allProducts.push({
            image: el.imageUrl,
            name: el.name,
            brand: el.brandName,
            price: el.price.current.value,
            priceCurrency: el.price.currency,
          });
        });
        resolve(allProducts);
      })
      .catch((error) => reject());
  });
}
