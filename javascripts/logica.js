let usera = 'admin' 
let passworda='admin'

function autentificar(){
    user = document.getElementById('user').value;
    password = document.getElementById('password').value;
    if ((usera == user)||(passworda == password)){
        if (passworda == password){
            

            location.href="menu.html";
            
            
        }else{
            swal({
                title:"Contraseña incorrecta",
                text:"Lo sentimos su contraseña no coinciden ",
                icon:"error"
        });
        }
        
    }else{
        swal({
            title:"Error",
            text:"El usuario no existe en nuestra base de datos ",
            icon:'error'
        });
    }
    
};

function cerrar(){
    location.href="login.html";
               
}