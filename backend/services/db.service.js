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
                this.fileService.write(fileName, JSON.stringify(updated));
            })
    }

    update(modelName, data) {
        return this.get(modelName)
            .then(objects => {
                const parsed = JSON.parse(objects);
                const object = parsed.find(p => p.id === data.id);
                if(object) {
                    object = data;
                }
                return parsed;
            })
            .then((updated) => {
                const fileName = this.dict[modelName];
                this.fileService.write(fileName, JSON.stringify(updated));
            })
    }
}





module.exports = DbService;