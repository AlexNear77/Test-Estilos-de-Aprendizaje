///Variables globlales

var preguntas = [];
var kines = 0;
var visual = 0;
var auditiv= 0;


///....................................:PREGUNTA 1:..............................

let p1res1 = document.getElementById("p1res1");
let p1res2 = document.getElementById("p1res2");
let p1res3 = document.getElementById("p1res3");
let p1derecha = document.getElementById("p1derecha");

p1res1.addEventListener("click", p1opc1);
p1res2.addEventListener("click", p1opc2);
p1res3.addEventListener("click", p1opc3); 
p1derecha.addEventListener("click", p1D);

function p1D() {
   document.getElementById("preg1").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg1").className = "hide";
   document.getElementById("preg2").className =
      "contenido animated fadeInRight";
   }
}

function p1opc1() {
   preguntas[0] ="A";

   document.getElementById("preg1").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg1").className = "hide";
   document.getElementById("preg2").className =
      "contenido animated fadeInRight";
   }
}

function p1opc2() {
   preguntas[0] ="K";

   document.getElementById("preg1").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg1").className = "hide";
   document.getElementById("preg2").className =
      "contenido animated fadeInRight";
   }
}

function p1opc3() {
   preguntas[0] ="V";

   document.getElementById("preg1").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg1").className = "hide";
   document.getElementById("preg2").className =
      "contenido animated fadeInRight";
   }
}

///.................................:PREGUNTA 2:...........................................

let p2res1 = document.getElementById("p2res1");
let p2res2 = document.getElementById("p2res2");
let p2res3 = document.getElementById("p2res3");
let p2derecha = document.getElementById("p2derecha");
let p2izquierda = document.getElementById("p2izquierda");

p2res1.addEventListener("click", p2opc1);
p2res2.addEventListener("click", p2opc2);
p2res3.addEventListener("click", p2opc3);
p2derecha.addEventListener("click", p2D);
p2izquierda.addEventListener("click", p2I);

function p2D() {
   

   document.getElementById("preg2").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg2").className = "hide";
   document.getElementById("preg3").className =
      "contenido animated fadeInRight";
   }
}

function p2I() {
   

   document.getElementById("preg2").className =
   "contenido animated fadeOutRight";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg2").className = "hide";
   document.getElementById("preg1").className =
      "contenido animated fadeInLeft";
   }
}

function p2opc1() {
   preguntas[1] ="V";

   document.getElementById("preg2").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg2").className = "hide";
   document.getElementById("preg3").className =
      "contenido animated fadeInRight";
   }
}

function p2opc2() {
   preguntas[1] ="A";

   document.getElementById("preg2").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg2").className = "hide";
   document.getElementById("preg3").className =
      "contenido animated fadeInRight";
   }
}

function p2opc3() {
   preguntas[1] ="K";

   document.getElementById("preg2").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg2").className = "hide";
   document.getElementById("preg3").className =
      "contenido animated fadeInRight";
   }
}


///.................................:PREGUNTA 3:...........................................

let p3res1 = document.getElementById("p3res1");
let p3res2 = document.getElementById("p3res2");
let p3res3 = document.getElementById("p3res3");
let p3derecha = document.getElementById("p3derecha");
let p3izquierda = document.getElementById("p3izquierda");

p3res1.addEventListener("click", p3opc1);
p3res2.addEventListener("click", p3opc2);
p3res3.addEventListener("click", p3opc3);
p3derecha.addEventListener("click", p3D);
p3izquierda.addEventListener("click", p3I);

function p3D() {
   

   document.getElementById("preg3").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg3").className = "hide";
   document.getElementById("preg4").className =
      "contenido animated fadeInRight";
   }
}

function p3I() {
   

   document.getElementById("preg3").className =
   "contenido animated fadeOutRight";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg3").className = "hide";
   document.getElementById("preg2").className =
      "contenido animated fadeInLeft";
   }
}

function p3opc1() {
   preguntas[2] ="V";

   document.getElementById("preg3").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg3").className = "hide";
   document.getElementById("preg4").className =
      "contenido animated fadeInRight";
   }
}

function p3opc2() {
   preguntas[2] ="A";

   document.getElementById("preg3").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg3").className = "hide";
   document.getElementById("preg4").className =
      "contenido animated fadeInRight";
   }
}

function p3opc3() {
   preguntas[2] ="K";

   document.getElementById("preg3").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg3").className = "hide";
   document.getElementById("preg4").className =
      "contenido animated fadeInRight";
   }
}

///.................................:PREGUNTA 4:...........................................

let p4res1 = document.getElementById("p4res1");
let p4res2 = document.getElementById("p4res2");
let p4res3 = document.getElementById("p4res3");
let p4derecha = document.getElementById("p4derecha");
let p4izquierda = document.getElementById("p4izquierda");

p4res1.addEventListener("click", p4opc1);
p4res2.addEventListener("click", p4opc2);
p4res3.addEventListener("click", p4opc3);
p4derecha.addEventListener("click", p4D);
p4izquierda.addEventListener("click", p4I);

