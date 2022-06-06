// // let user=JSON.parse(localStorage.getItem("user")) ;


// const Voucher=async()=>{

//     // const query=document.getElementById()
//     const res=await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
   
//     const user=await res.json();
//     console.log(user)

// }
// function appendData(user){
//     let container=document.getElementById("purchased_vouchers");
//     container.innerHTML=null;

//     voucher_list.forEach(({name, image })=>{

//       let box=document.createElement("div");

//       let Name=document.createElement("h3");
//        Name.innerText=name;

//        let price=document.createElement("h3");
//        price.innerText=price;
//       let img=document.createElement("img");
//       img.src=image;

//       let btn=document.createElement('button')
//      btn.innerText="BUY";
//      btn.setAttribute("class","buy_voucher")

//      let voucher_list={
//          name,
//          image,
//          price
        
//      }

//      box.append(name,image,price,btn);

//      btn.addEventListener("click",function(){
//          purchasePage(voucher_list)
//      })

//      container.append(box);

//     })
// }

// function  purchasePage(user){

//     console.log(user)
// }
function  mfunc(){
    let wallet=document.getElementById("wallet_balance").ariaValueMax;
     let user=JSON.parse(localStorage.getItem("user"))
}

const url=` https://masai-vouchers-api.herokuapp.com/api/vouchers`

fetch(url)
.then(function(res){
    return res.json(url);
}).then(function(res)
{
    return append (res[0].vouchers)
}).catch(function(err){
    console.log(err)
})
var arr=JSON.parse(localStorage.getItem("purchase")) || [];

function append(user){
    console.log(user)
    user.forEach((ele)=>{
        
        let voucher_list=document.getElementById("voucher_list")
        let box=document.createElement("div");
            box.setAttribute("class","voucher")
              let Name=document.createElement("h3");
               Name.innerText=ele.name;
        
               let price=document.createElement("h3");
               price.innerText=ele.price;
              let img=document.createElement("img");
              img.src=ele.image;
        
              let btn=document.createElement('button')
             btn.innerText="BUY";
             btn.setAttribute("class","buy_voucher")
             box.append(img,Name,price,btn);
             voucher_list.append(box);
    })
   
}
