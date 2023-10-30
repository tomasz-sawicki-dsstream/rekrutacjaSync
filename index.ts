function first(array: number[]) {
  let iterationCount = 0
  for (let i = 0; i < array.length; i++) {
      iterationCount++
  }
  for (let j= 0; j < array.length; j++) {
      iterationCount++
  }

  for (let k= 0; k < array.length; k++) {
      iterationCount++
  }
  for (let i = 0; i < array.length; i++) {
      iterationCount++
  }
  for (let j= 0; j < array.length; j++) {
      iterationCount++
  }

  for (let k= 0; k < array.length; k++) {
      iterationCount++
  }
  console.log(iterationCount)
}

function second(array: number[]) {
    let iterationCount = 0

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
                iterationCount++
        }
    }
    console.log(iterationCount)
}




first([1, 2, 3, 4])

second([1, 2, 3, 4])