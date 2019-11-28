// let changeButtonTxt = document.getElementById("changeTxt");
// let viewShoppingCart = document.getElementById("viewShoppingCart");
// let selectMoreItems = document.getElementById("selectShoppingCart");
// let showingSelectMoreItemsElememnt = false;

// selectMoreItems.style.display = "none";
// viewShoppingCart.style.display = "block";
// function changeView(){
//     if (showingSelectMoreItemsElememnt=== true){
//         selectMoreItems.style.display = "none";
//         viewShoppingCart.style.display = "block";
//         showingSelectMoreItemsElememnt = false;
//         changeButtonTxt.innerHTML ="view Shopping Cart"
//     }else{
//         changeButtonTxt.innerHTML = "Select more items"
//         selectMoreItems.style.display = "block"
//         viewShoppingCart.style.display = "none"
//         showingSelectMoreItemsElememnt = true
//     }
// }
const store = [
    {
        itemName: "T-shirt",
        price: 6000,
        quantity: 0
    },
    {
        itemName: "Dress",
        price: 8000,
        quantity: 0
    },
    {
        itemName: "Short",
        price: 4000,
        quantity: 0
    },
    {
        itemName: "Jean",
        price: 7000,
        quantity: 0
    }

];
let app = new Vue({
    el: "#app",
    data: {
        title: "Shopping Cart",
        showShoppingCart: true,
        storeItems: store,
        cart:[],
        total: 0
    },
    methods: {
        changeView: function() {
            if (this.showShowingcart === false){
            this.showShoppingCart = true;     
              }  else {
                 this.showshoppingCart=false;
              }
        }
    }
}

)
