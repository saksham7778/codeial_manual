const User= require('../models/user')

module.exports.profile = function(request,response){
   
    if(request.cookies.user_id){
        User.findById(request.cookies.user_id,function(err,user){
            if(user){
                return response.render('users_profile',{
                  title:"User Profile",
                    user:user
                })
            }
            return response.redirect('/users/sign-in')
        });
    }else{
        return response.redirect('/users/sign-in');
    }
    // return response.render('users_profile',{
    //     title:"helloSaksham"
    // });
} 


//render the sign up page
module.exports.signup = function(request,response){
    
    return response.render('user_sign_up',{
        title:"Saksham | Sign Up"
    });
}


//render the sign in page
module.exports.signin = function(request,response){

    return response.render('user_sign_in',{
        title:"Saksham | Sign In"
    });

}


// get the sign up data
module.exports.create = function(request,response){
    
    if(request.body.password != request.body.confirm_password){
        return response.redirect('back');
    }

    User.findOne({ email:request.body.email}, function(err,user){
        if(err){    console.log("error in finding user in sign up");    return;     }

        if(!user){
            User.create(request.body,function(err,user){
                if(err){    console.log("error in finding user in sign up");    return;     }
                
                return response.redirect('/users/sign-in');
            })
        }
        else{
            return response.redirect('back');
        }
    });
}


// sign in and create a session for user
module.exports.createSession = function(request,response){
    
    //steps to authenticate

    //find the user

    User.findOne({ email:request.body.email}, function(err,user){
        if(err){    console.log("error in finding user in sign up");    return;     }

        // handle user found
        if(user){

        // handle password which dont match
        if(user.password != request.body.password){
            return response.redirect('back');
        }

        //handle session creation
        
        response.cookie('user_id',user.id);
        return response.redirect('/users/profile');

        }
        //handle user not found
        else{
            return response.redirect('back');
        }
    });
    
}


module.exports.sign_out = function(request,response){

    response.cookie('user_id',"",-1);
    return response.redirect('/users/sign-in');
}