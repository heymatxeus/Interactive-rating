const button = document.querySelector(".btn");
let userNote = "";

const options = document.querySelectorAll(".user-option");
    options.forEach((option) =>{
        
        option.addEventListener("click", () =>{
            options.forEach(op =>{
                op.classList.remove("selected")
            });
            option.classList.add("selected");

            userNote = option.innerHTML;
        })
    })

button.addEventListener("click", () =>{
    if(userNote === ""){
        alert("Please, reporte a note");
        return;
    }

    funcao();
    
    const formSubmit = document.querySelector(".submit-section");
    const formResult = document.querySelector(".result-section");

    formSubmit.style.display = "none";
    formResult.style.display = "flex";
})

function funcao(){
    const noteElement = document.querySelector(".note");
    noteElement.innerHTML = `You selected ${userNote} out of 5`;
}