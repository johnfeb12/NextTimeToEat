import { ConvertToMilTime } from "./MilTimeConveter.js";

function TimeDifference(InTime, ToTime) {

//In Time = [0, 50]
//To Time = [5,40] - 5:30pm
// Result - [4,50]
// []


let InTimeConverted = ConvertToMilTime(InTime);

let ToTimeConverted = ConvertToMilTime(ToTime);

let TimeDifference = [0,0]



//First Handle Minutes/////////////////////////////////////////////////////////////



    let IsRunning = true;
    let MinCounter = 0

    while (IsRunning) {
        

        if(InTimeConverted[1] === ToTimeConverted[1]){
            TimeDifference[1] = MinCounter
            IsRunning = false;
        } else{
            InTimeConverted[1] ++;
            MinCounter ++;

            if(InTimeConverted[1] === 60){
                InTimeConverted[1] = 0;
                InTimeConverted[0] += 1
                TimeDifference[0] ++;
            }
        }




    }


/////////////////////////////////////////////////////////////////////////////////////

//Handle Hours

let IsHourRunning = true;
let HourCounter = 0;

while (IsHourRunning) {

    if(InTimeConverted[0] === 24) {
        InTimeConverted[0] = 0
    }
    
    if(InTimeConverted[0] === ToTimeConverted[0]){
        TimeDifference[0] = HourCounter
        IsHourRunning = false;
    }else {
        InTimeConverted[0] ++;
        HourCounter ++;
    }


}




return TimeDifference





}


function lowestTimeArray(TimeArray) {

    let lowestTime = [];
    let lowestMinutes = 0;

    TimeArray.forEach(e => {

        let totalMinutes = 0;

        

        if(lowestTime.length === 0) {
            totalMinutes += e[0] * 60
            totalMinutes += e[1]

            lowestTime = e
            lowestMinutes = totalMinutes;

        } else {
            totalMinutes += e[0] * 60
            totalMinutes += e[1]

            if (totalMinutes < lowestMinutes) {
                lowestTime = e;
                lowestMinutes = totalMinutes;
            }
        }
    });

    return [lowestTime, lowestMinutes]

}

export { TimeDifference, lowestTimeArray }