function p4D() {
   

   document.getElementById("preg4").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg4").className = "hide";
   document.getElementById("preg5").className =
      "contenido animated fadeInRight";
   }
}

function p4I() {
   

   document.getElementById("preg4").className =
   "contenido animated fadeOutRight";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg4").className = "hide";
   document.getElementById("preg3").className =
      "contenido animated fadeInLeft";
   }
}

function p4opc1() {
   preguntas[3] ="A";

   document.getElementById("preg4").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg4").className = "hide";
   document.getElementById("preg5").className =
      "contenido animated fadeInRight";
   }
}

function p4opc2() {
   preguntas[3] ="V";

   document.getElementById("preg4").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg4").className = "hide";
   document.getElementById("preg5").className =
      "contenido animated fadeInRight";
   }
}

function p4opc3() {
   preguntas[3] ="K";

   document.getElementById("preg4").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg4").className = "hide";
   document.getElementById("preg5").className =
      "contenido animated fadeInRight";
   }
}

///.................................:PREGUNTA 5:...........................................

let p5res1 = document.getElementById("p5res1");
let p5res2 = document.getElementById("p5res2");
let p5res3 = document.getElementById("p5res3");
let p5derecha = document.getElementById("p5derecha");
let p5izquierda = document.getElementById("p5izquierda");

p5res1.addEventListener("click", p5opc1);
p5res2.addEventListener("click", p5opc2);
p5res3.addEventListener("click", p5opc3);
p5derecha.addEventListener("click", p5D);
p5izquierda.addEventListener("click", p5I);

function p5D() {
   

   document.getElementById("preg5").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg5").className = "hide";
   document.getElementById("preg6").className =
      "contenido animated fadeInRight";
   }
}

function p5I() {
   

   document.getElementById("preg5").className =
   "contenido animated fadeOutRight";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg5").className = "hide";
   document.getElementById("preg4").className =
      "contenido animated fadeInLeft";
   }
}

function p5opc1() {
   preguntas[4] ="V";

   document.getElementById("preg5").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg5").className = "hide";
   document.getElementById("preg6").className =
      "contenido animated fadeInRight";
   }
}

function p5opc2() {
   preguntas[4] ="A";

   document.getElementById("preg5").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg5").className = "hide";
   document.getElementById("preg6").className =
      "contenido animated fadeInRight";
   }
}

function p5opc3() {
   preguntas[4] ="K";

   document.getElementById("preg5").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg5").className = "hide";
   document.getElementById("preg6").className =
      "contenido animated fadeInRight";
   }
}

///.................................:PREGUNTA 6:...........................................

let p6res1 = document.getElementById("p6res1");
let p6res2 = document.getElementById("p6res2");
let p6res3 = document.getElementById("p6res3");
let p6derecha = document.getElementById("p6derecha");
let p6izquierda = document.getElementById("p6izquierda");

p6res1.addEventListener("click", p6opc1);
p6res2.addEventListener("click", p6opc2);
p6res3.addEventListener("click", p6opc3);
p6derecha.addEventListener("click", p6D);
p6izquierda.addEventListener("click", p6I);

function p6D() {
   

   document.getElementById("preg6").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg6").className = "hide";
   document.getElementById("preg7").className =
      "contenido animated fadeInRight";
   }
}

function p6I() {
   

   document.getElementById("preg6").className =
   "contenido animated fadeOutRight";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg6").className = "hide";
   document.getElementById("preg5").className =
      "contenido animated fadeInLeft";
   }
}

function p6opc1() {
   preguntas[5] ="A";

   document.getElementById("preg6").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg6").className = "hide";
   document.getElementById("preg7").className =
      "contenido animated fadeInRight";
   }
}

function p6opc2() {
   preguntas[5] ="V";

   document.getElementById("preg6").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg6").className = "hide";
   document.getElementById("preg7").className =
      "contenido animated fadeInRight";
   }
}

function p6opc3() {
   preguntas[5] ="K";

   document.getElementById("preg6").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg6").className = "hide";
   document.getElementById("preg7").className =
      "contenido animated fadeInRight";
   }
}

///.................................:PREGUNTA 7:...........................................

let p7res1 = document.getElementById("p7res1");
let p7res2 = document.getElementById("p7res2");
let p7res3 = document.getElementById("p7res3");
let p7derecha = document.getElementById("p7derecha");
let p7izquierda = document.getElementById("p7izquierda");

p7res1.addEventListener("click", p7opc1);
p7res2.addEventListener("click", p7opc2);
p7res3.addEventListener("click", p7opc3);
p7derecha.addEventListener("click", p7D);
p7izquierda.addEventListener("click", p7I);

function p7D() {
   

   document.getElementById("preg7").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg7").className = "hide";
   document.getElementById("preg8").className =
      "contenido animated fadeInRight";
   }
}

function p7I() {
   

   document.getElementById("preg7").className =
   "contenido animated fadeOutRight";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg7").className = "hide";
   document.getElementById("preg6").className =
      "contenido animated fadeInLeft";
   }
}

