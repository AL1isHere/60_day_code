
let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

shuffle(cards)

//console.log(cards)
cards.forEach(card => console.log(card))

function shuffle(array){
    let currrentIndex = array.length

    while(currrentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length)
        currrentIndex -= 1

        let temp = array[currrentIndex]
        array[currrentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array

}

