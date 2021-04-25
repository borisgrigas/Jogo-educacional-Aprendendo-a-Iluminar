

let myFont;
let sol;
var menino1 = [],menina1=[], menino2=[], menina2=[], lanterna=[];
function preload(){
  myFont = loadFont('Font.otf');
  sol = loadImage('imagens/logo.png');
  nuvem = loadImage('imagens/nuvem1.png');
  fundo1 = loadImage('imagens/fundo.png');
  botao = loadSound('sound/botao.mp3');
  musica=createAudio('sound/music1.mp3')
  fundo2=loadImage('imagens/fundo2.png')
  for(i=0;i<2;i++){
  lanterna[i]=loadImage('imagens/lanterna ('+(i+1)+').png')}
  luz=loadImage('imagens/luz.png')
  espelho=loadImage('imagens/espelho.png')
  fundofase=loadImage('imagens/quarto.png')
  for(i=0;i<4;i++){
  menina1[i] = loadImage('imagens/menina ('+(i+1)+').png');
  }
  for(i=0;i<4;i++) {
  menino1[i] = loadImage('imagens/menino ('+(i+1)+').png');
  }
  for(i=0;i<4;i++){
  menina2[i] = loadImage('imagens/menina2 ('+(i+1)+').png');
  }
  for(i=0;i<4;i++) {
  menino2[i] = loadImage('imagens/menino2 ('+(i+1)+').png');
  }
  credito = loadImage('imagens/credito.png');
  tut = loadImage('imagens/tutorial.png');
  
  balao_direita = loadImage('imagens/balao_direita.png');
  balao_esquerda = loadImage('imagens/Balao_esquerda.png');
  balao_meio = loadImage('imagens/balao_meio.png');
  
}
var win=false, tente_de_novo=false, acertou=false;
//Posição Tela//
var tela = 1

function setup() {
  createCanvas(800, 600);
  
}

//TELAS
function draw() {
  background(167,225,232);
  imageMode(CORNER)
  if(tela==1){  fundo();  menu();  }
  if(tela==2){  iniciar();  }
  if(tela==19){  tutorial();  }
  if(tela==20){  creditos();  }
  
  if(tela==3){seleciona_personagem();}

  
  console.log(tela)
}

var tx = 300, ty = 250, pmy = 200, pmy1 = 300, pmx1 = 485,pmx=500, cy=50;

function menu (){
  
  if(tela<3){musica.loop()}
 
  textAlign(CENTER);
  textFont(myFont)

  if(mouseX>=pmx && mouseX<=pmx+200 && mouseY>=pmy && mouseY<=pmy+40){
  fill('yellow')
  noStroke()
  rect(pmx,pmy,200,60,20)
  textSize(50);
  fill(0)
  text("{INICIAR}", tx, ty);
    if(mouseIsPressed){
      tela=2; botao.play()
    }
  }
  
  if(mouseX>=pmx && mouseX<=pmx+200 && mouseY>=pmy1 && mouseY<=pmy1+40){
  fill('yellow')
  noStroke()
  rect(pmx1,pmy1,235,60,20)
  textSize(50);
  fill(0)
  text("{TUTORIAL}", tx, ty+100);
    if(mouseIsPressed){
      tela=19; botao.play()
    }
  }
  //créditos 
  image(nuvem,545,25,140,80)
  if(mouseX>=565 && mouseX<=565+110 && mouseY>=cy && mouseY<=cy+40){
  fill('yellow')
  noStroke()
  //rect(565,cy,110,30,20)
  fill(0)
  textSize(25);
  text("{CRÉDITOS}", 620, 80);
    if(mouseIsPressed){
      tela=20; botao.play()
    }
  }
  //textos menu inicial
  textAlign(CENTER);
  textSize(50);
  fill(0)
  text("INICIAR", tx, 250);
  text("TUTORIAL", tx, 350);
  
  if(tx>=200 && tx<=600){
    tx = tx+7
  }
  
  
  textSize(25);
  text("CRÉDITOS", 620, 80);
  
    
}

