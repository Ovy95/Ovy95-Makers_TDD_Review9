class Megasoft {
  
   spellchecker(sentance) {
    console.log(sentance.slice(-1))
    let wordBank = ["dog","good","morning"]
    let punctuation = [".","?","!"]
    let sentanceArray = sentance.split(" ")


    for (let index = 0; index < sentanceArray.length; index++) {
      console.log(sentanceArray[index].slice(-1))
     let  add = ""
      if (punctuation.includes(sentanceArray[index].slice(-1))){
        add += sentanceArray[index].slice(-1) 
        console.log(add)
        console.log(sentanceArray[index])
        sentanceArray[index] = sentanceArray[index].slice(0, -1);
        console.log(sentanceArray[index])
      }

      if ( wordBank.includes(sentanceArray[index]) === false){
        sentanceArray[index] = '~'+sentanceArray[index]+'~'+ add
      } 
      
  
    }
   let checkCompleted = sentanceArray.join(' ')

    return checkCompleted
  }

}
