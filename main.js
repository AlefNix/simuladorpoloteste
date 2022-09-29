//PARTES
  //base
  const btnbase = document.getElementById('base');
  btnbase.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "visible";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
//base branca
  const bntcorbasebranco = document.getElementById('whitebase');
  bntcorbasebranco.addEventListener('click', function(e){
    document.getElementById('corbase').style.fill = "#fff";
    document.getElementById('corbasecostas').style.fill = "#fff";
    document.getElementById('CB').style.backgroundColor = "#fff";
  });

  //base preta
  const btncorbasepreto = document.getElementById('blackbase');
  btncorbasepreto.addEventListener('click', function(e){
    document.getElementById('corbase').style.fill = "#000";
    document.getElementById('corbasecostas').style.fill = "#000";
    document.getElementById('CB').style.backgroundColor = "#000";
  });
  //base azul
  const btncorbaseazul = document.getElementById('bluebase');
  btncorbaseazul.addEventListener('click', function(e){
    document.getElementById('corbase').style.fill = "blue";
    document.getElementById('corbasecostas').style.fill = "blue";
    document.getElementById('CB').style.backgroundColor = "blue";
  });    
  //base vermelha
  const btncorbasevermelha = document.getElementById('redbase');
  btncorbasevermelha.addEventListener('click', function(e){
    document.getElementById('corbase').style.fill = "red";
    document.getElementById('corbasecostas').style.fill = "red";
    document.getElementById('CB').style.backgroundColor = "red";
  });  
  //base amarela
  const btncorbaseamarela = document.getElementById('yellowbase');
  btncorbaseamarela.addEventListener('click', function(e){
    document.getElementById('corbase').style.fill = "yellow";
    document.getElementById('corbasecostas').style.fill = "yellow";
    document.getElementById('CB').style.backgroundColor = "yellow";
  });  
  //base verde
  const btncorbaseverde = document.getElementById('greenbase');
  btncorbaseverde.addEventListener('click', function(e){
    document.getElementById('corbase').style.fill = "green";
    document.getElementById('corbasecostas').style.fill = "green";
    document.getElementById('CB').style.backgroundColor = "green";
  });  



  //botoes
  const btnbotoes = document.getElementById('botoes');
  btnbotoes.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel1').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "visible";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "visible";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "visible";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //botoes branco
  const bntcorbotoesbranco = document.getElementById('whitebase1');
  bntcorbotoesbranco.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#fff";
    document.getElementById('BT').style.backgroundColor = "#fff";
  });

  //botoes preta
  const btncorbotoespreto = document.getElementById('blackbase1');
  btncorbotoespreto.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#000";
    document.getElementById('BT').style.backgroundColor = "#000";
  });
  //botoes azul
  const btncorbotoesazul = document.getElementById('bluebase1');
  btncorbotoesazul.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "blue";
    document.getElementById('BT').style.backgroundColor = "blue";
  });    
  //botoes vermelha
  const btncorbotoesvermelha = document.getElementById('redbase1');
  btncorbotoesvermelha.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "red";
    document.getElementById('BT').style.backgroundColor = "red";
  });  
  //botoes amarela
  const btncorbotoesamarela = document.getElementById('yellowbase1');
  btncorbotoesamarela.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "yellow";
    document.getElementById('BT').style.backgroundColor = "yellow";
  });  
  //botoes verde
  const btncorbotoesverde = document.getElementById('greenbase1');
  btncorbotoesverde.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "green";
    document.getElementById('BT').style.backgroundColor = "green";
  });  



  //gola exterior
  const btngolaE = document.getElementById('gola1');
  btngolaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel2').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "visible";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "visible";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "visible";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Gola exterior branco
  const bntcorgolaEbranco = document.getElementById('whitebase2');
  bntcorgolaEbranco.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#fff";
    document.getElementById('golaEE').style.fill = "#fff";
    document.getElementById('ge').style.backgroundColor = "#fff";
  });
  //Gola exterior preta
  const btncorgolaEpreto = document.getElementById('blackbase2');
  btncorgolaEpreto.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#000";
    document.getElementById('golaEE').style.fill = "#000";
    document.getElementById('ge').style.backgroundColor = "#000";
  });
  //Gola exterior azul
  const btncorgolaEazul = document.getElementById('bluebase2');
  btncorgolaEazul.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "blue";
    document.getElementById('golaEE').style.fill = "blue";
    document.getElementById('ge').style.backgroundColor = "blue";
  });    
  //Gola exterior vermelha
  const btncorgolaEvermelha = document.getElementById('redbase2');
  btncorgolaEvermelha.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "red";
    document.getElementById('golaEE').style.fill = "red";
    document.getElementById('ge').style.backgroundColor = "red";
  });  
  //Gola exterior amarela
  const btncorgolaEamarela = document.getElementById('yellowbase2');
  btncorgolaEamarela.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "yellow";
    document.getElementById('golaEE').style.fill = "yellow";
    document.getElementById('ge').style.backgroundColor = "yellow";
  });  
  //Gola exterior verde
  const btncorgolaEverde = document.getElementById('greenbase2');
  btncorgolaEverde.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "green";
    document.getElementById('golaEE').style.fill = "green";
    document.getElementById('ge').style.backgroundColor = "green";
  });  



  //gola interior
  const btngolaI = document.getElementById('gola2');
  btngolaI.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel3').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "visible";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "visible";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "visible";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Gola interior branco
  const bntcorgolaIbranco = document.getElementById('whitebase3');
  bntcorgolaIbranco.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#fff";
    document.getElementById('gi').style.backgroundColor = "#fff";
  });
  //Gola interior preta
  const btncorgolaIpreto = document.getElementById('blackbase3');
  btncorgolaIpreto.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#000";
    document.getElementById('gi').style.backgroundColor = "#000";
  });
  //Gola interior azul
  const btncorgolaIazul = document.getElementById('bluebase3');
  btncorgolaIazul.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "blue";
    document.getElementById('gi').style.backgroundColor = "blue";
  });    
  //Gola interior vermelha
  const btncorgolaIvermelha = document.getElementById('redbase3');
  btncorgolaIvermelha.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "red";
    document.getElementById('gi').style.backgroundColor = "red";
  });  
  //Gola interior amarela
  const btncorgolaIamarela = document.getElementById('yellowbase3');
  btncorgolaIamarela.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "yellow";
    document.getElementById('gi').style.backgroundColor = "yellow";
  });  
  //Gola interior verde
  const btncorgolaIverde = document.getElementById('greenbase3');
  btncorgolaIverde.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "green";
    document.getElementById('gi').style.backgroundColor = "green";
  });  



    //punho
    const btnpunho = document.getElementById('punho');
  btnpunho.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel3').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "visible";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "visible";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "visible";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
