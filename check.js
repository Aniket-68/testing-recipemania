// GRID SLIDER
recipe=["Chicken Curry","Panner Tikka",
"aaa","aba"];
function createrec(recipe)
{

for(i=0;i<4;i++)
{
    parent=document.getElementById('rec');

var newcard=document.createElement("div");
newcard.setAttribute("class","card1");

var rimg=document.createElement("img");
rimg.setAttribute("class","img-card-slider");
rimg.setAttribute("src","./cont.jpg");

var rname=document.createElement("p");
rname.setAttribute("class","recipe-name");
rname.innerHTML=recipe[i];
// rname.innerHTML();
var modal=document.createElement("div");
modal.setAttribute("class","w3-container");
var viewbutt=document.createElement("button");
viewbutt.setAttribute("class","w3-button");
newcard.appendChild(rimg);
newcard.appendChild(rname);
modal.appendChild(viewbutt);
viewbutt.setAttribute("onclick",pop(this));
viewbutt.onclick = function()
{
    
}



mcont.appendChild(cbutt);
mcont.appendChild(cont);
mpop.appendChild(mcont);
modal.appendChild(mpop);



newcard.appendChild(modal);

parent.appendChild(newcard);
}

}

/* <div class="card1">
<img class="img-card-slider" src="F&B_logo.jpg">//</img>
<p class="recipe-name">RECIPE1</p>

<!-- Modal= VIEW button -->
<div class="w3-container">
  <button onclick="document.getElementById('id21').style.display='block'" class="w3-button">VIEW</button>
  <div id="id21" class="w3-modal">  
  <div  class=" w3-modal-content w3-container">
    <span onclick="document.getElementById('id21').style.display='none'"
          class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
    </div>
  </div>
  
</div>
</div> */

function pop(ele)
{
  // viewbutt.setAttribute("onclick",document.getElementById(i+1).style.display='block');
var mpop=document.createElement("div");
mpop.setAttribute("class","w3-modal");
mpop.setAttribute("id",(i+1));
var mcont=document.createElement("div");
mcont.setAttribute("class","w3-modal-content w3-container");
var cbutt=document.createElement("span");
cbutt.innerHTML="&times;";
cbutt.setAttribute("onclick",close(this));

var cont=document.createElement("p");
cont.innerHTML="Some text. Some text. Some text.";
cont.innerHTML="Some text. Some text. Some text.";  
}
function close()
{
cbut.setAttribute("style","display='none'")
}
createrec(recipe);