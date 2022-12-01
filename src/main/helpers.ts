import fs from 'fs';

export function readFile(file: any) {
  return new Promise(
        (resolve) => {
    const reader = new FileReader(); // create the reader
    reader.addEventListener('load', () => resolve(reader.result), false); // what ro do when the
    reader.readAsDataURL(file); // read the file
        }
  )
}