// Default Export Class

// class Nokia {

//     volumnUp(){

//         console.log("High Volumn");
//     }
// }

// export default Nokia;


// function show() {

//     console.log("Hello Module");
// }

// export default show;


// Default Export Variable
// const a = 10;
// export default  a;


//Named Export Class
// export class Nokia {
//     volumeUp() {

//         console.log("High Volume");
//     }
// }

// export {Nokia};


// Named Export Function
// export function show(){
//     console.log("Hello Module");
// }

//Named Export Variable
// const a = 10;
// export {a};

// Named Export Variable
class Nokia{
    volumeUp(){
        console.log("High Volume");
    }
}

function show() {

    console.log("Hello Module");
}

export const a = 10;
export default Nokia;
export {show};