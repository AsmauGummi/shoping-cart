let changeButtonTxt = document.getElementById("changeTxt");
let viewShoppingCart = document.getElementById("viewShoppingCart");
let selectMoreItems = document.getElementById("selectShoppingCart");
let showingSelectMoreItemsElememnt = false;

selectMoreItems.style.display = "none";
viewShoppingCart.style.display = "block";
function changeView(){
    if (showingSelectMoreItemsElememnt=== true){
        selectMoreItems.style.display = "none";
        viewShoppingCart.style.display = "block";
        showingSelectMoreItemsElememnt = false;
        changeButtonTxt.innerHTML ="view Shopping Cart"
    }else{
        changeButtonTxt.innerHTML = "Select more items"
        selectMoreItems.style.display = "block"
        viewShoppingCart.style.display = "none"
        showingSelectMoreItemsElememnt = true
    }
}
