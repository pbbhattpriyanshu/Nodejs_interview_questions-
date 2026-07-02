//File System (fs) module
import fs from 'node:fs';

//Write a file
let title = "message.txt"
const content = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`Database/${title}`, content, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

//Read file
fs.readFile(`Database/${title}`, 'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Append Data
let updateContent = " My name is piyush ";

fs.appendFile(`Database/${title}`, updateContent, (err) => {
    if (err) throw err;
    console.log("Data is Append Sucessfully")
})

//Delete File
fs.unlink(`Database/${title}`, (err) => {
    if (err) throw err;
    console.log("File remove sucessfully")
})

//Rename File
let newName = "Information.txt";

fs.rename(`Database/${title}`, `Database/${newName}`, (err) => {
    if (err) throw err;
    console.log("File name is Updated")
})

//Create Folder
let folderName = "Data";

fs.mkdir(`Database/${folderName}`, (err) => {
    if (err) throw err;
    console.log("Folder is Created");
})

//Delete folder
fs.rmdir(`Database/${folderName}`, (err) => {
    if (err) throw err;
    console.log("folder deleted")
})

//Read directory contents
fs.readdir("Database", (err, data) => {
    if (err) throw err;
    console.log(data);
})