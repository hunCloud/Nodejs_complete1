var fs=require("fs");

// A Callback function!

function readFinishedFile1(err, data){
    if(err) console.log(err);
    console.log("-Data of file 1: ");
    console.log(data.toString());
}

// A callback function!

function readFinishedFile2(err, data){
    if(err) console.log(err);
    console.log(data.toString());
}

// Read file 1:
console.log("\n");
console.log("Read file 1");

fs.readFile('C:\\Users\\NGUYEN NGOC HUNG\\Desktop\\note.txt', readFinishedFile1);