module.exports.home = function(request,response){

    // console.log(request.cookies);
    // response.cookie('user_id',25);
    return response.render('home',{
        title:"Home"
    });
    // return response.end("<h1> Express is up for codeial !</h1>");
} 

// module.exports.abcd = function(request,response){
//     return response.end("<h1> hey saksham this side! !</h1>");
// } 