const starActive = document.querySelectorAll(".ration");
const btnSubmit = document.getElementById('btn')
const CarData = document.getElementById('card-data')

const removeActive = () => {
    starActive.forEach(star => {
        star.classList.remove("active");
    });
}
let text;

starActive.forEach(item => {

    item.addEventListener("click", () => {
        removeActive()
        item.classList.add("active");
        text = item.innerHTML
    })
})

btnSubmit.addEventListener("click", () => {

    CarData.innerHTML = `
    <div class="img">
        <img src="images/illustration-thank-you.svg" alt="">   
    </div>  
    <div class="content">
    <span class="text">You selected ${text} out of 5</span>
    <h1>Tank You!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam </p></div>
    `
})