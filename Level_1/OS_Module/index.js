import os from 'node:os';

//Print CPU information
const infoCPU = os.cpus();
console.log(infoCPU);

// Print total RAM.
let mem = os.totalmem();
let gb = (mem / (1024 * 1024 * 1024)).toFixed(2)
console.log(gb);

// Print free RAM.
let reqMem = os.freemem();
let reqGb = (reqMem / (1024 * 1024 * 1024)).toFixed(2)
console.log(reqGb);

// Print hostname.
console.log(os.hostname())

// Print architecture.
console.log(os.arch())

// Print platform.
console.log(os.platform())