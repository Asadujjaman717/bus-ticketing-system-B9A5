
const allBtn = document.getElementsByClassName("all-btn");
for(const btns of allBtn){
    btns.addEventListener("click", function(event){
    const name = event.target.innerText;
    // console.log(name);
    const classes = 'Economy';
    const price = 550;

    const selectedContainer = document.getElementById("selected-seat-container");

    // // // disabled button after one click
    // event.target.setAttribute("disabled", false);
    // // // background filled with green
    // event.target.classList.add('bg-green-500');
    
    
    
    

    // selected seat limit
    const selectedSeatCount = getConvertedValue("selectedSeat");
    if(selectedSeatCount + 1 > 4){
        alert("You can purchase mostly 4tickets at a time!");
        return;
    }

    

    // update seat
    const availableSeat = getConvertedValue("seatLeft");
    document.getElementById("seatLeft").innerText = availableSeat - 1;
    // selected seat
    const selectedSeat = getConvertedValue("selectedSeat");
    document.getElementById("selectedSeat").innerText = selectedSeat + 1;


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

// color button and disable clicked button
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".all-btn");
    let selectedTickets = 0;
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        if (selectedTickets < 4) {
          button.style.backgroundColor = "green";
          button.style.color = "white"
          button.setAttribute("disabled", "disabled"); 
          selectedTickets++;
          if (selectedTickets === 4) {
            button.disabled = false;           
          }
        }
      });
    });

  });

  //Get the next button enable when number typing in input field 
  document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const myButton = document.getElementById("next-btn");
  
    numberInput.addEventListener("input", function() {

      const inputValue = parseInt(numberInput.value);
      if (!isNaN(inputValue) && inputValue > 0) {
        myButton.disabled = false;
      } else {
        myButton.disabled = true;
      }
    });
  });
  
// hide apply container after one uses
document.addEventListener("DOMContentLoaded", function(){
    const applyButton = document.getElementById("apply-btn");
    const sectionToHide = document.getElementById("apply-container");
    applyButton.addEventListener("click", function() {
        sectionToHide.style.display = "none"; 
      });
})
