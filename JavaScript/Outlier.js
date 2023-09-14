// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let counterEven = 0
    let counterOdd = 0
    let arrPos = []
    integers.forEach(int => {
        const evenNum = (int % 2  == 0)
        
        if (evenNum === true){
            counterEven++
        } else {
            counterOdd++
        }
        
        arrPos.push(evenNum)
        
        
        
    })

    const posEven = arrPos.indexOf(true)
    const posOdd = arrPos.indexOf(false)

    if (counterEven > counterOdd) {
        

        return integers[posOdd]

    } else if (counterOdd > counterEven) {
        

       return integers[posEven]
    }
    
}

console.log(findOutlier([0, 1, 2]))