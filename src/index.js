console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    let img 
    fetch(imgUrl)
    .then(rsp => rsp.json())
    .then(data => {
        data.message.forEach(dogImg => renderDogImg(dogImg))
    })
})

function renderDogImg(dog) {

    let dogTag = document.getElementById("dog-image-container")
    let newImgTag = document.createElement('img')
    newImgTag.src = dog

    dogTag.appendChild(newImgTag)
}
    
document.addEventListener('DOMContentLoaded', () => {
    fetch(breedUrl)
    .then(rsp => rsp.json())
    .then(data => {
        let obj = data.message
        Object.keys(obj).forEach(breed => renderDogBreed(breed))
    })
})
    
    
function renderDogBreed(dogBreed){
        
        let dogBreedUl = document.getElementById("dog-breeds")
        let newLi = document.createElement('li')
        newLi.innerText = dogBreed
        
        dogBreedUl.appendChild(newLi)
}
    

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsById("dog-breeds").addEventListener('click', function(e) {
                
        alert("You clicked This!")
                
    })
})