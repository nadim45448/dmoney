const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection:`https://api.postman.com/collections/33823808-0007b60b-0d38-4583-87b4-7ad210c24187?access_key=${process.env.access_key}`,
   collection:require('./collection/dmoney-users-api-postman_collection'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});