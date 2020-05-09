const { dbService } = require('./init.service')
const { MODEL_NAMES } = require('../constants');

dbService.get(MODEL_NAMES.post)
    .then((posts) => console.log(posts))

dbService.update(MODEL_NAMES.post, {id: '2', name: 'gal'})
    .then((updated) => console.log('succes: ', updated))
    .catch((err) => console.log('error!!!', err))

// dbService.delete(MODEL_NAMES.post, '2')
//     .then(() => console.log('succes'))
//     .catch((err) => console.log('error!!!', err))

// dbService.create(MODEL_NAMES.post, {id:'1'})
//     .then(() => dbService.get(MODEL_NAMES.post))
//     .then(() => dbService.find(MODEL_NAMES.post, '1'))
//     .then(data => console.log(data))

