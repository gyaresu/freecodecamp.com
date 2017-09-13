// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

let path = require('path'),
    fs = require('fs');

module.exports = (p, ext) => {
    fs.readdir(p, (err, files) => {
        if (err) {
            throw err;
        }
        files.filter((each) => {
            return path.extname(each) === ext;
        }).forEach((file) => {
            console.log(file);
        });
    });
};