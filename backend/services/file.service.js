const fs = require('fs');

class FileService {
    constructor() {
        console.log('@file.service: initiating fileService')
    }

    /**
     * Write content to file
     * @param {string} fileName 
     * @param {string} data 
     * @returns Promise<string>
     */
    write(fileName, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(fileName, data, function (err) {
              if (err) {
                  reject(err)
              } else {
                  resolve(`file ${fileName} written successfully`)
              }
            })
        })

    }

    /**
     * Read a file content
     * @param {string} fileName 
     * @param {string} data 
     * @returns Promise<string> 
     */
    read(fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, "utf8", function (err, data) {
              if (err) {
                  reject(err)
              } else {
                  resolve(data)
              }
            })
        })
    }
}

module.exports = FileService;

