const services = require('./init.service')
services.fileService.read('./init.service.js')
    .then(data => console.log(data))
    .catch(data => console.log(data))