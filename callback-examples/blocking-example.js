var fs=require("fs");

// read file 1:
console.log("\n");
console.log("Read File 1");

var data1=fs.readFileSync('D:\\play.txt');

console.log("Data of file 1:");
console.log(data1.toString());

var fs2=require("fs");

// read file 2: 

console.log("\n");
console.log("Read File 2");

var data2=fs.readFileSync('C:\\Users\\NGUYEN NGOC HUNG\\Desktop\\Quá khứ của tôi.txt');
console.log("Data of file 2:");
console.log(data2.toString());

console.log("\n");
console.log("Program Ended");



