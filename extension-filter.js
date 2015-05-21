// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

var path = require('path'),
    fs = require('fs');

let test = (p, ext) => {
    return fs.readdir(p, (err, files) => {
        if (err) {
            throw err;
        }
        var x = files.filter((each) => {
            // console.log(each + ' ' + path.extname(each) + ' ' + ext);
            return path.extname(each) === ext;
        });
        console.log(x);
    });
};

test(process.argv[2], process.argv[3]);