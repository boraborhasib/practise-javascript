/* এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে।
 তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে। */

 function hasib(array){
    let you = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        // console.log(element); 
        if (element > 5) {
            you.push(element);
        }
    }
    return you.length ; 
 }

 let myArray =  [-1,2,-3,4,5,6,-7,8,-9,10];

 var iam = hasib(myArray); 
 console.log(iam);