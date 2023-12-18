import { TimeDifference, lowestTimeArray } from "./TimeFunctions.js";

function timeToEat(currentTime) {

    let TimeArray = []
    let TimeToBreakfast = TimeDifference(currentTime, "5:37 a.m.")
    let TimeToLunch = TimeDifference(currentTime, "12:40 p.m.")
    let TimeToDinner = TimeDifference(currentTime, "5:40 p.m.")

    TimeArray.push(TimeToBreakfast, TimeToLunch, TimeToDinner)
    let lowestArray = lowestTimeArray(TimeArray);

    if(lowestTimeArray(TimeArray)[0][0] === TimeToBreakfast[0] && lowestTimeArray(TimeArray)[0][1] === TimeToBreakfast[1]) {
        return ['Breakfast', lowestArray]
    } else if(lowestTimeArray(TimeArray)[0][0] === TimeToLunch[0] && lowestTimeArray(TimeArray)[0][1] === TimeToLunch[1]){
        return ['Lunch', lowestArray]
    } else if(lowestTimeArray(TimeArray)[0][0] === TimeToDinner[0] && lowestTimeArray(TimeArray)[0][1] === TimeToDinner[1]) {
        return ['Dinner', lowestArray]
    }

}

document.querySelector(".Calculate").addEventListener('click', function(e){
    
    let startTime = document.querySelector(".StartTime").value
    let NextTimeToEat = timeToEat(startTime)
    document.querySelector(".Time").textContent = `Next Time to eat is ${NextTimeToEat[0]} in ${NextTimeToEat[1][0][0]} hours and ${NextTimeToEat[1][0][1]} minutes.`
})


// console.log(timeToEat("5:40 a.m.", [17,0]))
// console.log(timeToEat("12:25 p.m.", [17,0]))
// console.log(timeToEat("4:50 p.m.", [17,0]))

//2:30 - 5
