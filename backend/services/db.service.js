const { MODEL_NAMES } = require('../constants');
const path = require('path')

class DbService {
    dict = {
        [MODEL_NAMES.post]: path.resolve(__dirname, '../data/posts.json'),
        [MODEL_NAMES.user]: path.resolve(__dirname, '../data/users.json'),
        [MODEL_NAMES.like]: path.resolve(__dirname, '../data/likes.json')
    }

    constructor(fileService) {
        this.fileService = fileService;
        console.log('@db.service: initiating dbService')
    }

    get(modelName) {
        const fileName = this.dict[modelName];
        return this.fileService.read(fileName);
    }

    find(modelName, id) {
        return this.get(modelName)
            .then(objects => {
                const parsed = JSON.parse(objects);
                return parsed.find(p => p.id === id);
            })
    }

    create(modelName, data) {
        return this.get(modelName)
            .then((objects) => {
                const parsed = JSON.parse(objects);
                const lastId = parsed[parsed.length-1].id;
                data.id = parseInt(lastId) + 1;
                parsed.push(data)
                return parsed;
            })
            .then((updatedObjects) => {
                const fileName = this.dict[modelName];
                this.fileService.write(fileName, JSON.stringify(updatedObjects))
            })

    }
    
    delete(modelName, id) {
        return this.get(modelName)
            .then(objects => {
                const parsed = JSON.parse(objects);
                const index = parsed.findIndex(p => p.id === id);
                if(index > -1) {
                    parsed.splice(index, 1);
                }
                return parsed;
            })
            .then((updated) => {
                const fileName = this.dict[modelName];
                return this.fileService.write(fileName, JSON.stringify(updated));
            })
    }

    update(modelName, data) {
        return this.get(modelName)
            .then(objects => {
                const parsed = JSON.parse(objects);
                let object = parsed.findIndex(p => p.id === data.id);
                if(object !== undefined) {
                    parsed[object] = data;
                }
                console.log('parsed: ', parsed);
                console.log('ovbject: ', object);
                console.log('data: ', data);
                return parsed;
            })
            .then((updated) => {
                const fileName = this.dict[modelName];
                this.fileService.write(fileName, JSON.stringify(updated));
            })
    }
}





module.exports = DbService;