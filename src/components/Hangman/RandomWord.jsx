var fruits =[
"tomatoes",
"bananas",
"watermelons",
"apples",
"grapefruit",
"grapes",
"oranges"
]
function randomWord(){
    return fruits[Math.floor(Math.random()*fruits.length)];
}
export {randomWord};