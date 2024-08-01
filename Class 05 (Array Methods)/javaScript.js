console.log("Atikur Rahman");


var names = ["Atik", "Habib", "Yousuf", "Asif"];
console.log(names);
console.log(names[3]);

// Value update
names[3] = "Saad";
console.log(names);

//new value add in end index
names.push("Fardin");
names.push("Shanto");
console.log(names);

//new value remove in end index
names.pop();
names.pop();
console.log(names);

//new value insert in first index
names.unshift("Sakib");
names.unshift("Shamim");
console.log(names);


//new value remove in first index
names.shift();
console.log(names);