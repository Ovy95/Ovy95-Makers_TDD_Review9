class Megasoft {
  
   spellchecker(sentance) {
    let wordBank = ["dog","good","morning"]
    let punctuation = [".","?","!"]
    let sentanceArray = sentance.split(" ")

    for (let index = 0; index < sentanceArray.length; index++) {
     let  add = ""
      if (punctuation.includes(sentanceArray[index].slice(-1))){
        add += sentanceArray[index].slice(-1) 
        sentanceArray[index] = sentanceArray[index].slice(0, -1);
      }

      if ( wordBank.includes(sentanceArray[index]) === false){
        sentanceArray[index] = '~'+sentanceArray[index]+'~'+ add
      } else {
        sentanceArray[index] = sentanceArray[index]+add
      }
    }
   let checkCompleted = sentanceArray.join(' ')

    return checkCompleted
  }

}
