let allArticles = document.getElementsByTagName("article")
let arrowRight = document.querySelector(".fa-arrow-right")
let arrowLeft= document.querySelector(".fa-arrow-left")

let index = 0

function showSlide(){
    for(let each of allArticles){
        each.style.display = "none"
    }

    allArticles[index].style.display = "block"
}

showSlide()

function nextslide(){
    index = (index -1) % allArticles.length
    showSlide()
}

function prevslide(){
    index = (index -1 + allArticles.length) % allArticles.length
    showSlide()
}

// auto slide 

setInterval(function(){
    index = (index + 1) % allArticles.length
    showSlide()
}, 2500)