var fs = require('fs');
fs.rename('rename.txt','myrenamedfile.txt',function(err){
    console.log('File renamed');
});
