// import mongoose
const mongoose = require('mongoose');



  const ProjectSchema = new mongoose.Schema({

    ProjectName: {
        type: String
    },
    Project_Notes: {
        type: String
    },
    budget: {
        type: Number
    },
    Employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
     }],
     Client: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hico_Customer'
     }]

});

 module.exports = mongoose.model("Hico_Project", ProjectSchema );


