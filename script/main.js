






//fare un toggle per Burger-menu & navigation-list
function myFunction(){
     document.querySelector("#line-1").classList.toggle("change1");
     document.querySelector("#line-2").classList.toggle("change2");
     document.querySelector("#line-3").classList.toggle("change3");
     //navigation-list
     document.querySelector(".navvv") .classList.toggle("change");
     //paragrafo display none
     document.querySelector(".paragrafo p").classList.toggle("changep");   
}

//function per disablitare la class change
function remove(){
    let nav = document.querySelector(".navvv");
    if(nav.classList.contains("change")){
        nav.classList.remove("change");
        //remove burger-menu toggle
        document.querySelector("#line-1").classList.remove("change1");
        document.querySelector("#line-2").classList.remove("change2");
        document.querySelector("#line-3").classList.remove("change3");
        //paragrafo display none
        document.querySelector(".paragrafo p").classList.toggle("changep"); 
    }
};

///corsi.html code
 
//una funzione per ritornare a Home Page
function goHome(){
    window.location = "../../index.html"
}

/// creare card content per i corsi 
 /*let cardCom= document.createElement("div");
cardCom.setAttribute("class","card-com");
//creare img e la aggiungiamo nel div card-com 
let img = document.createElement("div");
img.setAttribute("class","img");
let imgLink= document.createElement("img");
  //imgLink.setAttribute("src","");
  imgLink.setAttribute("src",`${data.avatar}`);
  imgLink.setAttribute("alt","");
img.appendChild(imgLink);
cardCom.appendChild(img);
//console.log(cardCom);
//creare link e la aggiungiamo nel div card-com 
  let link = document.createElement("div");
  link.setAttribute("class","link");
  let linkource= document.createElement("a");
  linkource.setAttribute("href",`${data.link}`);
  link.appendChild(linkource);
  cardCom.appendChild(link);
  //creare div content 
  let conte = document.createElement("div");
  conte.setAttribute("div","content");
  cardCom.appendChild(conte);
  // append cardCom in card-menu
  console.log(cardCom);*/

  var url ="https://api.jsonbin.io/b/5fd3aec9fbb23c2e36a5822d/3";
    fetch(url)
  .then(response=>{
      return response.json()
  }).then(result=>{
      let dat = result.data;
      let father = document.querySelector(".card-menu");
  //father.appendChild(cardCom);
      let output="";
console.log(dat);
dat.forEach(data => {

     let cards= `<div class="card-com">
<div class="img">
<img src ="${data.avatar}" alt="">
</div>
<div class="link">
<a href="${data.link}">  ${data.header}</a>
</div>
 </div>`
    
    output+= cards

});
father.innerHTML = output
    
  });

  ////docenti fetch 
  let url2 = "https://api.jsonbin.io/b/5fd8e4af7e2e9559b15d29c0/5"
  fetch(url2).then(res=>{
      return res.json()
  })
  .then(data=>{
      console.log(data.id)
      const cover = document.querySelector(".idcover");
      data.id.forEach(id=>{

for(let i=0;i<data.id.length;i++){
    //console.log(data.id[i].img);
    console.log(data.id.length);
    //creare image linke
    let img = document.createElement("img");
    img.setAttribute("src",data.id[i].img);
    //console.log(img);
    //creare div con class "id-img" dove si append image tag
    let divImg = document.createElement("div");
    divImg.setAttribute("class","id-img");
    divImg.appendChild(img);
    //console.log(divImg);

    
    //creare list per mettere il nome e il cognome 
    let li1 = document.createElement("li");
    li1.textContent= data.id[i].nome;
    let li2 = document.createElement("li");
    li2.textContent=data.id[i].cognome;
    //console.log(li1);
    //console.log(li2);
    let ulp = document.createElement("ul");
    ulp.appendChild(li1);
    ulp.appendChild(li2);
    //console.log(ulp);
    let idInfo=document.createElement("div");
    idInfo.setAttribute("class","id-info");
    idInfo.appendChild(ulp);
    //console.log(idInfo);

    //creare un div parent per appendere tutti i div dentro
    let wraper = document.createElement("div");
    wraper.setAttribute("class","wraper");
    wraper.appendChild(divImg);
    wraper.appendChild(idInfo);
    console.log(wraper);
    cover.appendChild(wraper);
    ///creare un div per CV
   
}
      })
     
    })
    .catch((err)=> {
        console.log(err);
    })
    
  
  
  

     
 
