const fs = require('fs');

// reading files
// fs.readFile('./docs/test.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');


// writing files
// fs.writeFile('./docs/test.txt', 'Hello, ALi', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/test2.txt', 'Hello, World', () => {
//     console.log('file was written');
// });


// directions
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.loge(err);
//         }
//         console.log('Folder deleted');
//     });
// };


// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}