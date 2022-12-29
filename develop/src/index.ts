// console.log("Hello World!");

import "../index";
import "../style.css";
import "../style.scss";
import "../normalize.css";

// function addNumbers(x: number, y: number) {
//     return x + y;
//   }
//   console.log(addNumbers(3, 6));
// console.log('Hello world!')

// const category = document.querySelectorAll('.category');

import * as fs from 'fs';
import * as path from 'path';
fs.readFile(path.join(__dirname, '../../client/index.html'), 'utf8', (error, data) => {
    // ...
})
// import fs from 'fs';
// const list: string | number = fs.readFileSync('../list.json','utf-8');
// console.log(list.indexOf[2]);