function p7opc1() {
   preguntas[6] ="A";

   document.getElementById("preg7").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg7").className = "hide";
   document.getElementById("preg8").className =
      "contenido animated fadeInRight";
   }
}

function p7opc2() {
   preguntas[6] ="V";

   document.getElementById("preg7").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg7").className = "hide";
   document.getElementById("preg8").className =
      "contenido animated fadeInRight";
   }
}

function p7opc3() {
   preguntas[6] ="K";

   document.getElementById("preg7").className =
   "contenido animated fadeOutLeft";
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg7").className = "hide";
   document.getElementById("preg8").className =
      "contenido animated fadeInRight";
   }
}

///.................................:PREGUNTA 8:...........................................

let p8res1 = document.getElementById("p8res1");//-----------------------------------------
let p8res2 = document.getElementById("p8res2");//-----------------------------------------
let p8res3 = document.getElementById("p8res3");//-----------------------------------------
let p8derecha = document.getElementById("p8derecha");//-----------------------------------
let p8izquierda = document.getElementById("p8izquierda");//-------------------------------

p8res1.addEventListener("click", p8opc1);//-----------------------------------------
p8res2.addEventListener("click", p8opc2);//-----------------------------------------
p8res3.addEventListener("click", p8opc3);//-----------------------------------------
p8derecha.addEventListener("click", p8D);//-----------------------------------------
p8izquierda.addEventListener("click", p8I);//-----------------------------------------

