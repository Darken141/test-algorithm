const peopleInTheatre = 3;
const sitOrderArr = [3, 1, 2];
const wantLeave = [1, 3, 2];

const peopleInTheatre2 = 5;
const sitOrderArr2 = [1, 2, 3, 4, 5];
const wantLeave2 = [1, 5, 2, 4, 3];

const solveProblem = (total, seatingOrderArr, boredArr) => {
    let leavingOrder = []
    console.log('Sits: ' + seatingOrderArr)
    console.log("borring order: " + boredArr)
    console.log("initial leaving order: " + leavingOrder)

    for (let i = 0; i < total;) {
        if (boredArr[i] === seatingOrderArr[0]) {
            leavingOrder.push(boredArr[i])
            seatingOrderArr.shift();
            i = 0
        } else if (boredArr[i] === seatingOrderArr[seatingOrderArr.length - 1]) {
            leavingOrder.push(boredArr[i])
            seatingOrderArr.pop();
            i = 0
        } else {
            i++
        }

    }
    console.log("leaving in the order: " + leavingOrder)
}
console.log(" ")
console.log(" ")
console.log("FIRST EXAMPLE")
console.log("---")
// output: 3,1,2
solveProblem(peopleInTheatre, sitOrderArr, wantLeave)
console.log("---")
console.log(" ")
console.log(" ")
console.log("SECOND EXAMPLE")
console.log("---")
// // output: 1,5,2,4,3
solveProblem(peopleInTheatre2, sitOrderArr2, wantLeave2)