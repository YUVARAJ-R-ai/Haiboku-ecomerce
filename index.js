let price={
    "shirt":700,
    "tshirt":300,
    "hoodie":800
}

let quantity={}
const price_cal=(type)=>{
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
    console.log(tot_price)
    
}


