function productFib(prod){

    let fibSequence = [0, 1]

   for(let i = 2; i <= 500; i++){
    

    fibSequence.push(fibSequence[i-1] + fibSequence[i-2])
   }

   for(let i = 0; i < fibSequence.length; i++){
    for(let j = 0; j < fibSequence.length; j++){
        
        const prodFinder = fibSequence[i] * fibSequence[j]

        if (prodFinder === prod){

            
            return [fibSequence[i], fibSequence[j], true]
        }

        
    }
   }

   for(let i = 0; i < fibSequence.length; i++){
  
    const prodFinder = fibSequence[i] * fibSequence[i + 1]

    if (prodFinder > prod){
  
        return [fibSequence[i], fibSequence[i + 1], false]

    }
  
    }
   

}

console.log(productFib(800))
