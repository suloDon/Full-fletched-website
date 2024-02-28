const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let popup = document.querySelector(".hover");

let show = document.querySelector(".fixed-image")

popup.addEventListener("mouseenter", ()=>{
    show.style.display = "block"
})

popup.addEventListener("mouseleave", ()=>{
    show.style.display = "none"
})


let items = document.querySelectorAll(".items")
items.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        let image = e.getAttribute("data-image")
        show.style.backgroundImage = `url(${image})`;
        console.log(image)
    })
    
})