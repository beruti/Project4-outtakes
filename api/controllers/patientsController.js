
//AI
var Patient = require('../models/patient');

// function getAll(request, response){
//   User.find({}, function(err, users) {
//     if (err) return response.status(404).send(err);

//     response.render('index', {users: users})
//   });
// }

//////////////////////////////////////////
function patientSignUp(req, res){
	res.render('signup.html');
};

//////////////////////////////////////////////////////////
// function editUser(request, response){
// 	  var id = request.params.id;

// 	  User.findById(id, function(error, user) {
// 	    if(error) console.log(error)

// 	    response.render('editUser', {"user": user});
// 	  });
// 	}

// //////////////////////////////////////////////////////////
// //// AI function to show User profile
// function userShow(req, res){
// //  // select user particular to input URL
//   var id = req.params.id;
// //
//   // find by ID 
// //  //populate users comments (corresponding to comments in users model)
// //  // error check and send user data on success
//   User.findById({ _id: id }).exec(function(err, user) {
// //    //include error messages
//     if (err) return res.status(500).send(err);
//     if (!user) return res.status(404).send(err);
// //
// //    // if all ok then send user data in json
//     //res.status(200).send(user);
//     res.render('showUser', {"user": user})
//   })
// }
// /////////////////////////////////////////////////////////
// //// AI edit profile
// function userUpdate(req, res){

// 	var id = req.params.id;
// 	////mongoose command
// 	////Model.findByIdAndUpdate(id, [update], [options], [callback])
// 	//// {new: true} - cannot claim i understand this part
// 	console.log(req.body)
// 	User.findById(id, function(error, user){
// 	  if (error) console.log("hello fresh") // not printing so maybe it is working
// 	  if (user){
// 	  	console.log(user) // is printing but undefined
// 	  	//console.log(req.body.user[username]) // is not allowed

// 	  	user.username = req.body.user.username;
// 	  	user.email = req.body.user.email;
// 	  	user.password = req.body.user.password;
// 	  }

// 	  user.save(function(error){
// 	  	 if(error) console.log(error)
// 	  	res.redirect('/users/' + id)
// 	  });

// 	});
// }
// //////////////////////////////////////////////////
// // DELETE
// function userDelete(req, res) {
//   var id = req.params.id;

//   User.remove({_id: id}, function(error) {
//     if(error) console.log(error)
//     res.redirect('/users');
//   });
// }

//// AI: make all actions available in scope
module.exports = {	
	//------------------user CRUD--------------------
	//getAll : getAll,
	patientSignUp : patientSignUp,
	//createUser: createUser,
	// userUpdate: userUpdate,
	// userShow:   userShow,
	// editUser: editUser,
	// userDelete: userDelete
	//--------passport authentication methods -------
	//getLogin: getLogin,
	//postLogin: postLogin ,
	//getSignup: getSignup,
	//postSignup: postSignup,
	//getLogout: getLogout,
	//getSecret: getSecret
};
