module.exports = function(app) {

    var location = require('../controllers/location.controller.js');

    // Create a new Note
    app.post('/location', location.create);

    // Retrieve all Notes
    app.get('/location', location.findAll);

    // Retrieve a single Note with noteId
    app.get('/location/:noteId', location.findOne);

    // Retrieve a lat-long for finding nerarest locations
    app.get('/locationFinder', location.findLocation);

    // Update a Note with noteId
    app.put('/location/:noteId', location.update);

    // Delete a Note with noteId
    app.delete('/location/:noteId', location.delete);
}