var ax = -90, ax1=120, ax2 = 340, ax3=570, axx = -50, axx1=130, axx2 = 300, axx3=450,nuv=[];
function fundo(){
  
  image(sol,-330, -60, 1400, 800);
  image(nuvem,ax,470,120,90);
  image(nuvem,ax1,520,120,90);
  image(nuvem,ax2,470,120,90);
  image(nuvem,ax3,520,120,90);
  
  if(ax>=-90 && ax<=810){
    ax=ax+2
  }
  if(ax>810){
    ax=-90
  }
  
  if(ax1>=-90 && ax1<=810){
    ax1=ax1+2
  }
  if(ax1>810){
    ax1=-90
  }
  if(ax2>=-90 && ax2<=810){
    ax2=ax2+2
  }
  if(ax2>810){
    ax2=-90
  }
   if(ax3>=-90 && ax3<=810){
    ax3=ax3+2
  }
  if(ax3>810){
    ax3=-90
  }
  
}

function iniciar(){
  
    
  image(fundo1,0,0)
  personagem();  
  
  voltar();
}

function tutorial(){
  
  image(tut,0,0)
  voltar()
}

function creditos(){
  
  image(credito,0,0)
  voltar()
}

function voltar(){
  
  noStroke();
  fill(255);
  circle(32,30,30);
  fill('silver');
  triangle(20,30,40,20,40,40);
  
  textAlign(CENTER);
  textFont(myFont);
  textSize(20)
  noStroke();
  fill('silver');
  text("Voltar",75, 40)
  
  if(mouseX>=15 && mouseX<=100 && mouseY>=10 && mouseY<=50){
    
    fill(173,190,230)
    rect(15,10,100,45,20)
    
    textAlign(CENTER);
    textSize(20);
    noStroke();
    fill('white');
    text("Voltar",75, 40);
    
    fill('white');
    triangle(20,30,40,20,40,40);

  }
}
function mousePressed(){
  if(mouseX>=15 && mouseX<=100 && mouseY>=10 && mouseY<=50){
    tela=1
  }
}

var selPersonagem = [],j=25,posicao_pers_x = 25, posicao_pers_y=310,sel = 0, person = [], apar_pers=0, personagem_esc = false,tam_pers_x=0, tam_pers_y=0;

//PERSONAGENS

function personagem(){
   let apar_pers = 0, posicao_pers_x = 25, posicao_pers_y=310, tam_pers_x=0, tam_pers_y=0;
    selPersonagem[0]=image(menino1[apar_pers],30,400,tam_pers_x, tam_pers_y);
    selPersonagem[1]=image(menina1[apar_pers],220,380,tam_pers_x, tam_pers_y);
    selPersonagem[2]=image(menino2[apar_pers],420,400,tam_pers_x, tam_pers_y);
    selPersonagem[3]=image(menina2[apar_pers],620,380,tam_pers_x, tam_pers_y);
  
  
  textAlign(CENTER);
  textSize(50);
  noStroke()
  //fill('black');
  //text("MIGUEL",97.5,350)
  fill('white');
  text("MIGUEL",100,350)
  //fill('black');
  //text("ELENA",287.5,350)
  fill('white');
  text("ELENA",290,350)
 // fill('black');
 // text("PEDRO",497.5,350)
  fill('white');
  text("PEDRO",500,350)
 // fill('black');
 // text("SARA",697.5,350)
  fill('white');
  text("SARA",700,350)
  
  
  if(tela==2){
  if(mouseX>=posicao_pers_x && mouseX<=posicao_pers_x+150 && mouseY>=posicao_pers_y && mouseY<=posicao_pers_y+290){
    noFill();
    stroke('black');
    rect(posicao_pers_x,posicao_pers_y,150,45,20);
      if(mouseIsPressed){sel = 1; tela = 3; person[0]=0; personagem_esc = true; botao.play()}
    }
  else if(mouseX>=posicao_pers_x+190 && mouseX<=posicao_pers_x+340 && mouseY>=posicao_pers_y && mouseY<=posicao_pers_y+290){
    noFill();
    stroke('black');
    rect(posicao_pers_x+190,posicao_pers_y,150,45,20);
      if(mouseIsPressed){sel = 2; tela = 3 ; person[1]=1; personagem_esc=true; botao.play()} 
    }
  else if(mouseX>=posicao_pers_x+400 && mouseX<=posicao_pers_x+550 && mouseY>=posicao_pers_y && mouseY<=posicao_pers_y+290){
    noFill();
    stroke('black');
    rect(posicao_pers_x+400,posicao_pers_y,150,45,20);
      if(mouseIsPressed){sel = 3; tela = 3 ; person[2]=2; personagem_esc=true; botao.play()} 
    }
  else if(mouseX>=posicao_pers_x+600 && mouseX<=posicao_pers_x+760 && mouseY>=posicao_pers_y && mouseY<=posicao_pers_y+290){
    noFill();
    stroke('black');
    rect(posicao_pers_x+600,posicao_pers_y,150,45,20);
      if(mouseIsPressed){sel = 4; tela = 3; person[3]=3; personagem_esc=true; botao.play()} 
    }
  }
  else{personagem_esc = false}
  
 
    
}


