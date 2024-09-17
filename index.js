let price={
    "shirt":700,
    "tshirt":300,
    "hoodie":800
}

let quantity={
    "shirt":0,
    "tshirt":0,
    "hoodie":0
}
const price_cal=(type)=>{
    let cart=document.getElementById("total")
    if(type in quantity){
        quantity[type]+=1
    }
    else{
        quantity[type]=1
    }
    console.log(quantity)
    let tot_price=0
    for(let i in quantity){
        tot_price=tot_price+quantity[i]*price[i]
    }
    // cart.innerHTML
    
    cart.innerHTML=`shirt:${quantity["shirt"]}<br>tshirt:${quantity["tshirt"]}<br>hoodie:${quantity["hoodie"]}<br>Total:${tot_price}`
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
