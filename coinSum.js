const coinSum = (total, coins) => {
  let counter = 0

  const recurse = (index, remainder) => {
    let coin = coins[index]

    console.log(coin, remainder)

    if (index === 0) {
      remainder % coin === 0 && counter++
      return
    }

    while (remainder >= 0) {
      
      recurse(index-1, remainder)
      remainder -= coin
    }
  }

  recurse(coins.length-1, total)

  return counter
}

let bag = [1, 5, 10]
console.log(coinSum(20, bag))