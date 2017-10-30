
//---------------------------------------------signup page call------------------------------------------------------
exports.states = function(req, res){
   message = '';
   if(req.method == "POST"){
      // var bcrypt = require('bcrypt');
      var post = req.body;
      console.log(post);
      var state= post.state;
      var sql = "SELECT * FROM users WHERE homeState= '"+state+"'";
      var query = db.query(sql, function(err, result) {
        message = "Success! Your account has been created.";
        //res.render('signup.ejs',{message: message});
        console.log(result);
      });

   } else {
      //res.render('signup');
   }
};

//-----------------------------------------------login page call------------------------------------------------------
exports.getOfficials = function(req, res){
    if(req.method == "GET"){
      var bcrypt = require('bcrypt');
      var post  = req.body;
      console.log(post);
    }


};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.dashboard = function(req, res, next){

   var user =  req.session.user,
   userId = req.session.userId;
   console.log('ddd='+userId);
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM users WHERE id='"+userId+"'";

   db.query(sql, function(err, results){
      res.render('dashboard.ejs', {user:user});
   });
};
//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM users WHERE id='"+userId+"'";
   db.query(sql, function(err, result){
      res.render('profile.ejs',{data:result});
   });
};
//---------------------------------edit users details after login----------------------------------
exports.editprofile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM users WHERE id='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};
