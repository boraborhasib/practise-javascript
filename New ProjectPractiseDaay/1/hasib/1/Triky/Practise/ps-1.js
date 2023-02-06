/* ৫. এইটা একটু ট্রিকি হতে পারে,,,,, 
1. একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।
2. তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। 
3. এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। 
4. অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে।
5. আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে।
6. এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */

function numbers(num) {
    let store = []; 
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        // console.log(element);
        if (element > 0) {
            // store = num[i] ; 
            store.push(element); 
        }
    }
    return store ; 
}


let someOneArray =  [12 , 32  , 11 , 33, 54 , -54 , -76 , -44 , 65 , 12 , 32 ]; 
let sent = numbers(someOneArray); 
console.log(sent);