

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


let url=" https://raw.githubusercontent.com/nasr188/nasr188.github.io/master/links/corsi/corsi.json"
 fetch(url).then(
     res=>{
         return res.json()
     }
 ).then(res=>{
     let dat =res.data
     
     let output = "";
     console.log(media);
     let i = 0 ;
     if(  i =  ){
         
         let show = `<h1>${dat[i].content}</h1>`;
         output=show
     }
     media.innerHTML= output
    
     //if()
         
         
    
     
 })





