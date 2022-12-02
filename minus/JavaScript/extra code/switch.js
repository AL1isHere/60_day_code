//switch

let grade = "HELLO WORLD";
let gradeNum = 95;

switch(grade){
    case "A":
        console.log("you did great")
        break;
    case "B":
        console.log("you did good")
        break;
    case "C":
        console.log("you did okay")
        break;
    case "D":
        console.log("you passed .. barely")
        break;
    case "F":
        console.log("you failed")
        break;
    default:
        console.log(grade, "is not a letter grade")
}

switch(true){
    case gradeNum >= 90:
        console.log("you did great")
        break;
    case gradeNum >= 80:
        console.log("you did good")
        break;
    case gradeNum >= 70:
        console.log("you did okay")
        break;
    case gradeNum >= 60:
        console.log("you passed .. barely")
        break;
    case gradeNum < 60:
        console.log("you failed")
        break;
    default:
        console.log(gradeNum, "is not a number grade")
}
