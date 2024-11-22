const fs = require('fs');
const path = require('path');

const folderPath = 'C:\\Users\\ACER\\Documents\\GitHub\\javascript-basics\\01-3-pb-js-first-steps-in-coding-exercise'; // Windows folder path

function listFilesInCurrentFolder(dirPath) {
    let results = [];
    const items = fs.readdirSync(dirPath);  // Read contents of the folder

    items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory() || stats.isFile()) {  // Include only files and directories
            results.push(item); // Add folder or file name to the list
        }
    });

    return results;
}

const allFilesAndFolders = listFilesInCurrentFolder(folderPath);

// Write the output to a text file
const outputPath = 'C:\\Users\\ACER\\Documents\\GitHub\\current-folder-and-files-names-list.txt';
fs.writeFileSync(outputPath, allFilesAndFolders.join('\n'), 'utf8');

console.log('The file list has been saved to current-folder-and-files-names-list.txt');
