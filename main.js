
let bananaCount = Number(prompt("Введите количество бананов"))

if (bananaCount === 1) {
    console.log(bananaCount + " banana")
} else if (bananaCount > 1) {
    console.log(bananaCount + " bananas")
} else {
    console.log("Введите число больше 0")
}

let number = Number(prompt("Введите число для подсчета суммы четных чисел"))
let sum = 0

for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
        sum += i
    }
}

console.log("Сумма четных чисел до " + number + " = " + sum)


let base = Number(prompt("Введите число"))
let power = Number(prompt("Введите степень"))

let result = 1

for (let i = 1; i <= power; i++) {
    result *= base
}

alert("Результат возведения в степень: " + result)
