# Ovy95-Makers_TDD_Review9

Spellchecker 
Megasoft
Create a spellchecker function

Takes in a sentance (String) then returns string values with highlighted errors around the words 


  input                                   |||                   Output 
  <!--  1st  -->
  "dogg"         || "~dogg~"
<!-- 2nd  -->
"These words are spnelt correclty"              "These words are ~spnelt~ ~correclty~"

<!-- 3rd  -->
"I walked the catt!" ||  "I walked the ~catt~!"

Edge Cases 

raise an argument  error if any data type is passed apart from a string 

Spellchecker currently uses a bank of words to check against 