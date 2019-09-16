(function(){
const cartInfo = document.getElementById('cart-info')
const cart = document.getElementsByClassName('cart-items')
// cartInfo.addEventListener('click', function(){
//     cart.classList.toggle()
// })


//add item to cart 

})();

(function(){


    const Button = document.querySelectorAll('.btn');
Button.forEach(function(btn){
    btn.addEventListener('click' , function(event)
    {
        console.log(event.target);
        if(event.target.classList.contains('btn-danger'))
        {
          removeItem()  
        }
       else if(event.target.classList.contains('btn-purchase'))
        {
          console.log('uyguyg') 
          const purchaseButton = event.target.classList.contains('btn-purchase');
          alert('Purchased')
        }
      
      else if(event.target.classList.contains('shop-item-button'))
        {
            const targetButton = event.target.parentElement.parentElement;
            const title = targetButton.getElementsByClassName('shop-item-title')[0].innerHTML
            const price =targetButton.getElementsByClassName('shop-item-price')[0].innerHTML
            const image = targetButton.getElementsByClassName('shop-item-image')[0].src
            //const quantity = document.getElementsByClassName('cart-quantity-input')[0].innerHTML
           
            console.log(title, image, price );
           // showtotal();
           
        
            function addItemtoCart(){
                const cartRow = document.createElement('div')
                cartRow.classList.add('row')
                const cartItems = document.getElementsByClassName('cart-items')[0];
                const cartItemTitle = cartItems.getElementsByClassName('cart-item-title')
                console.log(cartItemTitle.innerHTML)
               
                for(var i =0; i<cartItemTitle.length; i++){
                    console.log(cartItemTitle)
                    if(cartItemTitle[i].innerText == title ){
                   
                        alert('item already added! Do you want to add More?');
                     
                       return  ;
                       // document.getElementsByClassName('shop-item-button')[0].addEventListener('click', showtotal())
                     
                        
                    }
                   
                }
    
                
               
          
                
            //  cartRow.innerHTML = title
             
               
                const cartRowContent = ` 
                <div class="cart-item cart-column col-4">
                    <img src="${image}" width="100" height="100"
                    class="cart-item-image">
                    <span class="cart-item-title">${title}</span>
                </div>
                
                <span class="cart-price cart-column col-4">${price}</span>
                <div class="cart-quantity cart-column col-4">
                    <input type="number" class="cart-quantity-input"  value="1">
                   <button class="btn btn-danger">REMOVE</button>
                   </div>
            </div> `
               cartRow.innerHTML = cartRowContent
               cartItems.append(cartRow);
               alert('r u sure ?')
               cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem)
               cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
              // cartRow.getElementsByClassName('shop-item-button')[0].addEventListener('click', showtotal())
            }
           
            addItemtoCart();
          updateCartTotal();
           // quantityChange()
          
        }

    })
})
function removeItem(){
    console.log('jhgjhg')
    event.target.parentElement.parentElement.remove();
    updateCartTotal() 
    //showtotal();
}



//-----------

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

//-------

function updateCartTotal() {
   
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-price')
    console.log(cartRows)
    var total = [];

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.innerHTML
        console.log(priceElement)
        
        var quantityElement = document.getElementsByClassName('cart-quantity-input')[0]
       // var price = priceElement.innerText)
       // console.log(price)
       // var price = (priceElement.innerText)
       console.log(quantityElement.defaultValue)
        var quantity = quantityElement.value
        console.log(quantity)
        const Money = priceElement * quantity
        total.push(Money)
        // array.push(total)
        console.log(total)
    }
    const totalUpdate = total.reduce(function(total , money){

                               total = total + money
                              console.log(total)
                                  return total
                           }, 0);
                           const finalMoney = totalUpdate.toFixed(2);
                 console.log(finalMoney);
                document.getElementsByClassName('cart-total-price')[0].innerHTML = '$'+finalMoney;
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
//
 }

 function quantityChanged(event) {
    var input = event.target
    
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

















//show totals?// quantity+total------------------------------------------
//  function showTotals(){
//     const total = []

//      //const shopItem = document.querySelectorAll('.shop-items');
//     const cartRow = document.querySelectorAll('.cart-row');
//    console.log(cartRow)
//    cartRow.forEach(function (cartRows){
//                  console.log(cartRows)
                 
//                  const PriceElement = document.querySelectorAll('.shop-item-price')
//                  const quantityElement = cartRows.querySelectorAll('.cart-quantity-input')[0].defaultValue
//                console.log(PriceElement)
//                 console.log(quantityElement)
//                const money =  PriceElement * quantityElement
//                total.push(money)
//                console.log(total)
            
//                const price = (PriceElement);
//                 console.log(price)
//                               const totalMoney = total.reduce(function(total , money){

//                           total = total + money
//                           console.log(total)
//                            return total
//                     }, 0);
//                     const finalMoney = totalMoney.toFixed(2);
//                   console.log(finalMoney);
//                       document.getElementsByClassName('cart-total-price')[0].innerHTML = '$'+finalMoney;
//                       document.getElementsByClassName('cart-quantity-input')[0].innerHTML =finalMoney.length ;
//            })
//         }
//         }//-------------------------------




//   function   showtotal(){
//     const total = [];
//     const items = document.querySelectorAll('.cart-price')
// //    // const quantity= document.querySelectorAll('.cart-quantity-input')
//    console.log(items)
    
//    items.forEach(function (item){
//        console.log(item)
//        total.push(parseFloat(item.textContent));
        
//     });
//   console.log(total);
//     const totalMoney = total.reduce(function(total, item){

//         total+=item
//         return total
//    }, 0);
    
//     const finalMoney = totalMoney.toFixed(2);
//     console.log(finalMoney);
//    document.getElementsByClassName('cart-total-price')[0].innerHTML = '$'+finalMoney;
 
//    //document.getElementsByClassName('cart-quantity-input')[0].innerHTML =finalMoney.length ;
    


//  }
//quantitychange

// function quantityChange(){

//     const input = document.querySelectorAll('cart-quantity-input')
//     console.log(input)
//     input.forEach(function(quantityValue){
//         quantityValue.addEventListener('change' ,function(){
//             if(isNaN(quantityValue.value) || quantityValue<=0)
//             quantityValue.value= 1;
//         } )
//     })
//     showTotals()
// }

})();