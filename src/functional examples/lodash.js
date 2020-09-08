import {compose, pipe} from 'lodash/fp';

const trim = str => str.trim();
const wrap = (type, str) => `<${type}>${str}</${type}>`
const towLowerCase = str => str.toLowerCase();

//Higher Order Function; pipe can only handle functions that take in 1 parameter
const transform = pipe(trim, toLowerCase, wrap);

console.log(transform(input));