//punho branca
  const bntcorpunhobranco = document.getElementById('whitebase4');
  bntcorpunhobranco.addEventListener('click', function(e){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fff");
    document.getElementById('PU').style.backgroundColor = "#fff";
  });

  //punho preta
  const btncorpunhopreto = document.getElementById('blackbase4');
  btncorpunhopreto.addEventListener('click', function(e){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#000");
    document.getElementById('PU').style.backgroundColor = "#000";
  });
  //punho azul
  const btncorpunhoazul = document.getElementById('bluebase4');
  btncorpunhoazul.addEventListener('click', function(e){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "blue");
    document.getElementById('PU').style.backgroundColor = "blue";
  });    
  //punho vermelha
  const btncorpunhovermelha = document.getElementById('redbase4');
  btncorpunhovermelha.addEventListener('click', function(e){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "red");
    document.getElementById('PU').style.backgroundColor = "red";
  });  
  //punho amarela
  const btncorpunhoamarela = document.getElementById('yellowbase4');
  btncorpunhoamarela.addEventListener('click', function(e){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "yellow");
    document.getElementById('PU').style.backgroundColor = "yellow";
  });  
  //punho verde
  const btncorpunhoverde = document.getElementById('greenbase4');
  btncorpunhoverde.addEventListener('click', function(e){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "green");
    document.getElementById('PU').style.backgroundColor = "green";
  });



   //vistaE
   const btnvistaE = document.getElementById('vista');
  btnvistaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "visible";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "visible";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "visible";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //vistaE branco
  const bntcorvistaEbranco = document.getElementById('whitebase5');
  bntcorvistaEbranco.addEventListener('click', function(e){
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fff");
    document.getElementById('VE').style.backgroundColor = "#fff";
  });

  //vistaE preta
  const btncorvistaEpreto = document.getElementById('blackbase5');
  btncorvistaEpreto.addEventListener('click', function(e){
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#000");
    document.getElementById('VE').style.backgroundColor = "#000";
  });
  //vistaE azul
  const btncorvistaEazul = document.getElementById('bluebase5');
  btncorvistaEazul.addEventListener('click', function(e){
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "blue");
    document.getElementById('VE').style.backgroundColor = "blue";
  });    
  //vistaE vermelha
  const btncorvistaEvermelha = document.getElementById('redbase5');
  btncorvistaEvermelha.addEventListener('click', function(e){
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "red");
    document.getElementById('VE').style.backgroundColor = "red";
  });  
  //vistaE amarela
  const btncorvistaEamarela = document.getElementById('yellowbase5');
  btncorvistaEamarela.addEventListener('click', function(e){
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "yellow");
    document.getElementById('VE').style.backgroundColor = "yellow";
  });  
  //vistaE verde
  const btncorvistaEverde = document.getElementById('greenbase5');
  btncorvistaEverde.addEventListener('click', function(e){
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "green");
    document.getElementById('VE').style.backgroundColor = "green";
  });



  //peitilho2
  const btnpeitilho2 = document.getElementById('vista1');
  btnpeitilho2.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      console.log("peitilho1");
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "visible";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "visible";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "visible";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //peitilho2 branco
  const bntcorpeitilho2branco = document.getElementById('whitebase6');
  bntcorpeitilho2branco.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "#fff";
    document.getElementById('VD').style.backgroundColor = "#fff";
  });

  //peitilho2 preta
  const btncorpeitilho2preto = document.getElementById('blackbase6');
  btncorpeitilho2preto.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "#000";
    document.getElementById('VD').style.backgroundColor = "#000";
  });
  //peitilho2 azul
  const btncorpeitilho2azul = document.getElementById('bluebase6');
  btncorpeitilho2azul.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "blue";
    document.getElementById('VD').style.backgroundColor = "blue";
  });    
  //peitilho2 vermelha
  const btncorpeitilho2vermelha = document.getElementById('redbase6');
  btncorpeitilho2vermelha.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "red";
    document.getElementById('VD').style.backgroundColor = "red";
  });  
  //peitilho2 amarela
  const btncorpeitilho2amarela = document.getElementById('yellowbase6');
  btncorpeitilho2amarela.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "yellow";
    document.getElementById('VD').style.backgroundColor = "yellow";
  });  
  //peitilho2 verde
  const btncorpeitilho2verde = document.getElementById('greenbase6');
  btncorpeitilho2verde.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "green";
    document.getElementById('VD').style.backgroundColor = "green";
  });



  //Peitilho2
  const btnbolsoF = document.getElementById('bolsobtn');
  btnbolsoF.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "visible";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "visible";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "visible";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Peitilho2 branco
  const bntcorbolsoFbranco = document.getElementById('whitebase7');
  bntcorbolsoFbranco.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "#fff";
    document.getElementById('BSF').style.backgroundColor = "#fff";
  });

  //Peitilho2 preta
  const btncorbolsoFpreto = document.getElementById('blackbase7');
  btncorbolsoFpreto.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "#000";
    document.getElementById('BSF').style.backgroundColor = "#000";
  });
  //Peitilho2 azul
  const btncorbolsoFazul = document.getElementById('bluebase7');
  btncorbolsoFazul.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "blue";
    document.getElementById('BSF').style.backgroundColor = "blue";
  });    
  //Peitilho2 vermelha
  const btncorbolsoFvermelha = document.getElementById('redbase7');
  btncorbolsoFvermelha.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "red";
    document.getElementById('BSF').style.backgroundColor = "red";
  });  
  //Peitilho2 amarela
  const btncorbolsoFamarela = document.getElementById('yellowbase7');
  btncorbolsoFamarela.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "yellow";
    document.getElementById('BSF').style.backgroundColor = "yellow";
  });  
  //Peitilho2 verde
  const btncorbolsoFverde = document.getElementById('greenbase7');
  btncorbolsoFverde.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "green";
    document.getElementById('BSF').style.backgroundColor = "green";
  });



  //friso
  const btnbolsoB = document.getElementById('bolso1');
  btnbolsoB.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "visible";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "visible";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "visible";}
  });
 //friso branco
  const bntcorbolsoBbranco = document.getElementById('whitebase8');
  bntcorbolsoBbranco.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "#fff";
    document.getElementById('friso1').style.fill = "#fff";
    document.getElementById('BB').style.backgroundColor = "#fff";
  });

 //friso preta
  const btncorbolsoBpreto = document.getElementById('blackbase8');
  btncorbolsoBpreto.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "#000";
    document.getElementById('friso1').style.fill = "#000";
    document.getElementById('BB').style.backgroundColor = "#000";
  });
 //friso azul
  const btncorbolsoBazul = document.getElementById('bluebase8');
  btncorbolsoBazul.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "blue";
    document.getElementById('friso1').style.fill = "blue";
    document.getElementById('BB').style.backgroundColor = "blue";
  });    
 //friso vermelha
  const btncorbolsoBvermelha = document.getElementById('redbase8');
  btncorbolsoBvermelha.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "red";
    document.getElementById('friso1').style.fill = "red";
    document.getElementById('BB').style.backgroundColor = "red";
  });  
 //friso amarela
  const btncorbolsoBamarela = document.getElementById('yellowbase8');
  btncorbolsoBamarela.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "yellow";
    document.getElementById('friso1').style.fill = "yellow";
    document.getElementById('BB').style.backgroundColor = "yellow";
  });  
 //friso verde
  const btncorbolsoBverde = document.getElementById('greenbase8');
  btncorbolsoBverde.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "green";
    document.getElementById('friso1').style.fill = "green";
    document.getElementById('BB').style.backgroundColor = "green";
  });


  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
      document.getElementById('friso').style.visibility = "visible";
      document.getElementById('peitilho2').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('friso').style.visibility = "hidden";
      document.getElementById('peitilho2').style.visibility = "hidden";
    }
  });

  document.getElementById('switch-shadow3').addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.querySelector('.costas3').style.display = "none";
      document.querySelector('.costaslonga').style.display = "block";
      document.querySelector('.costas5').style.display = "block";
      document.getElementById('manga1').style.display = "none";
      document.getElementById('manga').style.display = "none";
      document.querySelector('.frente4').style.display = "block";
      document.querySelector('.frente3').style.display = "none";
      document.querySelector('.costas4').style.display = "block";
      document.getElementById('punho1').style.display = "none";
      document.getElementById('punho2').style.display = "none";
      document.querySelector('.frente5').style.display = "block";
      document.querySelector('.frente6').style.display = "block";
    }else {
      document.querySelector('.costas3').style.display = "block";
      document.querySelector('.costaslonga').style.display = "none";
      document.querySelector('.costas5').style.display = "none";
      document.getElementById('manga1').style.display = "block";
      document.getElementById('manga').style.display = "block";
      document.querySelector('.frente4').style.display = "none";
      document.querySelector('.frente3').style.display = "block";
      document.querySelector('.costas4').style.display = "none";
      document.getElementById('punho1').style.display = "block";
      document.getElementById('punho2').style.display = "block";
      document.querySelector('.frente5').style.display = "none";
      document.querySelector('.frente6').style.display = "none";
    }
  });



  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Malha.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.visibility = "hidden";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.visibility = "visible";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
        document.getElementById('coresb').style.visibility = "hidden";
        document.getElementById('coresGE').style.visibility = "hidden";
        document.getElementById('coresGI').style.visibility = "hidden";
        document.getElementById('coresP').style.visibility = "hidden";
        document.getElementById('coresVE').style.visibility = "hidden";
        document.getElementById('coresVD').style.visibility = "hidden";
        document.getElementById('coresBF').style.visibility = "hidden";
        document.getElementById('coresBB').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "visible";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "visible";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