function p8D() {//-----------------------------------------
   

   document.getElementById("preg8").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg8").className = "hide";//--------------------------------------
   document.getElementById("preg9").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p8I() {//-----------------------------------------
   

   document.getElementById("preg8").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg8").className = "hide";//--------------------------------------
   document.getElementById("preg7").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p8opc1() {//-----------------------------------------
   preguntas[7] ="K";

   document.getElementById("preg8").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg8").className = "hide";//--------------------------------------
   document.getElementById("preg9").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p8opc2() {//-----------------------------------------
   preguntas[7] ="A";

   document.getElementById("preg8").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg8").className = "hide";//--------------------------------------
   document.getElementById("preg9").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p8opc3() {//-----------------------------------------
   preguntas[7] ="V";

   document.getElementById("preg8").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg8").className = "hide";//--------------------------------------
   document.getElementById("preg9").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 9:...........................................

let p9res1 = document.getElementById("p9res1");//-----------------------------------------
let p9res2 = document.getElementById("p9res2");//-----------------------------------------
let p9res3 = document.getElementById("p9res3");//-----------------------------------------
let p9derecha = document.getElementById("p9derecha");//-----------------------------------
let p9izquierda = document.getElementById("p9izquierda");//-------------------------------

p9res1.addEventListener("click", p9opc1);//-----------------------------------------
p9res2.addEventListener("click", p9opc2);//-----------------------------------------
p9res3.addEventListener("click", p9opc3);//-----------------------------------------
p9derecha.addEventListener("click", p9D);//-----------------------------------------
p9izquierda.addEventListener("click", p9I);//-----------------------------------------

function p9D() {//-----------------------------------------
   

   document.getElementById("preg9").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg9").className = "hide";//--------------------------------------
   document.getElementById("preg10").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p9I() {//-----------------------------------------
   

   document.getElementById("preg9").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg9").className = "hide";//--------------------------------------
   document.getElementById("preg8").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p9opc1() {//-----------------------------------------
   preguntas[8] ="A";

   document.getElementById("preg9").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg9").className = "hide";//--------------------------------------
   document.getElementById("preg10").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p9opc2() {//-----------------------------------------
   preguntas[8] ="V";

   document.getElementById("preg9").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg9").className = "hide";//--------------------------------------
   document.getElementById("preg10").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p9opc3() {//-----------------------------------------
   preguntas[8] ="K";

   document.getElementById("preg9").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg9").className = "hide";//--------------------------------------
   document.getElementById("preg10").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 10:...........................................

let p10res1 = document.getElementById("p10res1");//-----------------------------------------
let p10res2 = document.getElementById("p10res2");//-----------------------------------------
let p10res3 = document.getElementById("p10res3");//-----------------------------------------
let p10derecha = document.getElementById("p10derecha");//-----------------------------------
let p10izquierda = document.getElementById("p10izquierda");//-------------------------------

p10res1.addEventListener("click", p10opc1);//-----------------------------------------
p10res2.addEventListener("click", p10opc2);//-----------------------------------------
p10res3.addEventListener("click", p10opc3);//-----------------------------------------
p10derecha.addEventListener("click", p10D);//-----------------------------------------
p10izquierda.addEventListener("click", p10I);//-----------------------------------------

function p10D() {//-----------------------------------------
   

   document.getElementById("preg10").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg10").className = "hide";//--------------------------------------
   document.getElementById("preg11").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p10I() {//-----------------------------------------
   

   document.getElementById("preg10").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg10").className = "hide";//--------------------------------------
   document.getElementById("preg9").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p10opc1() {//-----------------------------------------
   preguntas[9] ="K";

   document.getElementById("preg10").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg10").className = "hide";//--------------------------------------
   document.getElementById("preg11").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p10opc2() {//-----------------------------------------
   preguntas[9] ="A";

   document.getElementById("preg10").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg10").className = "hide";//--------------------------------------
   document.getElementById("preg11").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p10opc3() {//-----------------------------------------
   preguntas[9] ="V";

   document.getElementById("preg10").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg10").className = "hide";//--------------------------------------
   document.getElementById("preg11").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 11:...........................................

let p11res1 = document.getElementById("p11res1");//-----------------------------------------
let p11res2 = document.getElementById("p11res2");//-----------------------------------------
let p11res3 = document.getElementById("p11res3");//-----------------------------------------
let p11derecha = document.getElementById("p11derecha");//-----------------------------------
let p11izquierda = document.getElementById("p11izquierda");//-------------------------------

p11res1.addEventListener("click", p11opc1);//-----------------------------------------
p11res2.addEventListener("click", p11opc2);//-----------------------------------------
p11res3.addEventListener("click", p11opc3);//-----------------------------------------
p11derecha.addEventListener("click", p11D);//-----------------------------------------
p11izquierda.addEventListener("click", p11I);//-----------------------------------------

function p11D() {//-----------------------------------------
   

   document.getElementById("preg11").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg11").className = "hide";//--------------------------------------
   document.getElementById("preg12").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p11I() {//-----------------------------------------
   

   document.getElementById("preg11").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg11").className = "hide";//--------------------------------------
   document.getElementById("preg10").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p11opc1() {//-----------------------------------------
   preguntas[10] ="A";

   document.getElementById("preg11").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg11").className = "hide";//--------------------------------------
   document.getElementById("preg12").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p11opc2() {//-----------------------------------------
   preguntas[10] ="K";

   document.getElementById("preg11").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg11").className = "hide";//--------------------------------------
   document.getElementById("preg12").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p11opc3() {//-----------------------------------------
   preguntas[10] ="V";

   document.getElementById("preg11").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg11").className = "hide";//--------------------------------------
   document.getElementById("preg12").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 12:...........................................

let p12res1 = document.getElementById("p12res1");//-----------------------------------------
let p12res2 = document.getElementById("p12res2");//-----------------------------------------
let p12res3 = document.getElementById("p12res3");//-----------------------------------------
let p12derecha = document.getElementById("p12derecha");//-----------------------------------
let p12izquierda = document.getElementById("p12izquierda");//-------------------------------

p12res1.addEventListener("click", p12opc1);//-----------------------------------------
p12res2.addEventListener("click", p12opc2);//-----------------------------------------
p12res3.addEventListener("click", p12opc3);//-----------------------------------------
p12derecha.addEventListener("click", p12D);//-----------------------------------------
p12izquierda.addEventListener("click", p12I);//-----------------------------------------

function p12D() {//-----------------------------------------
   

   document.getElementById("preg12").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg12").className = "hide";//--------------------------------------
   document.getElementById("preg13").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p12I() {//-----------------------------------------
   

   document.getElementById("preg12").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg12").className = "hide";//--------------------------------------
   document.getElementById("preg11").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p12opc1() {//-----------------------------------------
   preguntas[11] ="V";

   document.getElementById("preg12").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg12").className = "hide";//--------------------------------------
   document.getElementById("preg13").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p12opc2() {//-----------------------------------------
   preguntas[11] ="K";

   document.getElementById("preg12").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg12").className = "hide";//--------------------------------------
   document.getElementById("preg13").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p12opc3() {//-----------------------------------------
   preguntas[11] ="A";

   document.getElementById("preg12").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg12").className = "hide";//--------------------------------------
   document.getElementById("preg13").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 13:...........................................

let p13res1 = document.getElementById("p13res1");//-----------------------------------------
let p13res2 = document.getElementById("p13res2");//-----------------------------------------
let p13res3 = document.getElementById("p13res3");//-----------------------------------------
let p13derecha = document.getElementById("p13derecha");//-----------------------------------
let p13izquierda = document.getElementById("p13izquierda");//-------------------------------

p13res1.addEventListener("click", p13opc1);//-----------------------------------------
p13res2.addEventListener("click", p13opc2);//-----------------------------------------
p13res3.addEventListener("click", p13opc3);//-----------------------------------------
p13derecha.addEventListener("click", p13D);//-----------------------------------------
p13izquierda.addEventListener("click", p13I);//-----------------------------------------

function p13D() {//-----------------------------------------
   

   document.getElementById("preg13").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg13").className = "hide";//--------------------------------------
   document.getElementById("preg14").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p13I() {//-----------------------------------------
   

   document.getElementById("preg13").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg13").className = "hide";//--------------------------------------
   document.getElementById("preg12").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p13opc1() {//-----------------------------------------
   preguntas[12] ="K";

   document.getElementById("preg13").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg13").className = "hide";//--------------------------------------
   document.getElementById("preg14").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p13opc2() {//-----------------------------------------
   preguntas[12] ="V";

   document.getElementById("preg13").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg13").className = "hide";//--------------------------------------
   document.getElementById("preg14").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p13opc3() {//-----------------------------------------
   preguntas[12] ="A";

   document.getElementById("preg13").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg13").className = "hide";//--------------------------------------
   document.getElementById("preg14").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 14:...........................................

let p14res1 = document.getElementById("p14res1");//-----------------------------------------
let p14res2 = document.getElementById("p14res2");//-----------------------------------------
let p14res3 = document.getElementById("p14res3");//-----------------------------------------
let p14derecha = document.getElementById("p14derecha");//-----------------------------------
let p14izquierda = document.getElementById("p14izquierda");//-------------------------------

p14res1.addEventListener("click", p14opc1);//-----------------------------------------
p14res2.addEventListener("click", p14opc2);//-----------------------------------------
p14res3.addEventListener("click", p14opc3);//-----------------------------------------
p14derecha.addEventListener("click", p14D);//-----------------------------------------
p14izquierda.addEventListener("click", p14I);//-----------------------------------------

function p14D() {//-----------------------------------------
   

   document.getElementById("preg14").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg14").className = "hide";//--------------------------------------
   document.getElementById("preg15").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p14I() {//-----------------------------------------
   

   document.getElementById("preg14").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg14").className = "hide";//--------------------------------------
   document.getElementById("preg13").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p14opc1() {//-----------------------------------------
   preguntas[13] ="A";

   document.getElementById("preg14").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg14").className = "hide";//--------------------------------------
   document.getElementById("preg15").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p14opc2() {//-----------------------------------------
   preguntas[13] ="K";

   document.getElementById("preg14").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg14").className = "hide";//--------------------------------------
   document.getElementById("preg15").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p14opc3() {//-----------------------------------------
   preguntas[13] ="V";

   document.getElementById("preg14").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg14").className = "hide";//--------------------------------------
   document.getElementById("preg15").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 15:...........................................

let p15res1 = document.getElementById("p15res1");//-----------------------------------------
let p15res2 = document.getElementById("p15res2");//-----------------------------------------
let p15res3 = document.getElementById("p15res3");//-----------------------------------------
let p15derecha = document.getElementById("p15derecha");//-----------------------------------
let p15izquierda = document.getElementById("p15izquierda");//-------------------------------

p15res1.addEventListener("click", p15opc1);//-----------------------------------------
p15res2.addEventListener("click", p15opc2);//-----------------------------------------
p15res3.addEventListener("click", p15opc3);//-----------------------------------------
p15derecha.addEventListener("click", p15D);//-----------------------------------------
p15izquierda.addEventListener("click", p15I);//-----------------------------------------

function p15D() {//-----------------------------------------
   

   document.getElementById("preg15").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg15").className = "hide";//--------------------------------------
   document.getElementById("preg16").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p15I() {//-----------------------------------------
   

   document.getElementById("preg15").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg15").className = "hide";//--------------------------------------
   document.getElementById("preg14").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p15opc1() {//-----------------------------------------
   preguntas[14] ="A";

   document.getElementById("preg15").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg15").className = "hide";//--------------------------------------
   document.getElementById("preg16").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p15opc2() {//-----------------------------------------
   preguntas[14] ="K";

   document.getElementById("preg15").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg15").className = "hide";//--------------------------------------
   document.getElementById("preg16").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p15opc3() {//-----------------------------------------
   preguntas[14] ="V";

   document.getElementById("preg15").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg15").className = "hide";//--------------------------------------
   document.getElementById("preg16").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 16:...........................................

let p16res1 = document.getElementById("p16res1");//-----------------------------------------
let p16res2 = document.getElementById("p16res2");//-----------------------------------------
let p16res3 = document.getElementById("p16res3");//-----------------------------------------
let p16derecha = document.getElementById("p16derecha");//-----------------------------------
let p16izquierda = document.getElementById("p16izquierda");//-------------------------------

p16res1.addEventListener("click", p16opc1);//-----------------------------------------
p16res2.addEventListener("click", p16opc2);//-----------------------------------------
p16res3.addEventListener("click", p16opc3);//-----------------------------------------
p16derecha.addEventListener("click", p16D);//-----------------------------------------
p16izquierda.addEventListener("click", p16I);//-----------------------------------------

function p16D() {//-----------------------------------------
   

   document.getElementById("preg16").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg16").className = "hide";//--------------------------------------
   document.getElementById("preg17").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p16I() {//-----------------------------------------
   

   document.getElementById("preg16").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg16").className = "hide";//--------------------------------------
   document.getElementById("preg15").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p16opc1() {//-----------------------------------------
   preguntas[15] ="A";

   document.getElementById("preg16").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg16").className = "hide";//--------------------------------------
   document.getElementById("preg17").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p16opc2() {//-----------------------------------------
   preguntas[15] ="K";

   document.getElementById("preg16").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg16").className = "hide";//--------------------------------------
   document.getElementById("preg17").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p16opc3() {//-----------------------------------------
   preguntas[15] ="V";

   document.getElementById("preg16").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg16").className = "hide";//--------------------------------------
   document.getElementById("preg17").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 17:...........................................

let p17res1 = document.getElementById("p17res1");//-----------------------------------------
let p17res2 = document.getElementById("p17res2");//-----------------------------------------
let p17res3 = document.getElementById("p17res3");//-----------------------------------------
let p17derecha = document.getElementById("p17derecha");//-----------------------------------
let p17izquierda = document.getElementById("p17izquierda");//-------------------------------

p17res1.addEventListener("click", p17opc1);//-----------------------------------------
p17res2.addEventListener("click", p17opc2);//-----------------------------------------
p17res3.addEventListener("click", p17opc3);//-----------------------------------------
p17derecha.addEventListener("click", p17D);//-----------------------------------------
p17izquierda.addEventListener("click", p17I);//-----------------------------------------

function p17D() {//-----------------------------------------
   

   document.getElementById("preg17").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg17").className = "hide";//--------------------------------------
   document.getElementById("preg18").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p17I() {//-----------------------------------------
   

   document.getElementById("preg17").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg17").className = "hide";//--------------------------------------
   document.getElementById("preg16").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p17opc1() {//-----------------------------------------
   preguntas[16] ="A";

   document.getElementById("preg17").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg17").className = "hide";//--------------------------------------
   document.getElementById("preg18").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p17opc2() {//-----------------------------------------
   preguntas[16] ="K";

   document.getElementById("preg17").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg17").className = "hide";//--------------------------------------
   document.getElementById("preg18").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p17opc3() {//-----------------------------------------
   preguntas[16] ="V";

   document.getElementById("preg17").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg17").className = "hide";//--------------------------------------
   document.getElementById("preg18").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 18:...........................................

let p18res1 = document.getElementById("p18res1");//-----------------------------------------
let p18res2 = document.getElementById("p18res2");//-----------------------------------------
let p18res3 = document.getElementById("p18res3");//-----------------------------------------
let p18derecha = document.getElementById("p18derecha");//-----------------------------------
let p18izquierda = document.getElementById("p18izquierda");//-------------------------------

p18res1.addEventListener("click", p18opc1);//-----------------------------------------
p18res2.addEventListener("click", p18opc2);//-----------------------------------------
p18res3.addEventListener("click", p18opc3);//-----------------------------------------
p18derecha.addEventListener("click", p18D);//-----------------------------------------
p18izquierda.addEventListener("click", p18I);//-----------------------------------------

function p18D() {//-----------------------------------------
   

   document.getElementById("preg18").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg18").className = "hide";//--------------------------------------
   document.getElementById("preg19").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p18I() {//-----------------------------------------
   

   document.getElementById("preg18").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg18").className = "hide";//--------------------------------------
   document.getElementById("preg17").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p18opc1() {//-----------------------------------------
   preguntas[17] ="V";

   document.getElementById("preg18").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg18").className = "hide";//--------------------------------------
   document.getElementById("preg19").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p18opc2() {//-----------------------------------------
   preguntas[17] ="K";

   document.getElementById("preg18").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg18").className = "hide";//--------------------------------------
   document.getElementById("preg19").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p18opc3() {//-----------------------------------------
   preguntas[17] ="A";

   document.getElementById("preg18").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg18").className = "hide";//--------------------------------------
   document.getElementById("preg19").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 19:...........................................

let p19res1 = document.getElementById("p19res1");//-----------------------------------------
let p19res2 = document.getElementById("p19res2");//-----------------------------------------
let p19res3 = document.getElementById("p19res3");//-----------------------------------------
let p19derecha = document.getElementById("p19derecha");//-----------------------------------
let p19izquierda = document.getElementById("p19izquierda");//-------------------------------

p19res1.addEventListener("click", p19opc1);//-----------------------------------------
p19res2.addEventListener("click", p19opc2);//-----------------------------------------
p19res3.addEventListener("click", p19opc3);//-----------------------------------------
p19derecha.addEventListener("click", p19D);//-----------------------------------------
p19izquierda.addEventListener("click", p19I);//-----------------------------------------

function p19D() {//-----------------------------------------
   

   document.getElementById("preg19").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg19").className = "hide";//--------------------------------------
   document.getElementById("preg20").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p19I() {//-----------------------------------------
   

   document.getElementById("preg19").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg19").className = "hide";//--------------------------------------
   document.getElementById("preg18").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p19opc1() {//-----------------------------------------
   preguntas[18] ="A";

   document.getElementById("preg19").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg19").className = "hide";//--------------------------------------
   document.getElementById("preg20").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p19opc2() {//-----------------------------------------
   preguntas[18] ="K";

   document.getElementById("preg19").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg19").className = "hide";//--------------------------------------
   document.getElementById("preg20").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p19opc3() {//-----------------------------------------
   preguntas[18] ="V";

   document.getElementById("preg19").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg19").className = "hide";//--------------------------------------
   document.getElementById("preg20").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 20:...........................................

let p20res1 = document.getElementById("p20res1");//-----------------------------------------
let p20res2 = document.getElementById("p20res2");//-----------------------------------------
let p20res3 = document.getElementById("p20res3");//-----------------------------------------
let p20derecha = document.getElementById("p20derecha");//-----------------------------------
let p20izquierda = document.getElementById("p20izquierda");//-------------------------------

p20res1.addEventListener("click", p20opc1);//-----------------------------------------
p20res2.addEventListener("click", p20opc2);//-----------------------------------------
p20res3.addEventListener("click", p20opc3);//-----------------------------------------
p20derecha.addEventListener("click", p20D);//-----------------------------------------
p20izquierda.addEventListener("click", p20I);//-----------------------------------------

function p20D() {//-----------------------------------------
   

   document.getElementById("preg20").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg20").className = "hide";//--------------------------------------
   document.getElementById("preg21").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p20I() {//-----------------------------------------
   

   document.getElementById("preg20").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg20").className = "hide";//--------------------------------------
   document.getElementById("preg19").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p20opc1() {//-----------------------------------------
   preguntas[19] ="V";

   document.getElementById("preg20").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg20").className = "hide";//--------------------------------------
   document.getElementById("preg21").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p20opc2() {//-----------------------------------------
   preguntas[19] ="A";

   document.getElementById("preg20").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg20").className = "hide";//--------------------------------------
   document.getElementById("preg21").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p20opc3() {//-----------------------------------------
   preguntas[19] ="K";

   document.getElementById("preg20").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg20").className = "hide";//--------------------------------------
   document.getElementById("preg21").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 21:...........................................

let p21res1 = document.getElementById("p21res1");//-----------------------------------------
let p21res2 = document.getElementById("p21res2");//-----------------------------------------
let p21res3 = document.getElementById("p21res3");//-----------------------------------------
let p21derecha = document.getElementById("p21derecha");//-----------------------------------
let p21izquierda = document.getElementById("p21izquierda");//-------------------------------

p21res1.addEventListener("click", p21opc1);//-----------------------------------------
p21res2.addEventListener("click", p21opc2);//-----------------------------------------
p21res3.addEventListener("click", p21opc3);//-----------------------------------------
p21derecha.addEventListener("click", p21D);//-----------------------------------------
p21izquierda.addEventListener("click", p21I);//-----------------------------------------

function p21D() {//-----------------------------------------
   

   document.getElementById("preg21").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg21").className = "hide";//--------------------------------------
   document.getElementById("preg22").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p21I() {//-----------------------------------------
   

   document.getElementById("preg21").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg21").className = "hide";//--------------------------------------
   document.getElementById("preg20").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p21opc1() {//-----------------------------------------
   preguntas[20] ="K";

   document.getElementById("preg21").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg21").className = "hide";//--------------------------------------
   document.getElementById("preg22").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p21opc2() {//-----------------------------------------
   preguntas[20] ="V";

   document.getElementById("preg21").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg21").className = "hide";//--------------------------------------
   document.getElementById("preg22").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p21opc3() {//-----------------------------------------
   preguntas[20] ="A";

   document.getElementById("preg21").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg21").className = "hide";//--------------------------------------
   document.getElementById("preg22").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 22:...........................................

let p22res1 = document.getElementById("p22res1");//-----------------------------------------
let p22res2 = document.getElementById("p22res2");//-----------------------------------------
let p22res3 = document.getElementById("p22res3");//-----------------------------------------
let p22derecha = document.getElementById("p22derecha");//-----------------------------------
let p22izquierda = document.getElementById("p22izquierda");//-------------------------------

p22res1.addEventListener("click", p22opc1);//-----------------------------------------
p22res2.addEventListener("click", p22opc2);//-----------------------------------------
p22res3.addEventListener("click", p22opc3);//-----------------------------------------
p22derecha.addEventListener("click", p22D);//-----------------------------------------
p22izquierda.addEventListener("click", p22I);//-----------------------------------------

function p22D() {//-----------------------------------------
   

   document.getElementById("preg22").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg22").className = "hide";//--------------------------------------
   document.getElementById("preg23").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p22I() {//-----------------------------------------
   

   document.getElementById("preg22").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg22").className = "hide";//--------------------------------------
   document.getElementById("preg21").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p22opc1() {//-----------------------------------------
   preguntas[21] ="A";

   document.getElementById("preg22").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg22").className = "hide";//--------------------------------------
   document.getElementById("preg23").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p22opc2() {//-----------------------------------------
   preguntas[21] ="K";

   document.getElementById("preg22").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg22").className = "hide";//--------------------------------------
   document.getElementById("preg23").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p22opc3() {//-----------------------------------------
   preguntas[21] ="V";

   document.getElementById("preg22").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg22").className = "hide";//--------------------------------------
   document.getElementById("preg23").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 23:...........................................

let p23res1 = document.getElementById("p23res1");//-----------------------------------------
let p23res2 = document.getElementById("p23res2");//-----------------------------------------
let p23res3 = document.getElementById("p23res3");//-----------------------------------------
let p23derecha = document.getElementById("p23derecha");//-----------------------------------
let p23izquierda = document.getElementById("p23izquierda");//-------------------------------

p23res1.addEventListener("click", p23opc1);//-----------------------------------------
p23res2.addEventListener("click", p23opc2);//-----------------------------------------
p23res3.addEventListener("click", p23opc3);//-----------------------------------------
p23derecha.addEventListener("click", p23D);//-----------------------------------------
p23izquierda.addEventListener("click", p23I);//-----------------------------------------

function p23D() {//-----------------------------------------
   

   document.getElementById("preg23").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg23").className = "hide";//--------------------------------------
   document.getElementById("preg24").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p23I() {//-----------------------------------------
   

   document.getElementById("preg23").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg23").className = "hide";//--------------------------------------
   document.getElementById("preg22").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p23opc1() {//-----------------------------------------
   preguntas[22] ="K";

   document.getElementById("preg23").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg23").className = "hide";//--------------------------------------
   document.getElementById("preg24").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p23opc2() {//-----------------------------------------
   preguntas[22] ="A";

   document.getElementById("preg23").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg23").className = "hide";//--------------------------------------
   document.getElementById("preg24").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

function p23opc3() {//-----------------------------------------
   preguntas[22] ="V";

   document.getElementById("preg23").className =
   "contenido animated fadeOutLeft";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg23").className = "hide";//--------------------------------------
   document.getElementById("preg24").className =
      "contenido animated fadeInRight";//-----------------------------------------
   }
}

///.................................:PREGUNTA 24:...........................................

let p24res1 = document.getElementById("p24res1");//-----------------------------------------
let p24res2 = document.getElementById("p24res2");//-----------------------------------------
let p24res3 = document.getElementById("p24res3");//-----------------------------------------
let p24izquierda = document.getElementById("p24izquierda");//-------------------------------

p24res1.addEventListener("click", p24opc1);//-----------------------------------------
p24res2.addEventListener("click", p24opc2);//-----------------------------------------
p24res3.addEventListener("click", p24opc3);//-----------------------------------------
p24izquierda.addEventListener("click", p24I);//-----------------------------------------

function p24I() {//-----------------------------------------
   

   document.getElementById("preg24").className =
   "contenido animated fadeOutRight";//-----------------------------------------
   setTimeout(carga, 500);

   function carga() {
   document.getElementById("preg24").className = "hide";//--------------------------------------
   document.getElementById("preg23").className =
      "contenido animated fadeInLeft";//-----------------------------------------
   }
}

function p24opc1() {//-----------------------------------------
   preguntas[23] ="V";
}

function p24opc2() {//-----------------------------------------
   preguntas[23] ="A";
}

function p24opc3() {//-----------------------------------------
   preguntas[23] ="K";
}

//:................................FUNCIONEs..................................:

function check(){
   let flag=0;
   for(let i=0; i<24;i++){
      if(preguntas[i] == "K" || preguntas[i] == "A" || preguntas[i] == "V"){
         console.log("pregunta: "+i+" contestada");
      }else{
         flag++;
      }
   }
   if(flag !=0){
      console.log(flag);
      return false;
   }else{
      return true;
   }

}

function conteo(){
   for(let i=0; i<24;i++){
      if(preguntas[i] == "K" ){
         kines++;
      }
      else if( preguntas[i] == "A"){
         auditiv++;
      }
      else if( preguntas[i] == "V"){
         visual++;
      }
   }
}

/// .................................RESULTADO........................................

let terminar= document.getElementById("terminar");//-------------------------------

terminar.addEventListener("click", result);//-----------------------------------------

function result(){
   if(check() == true){
      document.getElementById("preg24").className =
      "contenido animated fadeOutLeft";//-----------------------------------------
      
      //Anexando cosas a los nombres valores etc
      conteo();
      if(kines > visual && kines > auditiv ){
         document.getElementById("tipo").innerHTML ="Kinestesico";
         document.getElementById("kinestesico").className = "tipoDeAprendizaje";
      }
      else if(visual > kines && visual > auditiv ){
         document.getElementById("tipo").innerHTML ="Visual";
         document.getElementById("visual").className = "tipoDeAprendizaje";
      }
      else if(auditiv > visual && auditiv > kines ){
         document.getElementById("tipo").innerHTML ="Auditivo";
         document.getElementById("auditivo").className = "tipoDeAprendizaje";
      }

      document.getElementById("k").value = parseInt(kines/24*100);
      document.getElementById("v").value = parseInt(visual/24*100);
      document.getElementById("a").value = parseInt(auditiv/24*100);


      setTimeout(carga, 500);
      function carga() {
         document.getElementById("preg24").className = "hide";//
         document.getElementById("resultado").className =
         "contenido animated fadeInRight";//-----------------------------------------
      }
   }else{
      alert("Los sentimos el test no fue completado, intente de nuevo.");
      location.href='Programa.html';
   }
}



$(document).ready(function() {
   //$(".dial").knob();
   $('.dial').knob({
     'min':0,
     'max':100,
     'width':250,
     'height':250,
     'displayInput':true,
     'readOnly':true
   });
   
   
 });
