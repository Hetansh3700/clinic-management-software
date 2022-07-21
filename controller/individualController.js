const Doc = require('../model/appointment');

const appointment_index = (req, res) => {
    Doc.find().sort({ createdAt: -1 })
    .then(result => {
    res.render('allPatients', { apps: result, title: 'All appointments' });
    })
    .catch(err => {
    console.log(err);
    });
};


const appointment_search_get = (req, res) => {
    const name = req.body.name;
    // console.log(req.body);
    Doc.findOne({name: name})
    .then(result => {
        res.render('individual', { patient : result, title: 'Patient Details' });
        // console.log(result)
    })
    .catch(err => {
        ;console.log(err);
    })
};

module.exports = {
    appointment_search_get,
    appointment_index
}