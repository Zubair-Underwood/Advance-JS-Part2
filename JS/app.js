// Default Import Class

// import Nokia from "./mobile.js";
// const n = new Nokia();

// n.volumnUp();



// import show from "./mobile.js";

// show();



// import a from "./mobile.js";

// console.log(a);


// Named Import Class
// import {Nokia} from "./mobile.js";
// const n = new Nokia();
// n.volumeUp();


// Named import Function
// import {show} from "./mobile.js";
// show();

// import { a } from "./mobile.js";
// console.log(a);

// Named Import
// import * as device {Nokia, show, a} from "./mobile.js";

// import * as device from "./mobile.js";
// const n = new device.Nokia();
// n.volumeUp();
// device.show();
// console.log(device.a);

// importing default export and exports
import Nokia, {show, a} from "./mobile.js";
const n = new Nokia();
n.volumeUp();
show();
console.log(a);