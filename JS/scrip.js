function sum(x , y)
{
    const summary = x + y
    return summary
}

const z = sum(15, 30)
console.log(z)

const sum2 = (x, y) => 
{
    const total = x + y
    return total
}

const fruits = ["apple", "banana", "orange"]

console.log(fruits[1])
console.log(fruits)
console.log(fruits.length)
fruits.push("kiwi")

for (const fruit of fruits)
{
    if (fruit === "banana")
    {
        console.log("This is a banana!")
    }
    else
    {
        console.log("This is not a banana!")
    }
}


const student = {
    name: "John",
    age: 20,
    height: 180,
    isStudent: true,
}

console.log(student.name)