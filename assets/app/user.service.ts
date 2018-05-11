
import { News } from './news.model';

import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    public month = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    }


    private indnews: News[] = [];
    private usnews: News[] = [];
    private chnews: News[] = [];
    
    apikey: string = "c3be81cb3cd4406cb3a47c71e65789bb";
    country: string = "in";
    weburl:string;


    constructor(private http: Http) {}

    datecal(date:string){
        var datearray = date.slice(0,10).split("-",3);
        var nummon = Number(datearray[1]);
        var alpmon = this.month[nummon];
        var finaldate = datearray[2]+ " "+ alpmon+" "+datearray[0];

        return finaldate;
    }
    timecal(time:string){
        var clock = "am";
        var hoursstr = time.substring(11,13);
        var hours = Number(hoursstr);

        var minutes = time.substring(14,16);

        if(hours>12){
            hours=hours-12;
            clock="pm";
        }
        var finaltime = hours+":"+minutes+" "+clock;
        return finaltime;
    }

    getNews(cname:string){
        this.country = cname;
        this.weburl = "https://newsapi.org/v2/top-headlines?country="+this.country+"&apiKey="+this.apikey;
        return this.http.get(this.weburl)
            .map((response: any) => {
                var data = JSON.parse(response._body);

                var articles = data.articles;
  
                var finallist = [];
                for (let element of articles){
                    var dateandtime = element.publishedAt;
                    var date = this.datecal(dateandtime);
                    var time = this.timecal(dateandtime);
                    if(element.urlToImage==null){
                        element.urlToImage="http://www.conlorca.com/img/no-foto.png"
                    }
                    var news = new News(
                        element.urlToImage,
                        element.title,
                        element.author,
                        element.description,
                        element.url,
                        date,
                        time
                    )
                    finallist.push(news);
                }

                if(this.country=="us")
                 return this.usnews= finallist;
                if(this.country=="in")    
                 return this.indnews = finallist;
                if(this.country=="ch")
                 return this.chnews = finallist;    
            })
           /*.catch((error: Response) => {
                this.errorservice.handleError(error.json());
                return Observable.throw(error.json());
            });*/
        
    }
  
}