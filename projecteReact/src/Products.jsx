
import Revlon from "/productos/ColorSilkHairColorRevlon/revlon.png";

const arrayProducts = [
  {
    id: "price_1N94yYAxa4UNc1Nhq7vUWNzF",
    name: "ColorSilk Beautiful Color™ Hair Color",
    price: 2.99,
    image: Revlon,
  }
];

function getProductData(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { arrayProducts, getProductData };
