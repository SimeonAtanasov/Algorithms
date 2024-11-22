const fs = require('fs');
const path = require('path');

const folderPath = 'C:\\Users\\ACER\\Documents\\GitHub'; // Windows folder path

function listAllFiles(dirPath) {
    let results = [];
    const items = fs.readdirSync(dirPath);

    items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            results.push(item); // Add folder name to list
            results = results.concat(listAllFiles(fullPath)); // Recursively get files in subdirectories
        } else {
            results.push(item); // Add file name to list
        }
    });

    return results;
}

const allFilesAndFolders = listAllFiles(folderPath);

// Write the output to a text file
const outputPath = 'C:\\Users\\ACER\\Documents\\GitHub\\folder-and-files-names-list.txt';
fs.writeFileSync(outputPath, allFilesAndFolders.join('\n'), 'utf8');

console.log('The file list has been saved to folder-and-files-names-list.txt');
