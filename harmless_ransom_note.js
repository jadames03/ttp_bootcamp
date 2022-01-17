/* Given two stings ransomNote and magazine, 
   return true if ransomNote can be constructed from magazine and false otherwise.
   Each letter in magazine can only be used once in ransomNote.*/

/* pseudo code */
/* in order to rearrange a string to another string...the source string must contain
   more characters than the desired string. in this case...magazine is shorter than 
   ransomNote.

   var makeArrangement = (magazine, ransomNote) => {
       if (magazine contains all letters needed to make ransomNote){
           return true
       }else {
           return false
       }
   }

   this would check all letters needed to create ransomNote. if all characters are found
   in string...then I would make the string into an array of substrings using the split 
   method. 
*/