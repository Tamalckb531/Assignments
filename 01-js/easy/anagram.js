/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //space removed using regex and made the whole string character lowercase
  const newStr1 = str1.replace(/\s+/g, '').toLowerCase();  
  const newStr2 = str2.replace(/\s+/g, '').toLowerCase();  

  //split the string and made and array then again joined them
  const ana_str1 = newStr1.split('').sort().join();
  const ana_str2 = newStr2.split('').sort().join();

  return ana_str1 == ana_str2;

}



module.exports = isAnagram;




