const fs = require('fs');
const path = require('path');
var appRoot = require('app-root-path');

function copyFile(source, destination) {
    try {
        if(fs.existsSync(destination) === false) {
            console.log(`copying file: ${path.basename(source)}`);
            fs.copyFileSync(source, destination);
        } else {
            console.log(`${destination} already exists.`);
        }
    } catch (error) {
        console.log(error);
    }
}
function copyProjectFiles(projectPath) {
    fs.readdir(projectPath, (err, files) => {
        if(err) {
            console.log(err);
        }
        try {
            
            for(var file of files) {
                const source = path.join(projectPath, file);
                const destination = path.join(process.cwd(), file);
                copyFile(source, destination);
            }
        } catch (error) {
            console.log(error);
        }
    });
}
function copyCommonFiles() {
    const commonPath = path.join(appRoot.toString(), 'lib/common')
    fs.readdir(commonPath, (err, files) => {
        if(err) {
            console.log(err);
        }
        try {
            
            for(var file of files) {
                const source = path.join(commonPath, file);
                const destination = path.join(process.cwd(), file);
                copyFile(source, destination);
            }
        } catch (error) {
            console.log(error);
        }
    });
}
module.exports = (project) => {
    const projectPath = path.join(appRoot.toString(), 'lib/', project);
    copyProjectFiles(projectPath);
    copyCommonFiles();
}

