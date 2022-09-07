const buttons = document.querySelectorAll("#cal-buttons button");
var monitor = document.querySelector("#cal-monitor span");

buttons.forEach(element => {
    element.addEventListener("click", function (){
        if (element.innerHTML == "="){
            monitor.innerHTML = eval(monitor.innerHTML)
        }else if (element.innerHTML == "Clear"){
            monitor.innerHTML = "";
        }else if (element.innerHTML == "Close"){
            document.querySelector("#cal").remove()
        }else {
            monitor.innerHTML += element.innerHTML
        }
        
    });
});
