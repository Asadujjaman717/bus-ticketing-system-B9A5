
const allBtn = document.getElementsByClassName("all-btn");
for(const btns of allBtn){
    btns.addEventListener("click", function(event){
    const name = event.target.innerText;
    console.log(name);
    const classes = 'Economy';
    const price = 550;

    const selectedContainer = document.getElementById("selected-seat-container");

    const div = document.createElement("div");
    div.classList.add("selected-seat");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = classes;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);


    updateTotalCost(price);
    updateGrandTotal(); 
    })
    
}

function updateGrandTotal(status){
    const totalCost = getConvertedValue("total-cost");
    
    if(status == undefined){
    document.getElementById("grand-total").innerText = totalCost;
    }
    else{
        
        const couponCode = document.getElementById("coupon-code").value;
        if(couponCode == "NEW15"){
            const discounted = totalCost * 0.15;
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }
        else if(couponCode == "Couple 20"){
            const discounted = totalCost * .2;
             document.getElementById("grand-total").innerText = totalCost - discounted;
        }
        else{
            alert("Please Enter a valid coupon code");
        }
    }


    
}

function updateTotalCost(value){
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;

}

function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

// function seatSelected(){
//     // background filled with green
//     const element = document.getElementById('a1');
//     element.classList.add('bg-green-500');
    
//     // available seat task
//     const currentSeatElement = document.getElementById('seatLeft');
//     const currentSeatText = currentSeatElement.innerText;
//     const currentSeat = parseInt(currentSeatText);
    
//     // decrease the seat by 1
//     const newSeat = currentSeat - 1;
//     // Show the updated seat
//     currentSeatElement.innerText = newSeat;

//     // selected seat task
//     // get current selected seat number 
//     const currentSelectedSeat = document.getElementById('selectedSeat');
//     const selectedSeatText = currentSelectedSeat.innerText;
//     const selectedSeatNumber = parseInt(selectedSeatText);
    
//     // increase the seat by 1
//     const selectedSeat = selectedSeatNumber + 1;
//     // show the updated selected seat number
//     currentSelectedSeat.innerText = selectedSeat;
    

// }
// function handleClick(elementId) {
//     button.disabled = true; // Disable the button
//     button.removeEventListener("click", handleClick); // Remove the click event listener
//   }

  // Add event listener to the button
//   button.addEventListener("click", handleClick);
// });
// function selectedSeatCount(){

// }
// function colorFilled(){

// }