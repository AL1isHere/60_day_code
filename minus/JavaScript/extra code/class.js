//class = blueprint for creating object
//        define what properties and methods they have
//        use a constructor for uniquq properties

class Player{
    score = 0

    pause(){
        console.log("you pause the game")
    }
    exit(){
        console.log("you exited the game")
    }
}

const player1 = new Player()
const player2 = new Player()


player1.score += 1

console.log(player1.score)
console.log(player2.score)
player2.exit()
player1.pause()