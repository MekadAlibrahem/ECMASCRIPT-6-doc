/**
 * Destructuring 
 * 
 */
/** تبديل مكان المتغيرات  */ 
  // old way  
// befor swap 
var  book = "video" ;
var video = "book" ;

console.log(` befor swapping :  the book is ${book} and The video is ${video}`) ;


var temp =  book ; 
book = video ; 
video = temp ; 
// after swapping
console.log(` after swapping (old way) :  the book is ${book} and The video is ${video}`) ;
  // new  way  
// befor swap 
var  book_1 = "video" ;
var video_1 = "book" ;

console.log(` befor swapping :  the book is ${book_1} and The video is ${video_1}`) ;

[book_1 , video_1] = [video_1 , book_1];
// after swapping
console.log(` after swapping (new way) :  the book is ${book} and The video is ${video}`) ;
