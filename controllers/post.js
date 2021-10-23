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

    const projects =  Hico_Project.find()
    .then((projects) => {

        let project_notes = projects[0].Project_Notes;
        let project_name = projects[0].ProjectName;
 
     res.send("<div class='container' style='width: 20%; background-color: #f9f9f9f9'> <h1> PROJECT name </h1>" + project_name + " <br>" + "<h1> Project Details </h1>" + project_notes + "</div>")
     
 
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
            res.send("Success")

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
