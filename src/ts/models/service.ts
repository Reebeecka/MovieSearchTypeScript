import { monitorEventLoopDelay } from "perf_hooks";
import { IService } from "./Iservice";



export class Service implements IService{
    async getData(title) {

        let url = "http://www.omdbapi.com/?t=" + title + "&apikey=5d0854c3"
        let g = await ReadAPI(url);

        console.log(g);
        let name = g.Title;
        let poster=g.Poster;
        let plot=g.Plot;
        let date =g.Released //Datum den släpptes

    //Internet movie Database
        let imdbValue =g.Ratings[0].Value
        let rottenValue =g.Ratings[1].Value//Metacritic
        let metaValue = g.Ratings[2].Value
        

        let movieArray=[name, poster, plot, date, imdbValue, rottenValue, metaValue];
        return movieArray;

        async function ReadAPI(url) {

            let response = await fetch(url);
            let data = await response.json();
            return data;}

}};