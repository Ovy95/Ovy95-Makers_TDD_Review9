class Megasoft {
  
   spellchecker(sentance) {
    
    let wordBank = ["dog","good","morning"]
    let sentanceArray = sentance.split(" ")

    for (let index = 0; index < sentanceArray.length; index++) {

      if ( wordBank.includes(sentanceArray[index]) === false){
        sentanceArray[index] = '~'+sentanceArray[index]+'~'
      }
  
    }
   let checkCompleted = sentanceArray.join(' ')

    return checkCompleted
  }

}
