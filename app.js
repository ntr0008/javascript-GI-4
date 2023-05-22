////////////////////////////////  EASY  //////////////////////////////
function average(arr) {
  let aveNum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    aveNum += arr[i];
  }

  return aveNum / arr.length;
}

console.log(average([1, 4, 7]));
console.log(average([10, 5]));
console.log(average([1.5, 3, 2.5, 1]));

/////////////////////////////  MEDIUM  /////////////////////////////////////////////
function indexArray(array, target) {
  return array.indexOf(target);

  //   return array.sort(() => Math.random() - 0.5);
}
function targetArray(target) {
  if (target == array.indexOf(array[i])) {
  }
}

// console.log(indexArray([1, 2, 3, 4, 5, 6, 7], 1));

////////////////////////////////  HARD  //////////////////////////////////////////
let redBtn = document.querySelector(".red-js");
let whiteBtn = document.querySelector(".white-js");
function bodyColor(className) {
  let bodyEl = document.querySelector("body");

  bodyEl.classList = className;
}

///////////////////////////////  VERY HARD  ////////////////////////////

function minCoins(coins, money, value) {
  if (value == 0) return 0;

  let maxNum = Number.MAX_VALUE;

  for (let i = 0; i < money; i++) {
    if (coins[i] <= value) {
      let fewestcoins = minCoins(coins, money, value - coins[i]);

      if (fewestcoins != Number.MAX_VALUE && fewestcoins + 1 < maxNum)
        maxNum = fewestcoins + 1;
    }
  }
  return maxNum;
}

let coins = [1, 2, 5];
let money = coins.length;
let value = 11;
console.log(minCoins(coins, money, value));
