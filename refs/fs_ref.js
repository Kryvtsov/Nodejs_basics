const fs = require('fs');
const path = require('path');
// File System

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw err;
//     console.log('Папка была создана')
// });

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world2 :)',
//     (err) => {
//         if (err) throw err;
//         console.log('Файл был создан');
//
//         // add content
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' From append file',
//             (err) => {
//                 if (err) throw err;
//                 console.log('Файл был изменен')
//             }
//         );
//
//         // read content
//         fs.readFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'utf-8',
//             (err, data) => {
//                 if (err) throw err;
//                 // console.log(Buffer.from(data).toString())
//                 console.log(data)
//             }
//         )
//     }
// );

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err;
        console.log('Файл был переименован')
    }
)
