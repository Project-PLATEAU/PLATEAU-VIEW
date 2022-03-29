var fs = require('fs');
if (process.argv.length < 7) {
    console.error('createUserData <user data filename> <deployment name> <aws region> <aws S3 packages path> <stack name>');
    process.exit(1);
}

var userDataTemplate = fs.readFileSync(process.argv[2], 'utf8');
var userData = userDataTemplate.replace(/{{deploymentName}}/g, process.argv[3]);

userData = userData.replace(/{{awsRegion}}/g, process.argv[4]);
userData = userData.replace(/{{awsS3PackagesPath}}/g, process.argv[5]);
userData = userData.replace(/{{stackName}}/g, process.argv[6]);

process.stdout.write(new Buffer(userData).toString('base64'));
