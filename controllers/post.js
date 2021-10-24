const Hico_Customer = require('../modules/post');
const Hico_Project = require('../modules/createProject');
const Employee = require('../modules/createEmployee');



exports.getPosts = (req, res) => {

    // Hico_Customer.find({}, function(err, foundItems){

        res.sendFile(__dirname + "/index.html")

    // })

};

exports.getEmployee = (req, res) => {

   const employee =  Employee.find()
   .then((employee) => {

    res.send(employee)

   })
   .catch((err => console.log(err.message)));

}





exports.getCustomer = (req, res) => {

    const client =  Hico_Customer.find()
    .then((client) => {
 
     res.send(client)
 
    })
    .catch((err => console.log(err.message)));
 
 }

exports.getProjects = (req, res) => {

    Hico_Project.find().then((projects) => {

     res.render("project", {ProjectName: projects })
   
 
    })
    .catch((err => console.log(err.message)));
 
 }




exports.createPost = (req, res) => {

    const Client = new Hico_Customer(req.body);

    console.log('Creating Post:', Client)

    Client.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.status(200).json({
            post: result
        });

      });

};

exports.createProject = (req, res) => {

    const Project = new Hico_Project(req.body);

    console.log('Creating Project: ', Project)

    Project.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.redirect("/projects")

      });

      

};

exports.createEmployee = async (req, res) => {
    try {
       //validate req.body data before saving
       const publisher = new Employee(req.body);
       await publisher.save();
       res.status(201).json({success:true, data: publisher });
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
    }
 }


 