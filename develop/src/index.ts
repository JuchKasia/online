// console.log("Hello World!");

import "../index.js";
import "../style.css";
import "../style.scss";
import "../normalize.css";
import '../list.ts';


// import {readFileSync} from 'fs';
// declare function require(params:string);
// declare let require:any;


// const fs = require('fs');
// import fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
// import * as fs from 'fs';
import fs from 'fs';
const list = fs.readFileSync('list.json','utf8');
console.log(typeof (list));

// const li = JSON.parse(list);
// console.log(li[0].id)