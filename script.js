

function valida(f) {

  f.elements[3].value=f.elements[3].value.replace(/[^0-9]/g, "");
    var ok = true;

    if(f.elements[0].value == "")
    {
      document.getElementById("uwu").style.display = 'block';
      document.getElementById("E1").style.display = 'block';

      ok = false;
    }
  
    if(f.elements[1].value == "")
    {
      document.getElementById("uwu2").style.display = 'block';
      document.getElementById("E2").style.display = 'block';

      ok = false;
    }
  

    if(f.elements[3].value.lengt <5)
    {
      document.getElementById("uwu7").style.display = 'block';
      document.getElementById("E3").style.display = 'block';

      ok = false;
    }
    if(f.elements[4].value == "")
    {
      document.getElementById("uwu5").style.display = 'block';
      document.getElementById("E4").style.display = 'block';

      ok = false;
    }
    if(f.elements[5].value == "")
    {
      document.getElementById("uwu6").style.display = 'block';
      document.getElementById("E5").style.display = 'block';

      ok = false;
    }

if (ok== false){
  document.getElementById("E").style.display = 'block';
  document.getElementById("E6").style.display = 'block';
  document.getElementById("E7").style.display = 'block';
}
if(ok== true){
  
  document.getElementById("form1").style.display = 'none';
  document.getElementById("form2").style.display = 'block';


}
   
        return false;

  }
function ocultar(){
    document.getElementById("uwu").style.display = 'none';
    document.getElementById("uwu2").style.display = 'none';
    document.getElementById("uwu3").style.display = 'none';
    document.getElementById("uwu4").style.display = 'none';
    document.getElementById("uwu5").style.display = 'none';
    document.getElementById("uwu6").style.display = 'none';
    document.getElementById("uwu7").style.display = 'none';
    document.getElementById("E").style.display = 'none';
    document.getElementById("E1").style.display = 'none';
    document.getElementById("E2").style.display = 'none';
    document.getElementById("E3").style.display = 'none';
    document.getElementById("E4").style.display = 'none';
    document.getElementById("E5").style.display = 'none';
    document.getElementById("E6").style.display = 'none';
    document.getElementById("E7").style.display = 'none';


}
function ocultar2(){
  if(document.getElementById("txt").value != ""){

    document.getElementById("form").style.display = 'block';
    document.getElementById("form1").style.display = 'none';
  }


}


function volver(){
    
  document.getElementById("form1").style.display = 'block';
    document.getElementById("form").style.display = 'none';
    document.getElementById("form3").style.display = 'none';
    document.getElementById("form2").style.display = 'none';

}

function volver2(){
    
  document.getElementById("form").style.display = 'block';
    document.getElementById("form1").style.display = 'none';
    document.getElementById("form2").style.display = 'none';

}

function Finalizar(){
  document.getElementById("form3").style.display = 'block';  
  document.getElementById("form").style.display = 'none';
    document.getElementById("form1").style.display = 'none';
    document.getElementById("form2").style.display = 'none';

}

