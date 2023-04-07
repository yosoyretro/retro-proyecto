let usera = 'admin' 
let passworda='admin'
//bueno eso depende del programador ajj
function autentificar(){
    user = document.getElementById('user').value;
    password = document.getElementById('password').value;
    if ((usera == user)||(passworda == password)){
        if (passworda == password){
            
            let v = swal({
                title:"Validacion valida",
                text:"Bienvenido "+user+" al sistema",
                icon:"success"
            })
            alert(v)
            location.href="menu.html";
            
            
        }else{
            swal({
                title:"Contraseña incorrecta",
                text:"Lo sentimos su contraseña no coinciden ",
                icon:"error"
        });
        }
        
    }else{
        swal("Error",
        "El usuario no existe",'error'
        );
    }
    
};