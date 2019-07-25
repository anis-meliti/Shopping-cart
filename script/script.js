const addItem = (pHolder, pChange, price) => {
    let qte = document.getElementById(pHolder).innerText;
    // increment item quantite
    document.getElementById(pHolder).innerText = Number(qte) + 1;
    // item total price
    let itemTotalPrice = document.getElementById(pChange).innerText = Number(document.getElementById(pHolder).innerText) * Number(price);
    let TotalPrice = document.getElementById("total-price").innerText;
    // total price
    document.getElementById("total-price").innerText = Number(TotalPrice) + Number(document.getElementById(pChange).innerText);


}
const retireItem = (pHolder, pChange, price) => {
    let qte = document.getElementById(pHolder).innerText;
    // Decrement item quantite
    if (qte > 0)
        document.getElementById(pHolder).innerText = qte - 1;
    else { document.getElementById(pHolder).innerText = 0; }
    // item total price
    let itemTotalPrice = document.getElementById(pChange).innerText = Number(document.getElementById(pHolder).innerText) * Number(price);
    // total price
    let totalPrice = document.getElementById("total-price").innerText;
    console.log(totalPrice)
    document.getElementById("total-price").innerText = (Number(totalPrice) - Number(document.getElementById(pChange).innerText));
    console.log(document.getElementById("total-price").innerText)
}
const fav = (btnNumber) => {
    let favItem = document.getElementById(btnNumber);

    let colors = favItem.getAttribute("fill");

    if (colors == "grey") { favItem.setAttribute("fill", "red") }
    if (colors == "red") { favItem.setAttribute("fill", "grey") }
}

const retire = (itemNumber) => {
    let delItem = document.getElementById(itemNumber);
    delItem.remove();


}