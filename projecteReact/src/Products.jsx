
import Revlon from "/productos/ColorSilkHairColorRevlon/revlon.png";
import RevlonLongWearCreamColor from "/productos/LongwearCreamColor/revlonColorStay.png";
import UniqOneHairTreatment from "/productos/UniqOneHairTreatment/RevlonUniqOneHairTreatment-.png";

const arrayProducts = [
  {
    id: "price_1N94yYAxa4UNc1Nhq7vUWNzF",
    name: "ColorSilk Beautiful Color™ Hair Color",
    price: 2.99,
    image: Revlon,
  },
  {
    id: "price_1N9ndgAxa4UNc1NhuQfkbcB5",
    name: "ColorStay™ Longwear Cream Color",
    price: 3.15,
    image: RevlonLongWearCreamColor,
  },
  {
    id: "price_1N9oFvAxa4UNc1Nhsn2fd0tY",
    name: "Uniq One Hair Treatment",
    price: 6.79,
    image: UniqOneHairTreatment,
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
