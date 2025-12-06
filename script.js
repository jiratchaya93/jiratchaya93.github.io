import {Infomations} from "./data.js"

const container = document.getElementById("container")
console.log(container)

Infomations.forEach(Infodata => {
    let Infomation_div = document.createElement("div")
    Infomation_div.setAttribute("class","Infomation_div")
    console.log(Infomation_div)

    //Certificate

    let Certificate = document.createElement("p")
    Certificate.setAttribute("class","Certificate")
    Certificate.innerHTML = (Infodata.Certificate)
    Infomation_div.appendChild(Certificate)

    // Day
    let Day = document.createElement("p")
    Day.setAttribute("class","Day")
    Day.innerHTML = `${Infodata.Day}`
    

    // Month
    let Month = document.createElement("p")
    Month.setAttribute("class","Month")
    Month.innerHTML = (Infodata.Month)
    


    //Year

    let Year = document.createElement("p")
    Year.setAttribute("class","Year")
    Year.innerHTML = (Infodata.Year)
    

    

    let tub = document.createElement("p")
    tub.setAttribute("class","tub")
    tub.innerHTML = `${Infodata.Day} / ${Infodata.Month} / ${Infodata.Year}`

    Infomation_div.appendChild(tub)

    //img
    let img_certificate = document.createElement("img")
    img_certificate.setAttribute("src",Infodata.Img)
    Infomation_div.appendChild(img_certificate)

    img_certificate.addEventListener("mouseover",() => {
        img_certificate.style.width='290px'
        img_certificate.style.transition = "all 0.4s ease";
    })

    img_certificate.addEventListener("mouseout",() => {
        img_certificate.style.width='260px'
        img_certificate.style.transition = "all 0.4s ease";
    })


    
    container.appendChild(Infomation_div)
})




