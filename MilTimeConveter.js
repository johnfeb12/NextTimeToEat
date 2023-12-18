function ConvertToMilTime(TimeIn){
    //EX 1: 12:00 A.M. - 0:0
    //EX 2: 5:00 A.M. - 5,0
    //EX 3: 12:00 P.M. - 12,0
    //EX 4: 4:00 P.M. - 16,0

    let TimeOut = [0,0]
    let SentInTimeArray = TimeIn.split(' ')[0].split(':').map((e) => parseInt(e));

if(TimeIn.indexOf('A.M.') !== -1 || TimeIn.indexOf('a.m.') !== -1){

    if(TimeIn.indexOf('12:') !== -1){
        TimeOut[0] = 0
        TimeOut[1] = SentInTimeArray[1]
    }else{
        TimeOut[0] =  SentInTimeArray[0]
        TimeOut[1] = SentInTimeArray[1]
    }

} else if(TimeIn.indexOf('P.M.') != -1 || TimeIn.indexOf('p.m.') != -1){
    
    if(TimeIn.indexOf('12:') !== -1){
        TimeOut[0] = 12
        TimeOut[1] = SentInTimeArray[1]
    }else{
        TimeOut[0] = SentInTimeArray[0] + 12
        TimeOut[1] = SentInTimeArray[1]
    }

} 
    return TimeOut
}

export { ConvertToMilTime }