function seleciona_personagem(){
if(tela==3){image(fundo2,0,0)}
  
  if(personagem_esc==true){
    
      if(sel==1){
        selPersonagem[0]=image(menino1[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);
         nome_pers = "Miguel"
        saldacao()
        if(cena==3){fase1();imageMode(CORNER);image(menino1[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);dica1();pergunta1();errou1();acertou1();proximo()}
      
         if(cena==4){fase2()}
      }
      else if(sel==2){
        selPersonagem[1]=image(menina1[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);
         nome_pers = "Elena"
        saldacao()
        if(cena==3){fase1();imageMode(CORNER);image(menina1[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);dica1();pergunta1();errou1();acertou1();proximo()}
      
         if(cena==4){fase2()}
      }
      else if(sel==3){
        selPersonagem[2]=image(menino2[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);
         nome_pers = "Pedro"
        saldacao()
        if(cena==3){fase1();imageMode(CORNER);image(menino2[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);dica1();pergunta1();errou1();acertou1();proximo()}
      
         if(cena==4){fase2()}
      }
       else if(sel==4){
        selPersonagem[3]=image(menina2[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);
          nome_pers = "Sara"
         saldacao()
         if(cena==3){fase1();imageMode(CORNER);image(menina2[apar_pers],posicao_pers_x,posicao_pers_y,tam_pers_x, tam_pers_y);dica1();pergunta1();errou1();acertou1();proximo()}
      
         if(cena==4){fase2()}
       }
      
    }
  
voltar()
}
var cena = 0
function saldacao(){
   musica.stop()
  //tamaho personagem85px153p
  apar_pers = 1
  tam_pers_x = 120
  tam_pers_y = (153*tam_pers_x)/85
  posicao_pers_x = 30
  posicao_pers_y = 350
  tamanho_balao_x = 350
  tamanho_balao_y = (58.67*tamanho_balao_x)/80
  
  image(balao_direita,100,140,tamanho_balao_x,tamanho_balao_y)
  textAlign(CENTER);
  noStroke();
  textSize(30);
  fill('black')
  
  if(sel==1||sel==3){frase = ", \nseu novo amigo!"} else{frase = ", \nsua nova amiga"}
  
  if(cena ==0){text("OLá, eu sou " + nome_pers + frase,270,220);acertou=false;pergunta=false}
  if(cena ==1){text("Preciso da sua ajuda\n para aprender sobre a luz\n\n então vamos começar!!",270,200);apar_pers=2}
  if(cena==2){text("selecione os obejtos\n na tela para ver \n o que acontece ",270,220);apar_pers=1}
  //limite de cena
  //if(cena==3){fase1();}
  if(mouseIsPressed&&cena==3){aparecedica=false} else if(cena==2){aparecedica=true}
  if(cena<=2||cena>3){prox=true}else{prox=false}
  
  proximo()
}
aparecedica=true
pergunta=false;errado=false
function dica1(){

  if(aparecedica==true){
image(balao_direita,50,140,tamanho_balao_x,tamanho_balao_y);fill('black');noStroke();text("Clique na lanterna\n e arraste para iluminar\n  o espelho ",205,220);}
  
}
function pergunta1(){
  if(pergunta==true){
    textAlign(CENTER);fill('black');stroke('black');text("Oh! O que aconteceu?",150,100);
    fill('white')
    rect(50,120,200,50,20);rect(50,190,200,50,20);rect(50,260,200,50,20);
    fill('black'); text("Nada",150,150);text("A luz refletiu",150,225);text("A luz atravessou",150,295)
  }
  if(mouseX>50&&mouseX<50+200&&mouseY>120&&mouseY<120+50&&mouseIsPressed){
    errado=true
  }
  else if(mouseX>50&&mouseX<50+200&&mouseY>190&&mouseY<190+50&&mouseIsPressed){acertou=true}
  else if(mouseX>50&&mouseX<50+200&&mouseY>260&&mouseY<260+50&&mouseIsPressed){errado=true}
}
function acertou1(){
  if(acertou==true){
    apar_pers=3;
imageMode(CORNER);image(balao_direita,50,140,tamanho_balao_x,tamanho_balao_y);fill('black');noStroke();text("é isso ai!! ",190,220);
    prox=true
  }
}
function errou1(){
  if(errado==true){
    imageMode(CORNER);image(balao_direita,50,140,tamanho_balao_x,tamanho_balao_y);fill('black');noStroke();text("Quase lá, tente de novo!! ",210,220);
  }
  if(mouseIsPressed){errado = false}
}
prox=false; prox1=false
function proximo(){
      
    fill(173,190,230)
    rect(width-155,height-50,width-660,height-560,20)
    
    textAlign(CENTER);
    textSize(30);
    noStroke();
    fill('white');
    text("Proximo",width-100, height-20);
    
    fill('white');
    triangle(width-20,height-30,width-40,height-20,width-40,height-40);
      
}

function mouseClicked(){
  if(mouseX>=width-150 && mouseX<=width-15 && mouseY>=height-50 && mouseY<=height-10 && prox==true){
    cena++; botao.play()
  }
  if (tela==2){cena=0}
  if (cena==5){tela=1}
}


var move_lanterna_x = 500
var move_lanterna_y= 550
posicaolant=false
troca=false
solta=false


function fase1(){
 
  apar_pers=2
  tam_lanterna_x=64
  tam_lanterna_y=(64*tam_lanterna_x)/64
  i=0
  trocaobjeto()
  if(move_lanterna_x==300&&move_lanterna_y==300){i=1;tam_lanterna_x=64*3;tam_lanterna_y=64*3;posicaolant=true;pergunta=true}
  imageMode(CORNER);image(fundofase,0,0,800,600);
  imageMode(CENTER);image(espelho,400,220)
  imageMode(CENTER); image(lanterna[i],move_lanterna_x,move_lanterna_y, tam_lanterna_x,tam_lanterna_y);
  if(posicaolant==true){image(luz,460,410,tam_lanterna_x,400);noStroke();fill(244,250,87);circle(370,225,50)} else{posicaolant=false}
  
  if(mouseIsPressed&&dist(move_lanterna_x,move_lanterna_y,mouseX,mouseY)<100&&move_lanterna_x!=300){
    troca=true
    move_lanterna_x=mouseX
    move_lanterna_y=mouseY
    
  }
  /*noFill();
  stroke('black')
  square(150,250,200)
  */
}
function fase2(){
  fill('black');
  text("parabéns, você conseguiu!! ",270,220);apar_pers=2
}
function mouseReleased(){
  troca=false
  move_lanterna_x=500
  move_lanterna_y=550
  if(mouseX>150&&mouseX<150+200&&mouseY>250&&mouseY<250+200){
    move_lanterna_x=300
    move_lanterna_y=300
    
  }
  
}
function trocaobjeto(){
  if(troca==true){if(mouseIsPressed){
    i=1
    tam_lanterna_x=64*3
    tam_lanterna_y=64*3
  }}
}
