let fs = require('fs');
 
fs.readFile(process.argv[2], 'utf8', function(err, contents) {
    
    if(err){
        console.log('you have an error');
    }else{
        console.log(contents.toUpperCase());
    }
});
 
// console.log('after calling readFile');

// var fs = require('fs');
 
// var contents = fs.readFileSync('file.txt', 'utf8');
// console.log(contents);