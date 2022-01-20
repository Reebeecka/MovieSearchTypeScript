import { brotliDecompressSync } from "zlib";
import { Service } from "./models/service";

window.onload = function() {
    let main = new Main();
    let service = new Service();
    main.start(service);
};

class Main{
    start(service){
    
    let nav = document.createElement("nav");
    let h2 = document.createElement("h2");
    let input = document.createElement("input");
    let btn = document.createElement("button");
    h2.innerHTML="Write a movie and press the button!"
    btn.innerHTML="Press me";

    let btnremove = document.createElement("button");
    btnremove.innerHTML="Clear the Page";


    nav.append(h2, input, btn, btnremove);

    let section = document.createElement("section");
    document.body.append(nav, section);

    btn.addEventListener("click", pressed);

    async function pressed(){
        let title = input.value;
        let g = await service.getData(title);

        let div = document.createElement("div");

        let movieTitle = document.createElement("h1");
        movieTitle.innerHTML=g[0];
        let movieDate = document.createElement("p");
        movieDate.innerHTML=g[3];

        let posterImg =document.createElement("img");
        posterImg.src=g[1];

        let moviePlot=document.createElement("p");
        moviePlot.innerHTML=g[2];

        let rottenimg=document.createElement("img");
        let rottenSrc=document.createElement("h3");

        rottenimg.src="https://www.rottentomatoes.com/assets/pizza-pie/head-assets/images/RT_TwitterCard_2018.jpg";
        rottenimg.style.height="20px";
        rottenSrc.innerHTML= g[6];

        let imdbimg=document.createElement("img");
        let imdbSrc=document.createElement("h3");

        imdbimg.src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg";
        imdbimg.style.height="20px";
        imdbSrc.innerHTML= g[5];

        let metricimg=document.createElement("img");
        let metricSrc=document.createElement("h3");

        metricimg.src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/07/Metacritic-change-review-bomb.jpg";
        metricimg.style.height="20px";
        metricSrc.innerHTML= g[6];


        let ratingContainer = document.createElement("article");
        let ratingImg = document.createElement("article");
        let ratingValue = document.createElement("article");

        ratingImg.append(rottenimg, imdbimg, metricimg);
        ratingImg.className="Images"
        ratingValue.append(rottenSrc, imdbSrc, metricSrc);
        ratingValue.className="Values";
        ratingContainer.append(ratingImg, ratingValue);
        ratingContainer.className="Container";

        div.append(movieTitle, movieDate, posterImg, moviePlot, ratingContainer);
        section.prepend(div);
        
    }

    btnremove.addEventListener("click", remove);

    function remove(){
        section.innerHTML="";
    }

}};