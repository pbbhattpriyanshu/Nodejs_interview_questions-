// Write a Hello World program.
console.log("Hello World!!")

// Print current date and time.
let dateTime = new Date().toLocaleString();
console.log(dateTime)

// Print Node.js version.
let version = process.version
console.log(version);

// Print command line arguments.
let arg = process.argv
console.log(arg)

// Print environment variables.
let env = process.env
console.log(env)

// Print current working directory.
let pwd = process.cwd()
console.log(pwd)