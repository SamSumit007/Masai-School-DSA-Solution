/*
You have been given a list of products which is having property productName, quantity and description.
PROBLEM STATEMENTS:
1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}
2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]
*/
const listOfProducts = [
    {
      productName: 'TV',
      quantity: 10,
      description: 'television',
    },
    {
      productName: 'AC',
      quantity: 5,
      description: 'air conditioner',
    },
    {
      productName: 'TV',
      quantity: 10,
      description: 'television',
    },
    {
      productName: 'AC',
      quantity: 5,
      description: 'air conditioner',
    },
    {
      productName: 'FAN',
      quantity: 10,
      description: 'Ceiling Fan',
    },
  ]
  // ----------------------------------------------- solution --------------------------------------------
  //  brutforce technique
  function getUniqueProductCount(listOfProducts) {
    let countOfProduct = {}
    for (let i = 0; i < listOfProducts.length; i++) {
      if (countOfProduct[listOfProducts[i].productName] == undefined) {
        countOfProduct[listOfProducts[i].productName] = 1
      } else {
        countOfProduct[listOfProducts[i].productName] += 1
      }
    }
    return countOfProduct
  }
  console.log("getUniqueProductCount", getUniqueProductCount(listOfProducts))
  //  brutforce technique
  function getUniquePrducts(listOfProducts) {
    let uniqueProduct = {}
    for (let i = 0; i < listOfProducts.length; i++) {
      if (uniqueProduct[listOfProducts[i].productName] == undefined) {
        uniqueProduct[listOfProducts[i].productName] = listOfProducts[i]
      } else {
        uniqueProduct[listOfProducts[i].productName].quantity +=
          listOfProducts[i].quantity
      }
    }
    let updateProduct = Object.values(uniqueProduct)
    return updateProduct
  }
  
  //console.log('getUniquePrducts', getUniquePrducts(listOfProducts));
  // optimise way 
  
  
  let getUniquePrductsOptimise = listOfProducts.filter(
    (element, index, arr) =>
      index ===
      arr.findIndex((ele, index2) => {
        if (ele.productName == element.productName) {
          if (index != index2) {
            return (ele.quantity += element.quantity)
          } else {
            return ele
          }
        }
      }),
  )
   console.log('getUniquePrductsOptimise', getUniquePrductsOptimise)  
  
  
  // before print  getUniquePrductsOptimise funtction  first comment the line number 86 getUniquePrducts otherwise output will be wrong 
  
  
  