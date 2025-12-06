import {Infomation} from "./data.js"

const container = document.getElementById("container")
console.log(container)

animes.forEach(anime => {
    let anime_div = document.createElement("div")
    anime_div.setAttribute("class","anime_div")
    console.log(anime)

    // episode amount
    let episode_amount = document.createElement("div")
    episode_amount.setAttribute("class","episode_amount")
    episode_amount.innerHTML = `${anime.episode_amount}ตอน`
    anime_div.appendChild(episode_amount)


    //img
    let img_anime = document.createElement("img")
    img_anime.setAttribute("src",anime.anime_url)
    anime_div.appendChild(img_anime)
