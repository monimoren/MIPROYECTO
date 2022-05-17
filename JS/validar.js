        
// funciones que al final no use. Solo use Entregado       
        /*function validarEmail(valor) {
          if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
            //alert("La dirección de email " + valor + " es correcta.");
            //resultadonombre.innerHTML = 'correcta 😊';
            console.log("correcta" + valor);
          } else {
           alert("La dirección de email es incorrecta.");
           //resultadonombre.innerHTML = 'incorrecta 😏';
           console.log("incorrecta" + valor);
           return false;
          }
          
        } 
        
        function validarPhone(phone){
          if (Number(phone) == phone) {
            phone = Number(phone);
            console.log('es un numero');
          }
          else {
              if (phone != undefined) {
                      alert(phone + " No es un numero o agrego espacios");
                      return false;
                  }
              }
        }*/
        function Entregado() {
           alert("Su formulario fue enviado con éxito");
        }
  
//------obtengo valores del input------------------------------------------------------------------

const validacion = function(event){
  event.preventDefault();
  
    //----inputnombre-----------
    let inputnombre = document.getElementById('inputnombre');
    inputnombre = inputnombre.value;
    

    //---inputpais------------
    
    let inputpais = document.getElementById('inputpais');
    inputpais = inputpais.value;
    
    // ------------inputemail ---------------resultadomail
    
    let inputemail = document.getElementById('inputemail');
    inputemail = inputemail.value;
    // ------------inputphone -------------resultadophone---
      
    let inputphone = document.getElementById('inputphone');
    inputphone = inputphone.value;
    

  //// validacion ------------------

    //---valido nombre
    if (inputnombre.length <= 30) {
      
    }
    else { //resultadonombre.innerHTML = 'excedio la cantidad de caracteres';
          alert('Cantidad de caracteres excedida en su nombre');
          /*let alertError = document.querySelector('.alert');
          alertError.innerHTML = "excedio cantidad de caracteres en el nombre";*/
          return false; }
    
    //---valido pais
    if (inputpais.length <= 20) {
          
    }
    else { //resultadopais.innerHTML = 'Excedio la cantidad de caracteres😏'; }
        alert('Cantidad de caracteres excedida en pais');
        /*let alertError = document.querySelector('.alert');
        alertError.innerHTML = "excedio cantidad de caracteres en el pais";*/
        return false; }

    //---valido mail    
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inputemail)){
          
          //resultadonombre.innerHTML = 'correcta 😊';
          
        } else {
         alert("La dirección de email es incorrecta.");
         //resultadonombre.innerHTML = 'incorrecta 😏';
         return false;}  
    //---valido phone         
    if (Number(inputphone) == inputphone) {
        inputphone = Number(inputphone);
          console.log('es un numero');
        }
        else {
            //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
                if (inputphone != undefined) {
                    alert(inputphone + " No es un numero o agrego espacios");
                    return false;
                }
            } 
  
    //validarEmail(inputemail);
    //validarPhone(inputphone);
    
    //entrego con éxito
    Entregado()
}
  



