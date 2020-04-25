const FileService = require('./file.service')
const DbService = require('./db.service')

const fileService = new FileService();
const dbService = new DbService(fileService);

module.exports =  {
    fileService,
    dbService
}

