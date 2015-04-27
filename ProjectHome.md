jsBCrypt is an implementation of [BCrypt](http://bcrypt.sourceforge.net/) written in JavaScript.

It uses Components of the [ISAAC](https://github.com/rubycon/isaac.js).

It is based upon [jBCrypt](http://www.mindrot.org/projects/jBCrypt/)

Usage Example:
```
function result(hash){
        $("#hash").val(hash);
}
function crypt(){
        var salt;
        if($("#salt").val().length != 0){
                salt = $("#salt").val();
        }else{
                try{
                        salt = bcrypt.gensalt($("#rounds").val());
                }catch(err){
                        alert(err);
                        return;
                }
                $("#salt").val(salt);
        }
        try{

                bcrypt.hashpw($("#password").val(), $("#salt").val(), result, function() {});
        }catch(err){
                alert(err);
                return;
        }
}
```

You can try a test instance of this [here](http://javascript-bcrypt.googlecode.com/hg/example.html)