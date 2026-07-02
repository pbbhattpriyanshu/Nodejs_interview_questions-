//Path module
import path from 'node:path';

//Resolve paths
const absolutePath = path.resolve("Path_Module", "index.js");
console.log(absolutePath);

//Join paths
const fullPath = path.join("Level_1", "Mark", "Ironman");
console.log(fullPath);

//Parse Path
const parsed = path.parse("C:\Users\Piyush\Desktop\Books\pythonBOOK.pdf");
console.log(parsed);
console.log(parsed.name);

//Normalize path
const messy = "/users/admin/projects/../docs../resume.pdf"
console.log(path.normalize(messy))