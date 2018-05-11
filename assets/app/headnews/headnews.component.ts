import { ActivatedRoute, Params } from '@angular/router';
import { News } from './../news.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-headnews',
  templateUrl: './headnews.component.html',
  styleUrls: ['./headnews.component.css']
})
export class HeadnewsComponent implements OnInit {
  articles:News[];
  country:string="in";

  constructor(private newsservice:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log("top")
    this.newsservice.getNews("in")
    .subscribe( 
      (data:any)=>{
        this.articles= data;
        console.log(this.articles);
      }
    )
   
    this.route.params.subscribe(
      (params:Params)=>{
        this.country=params['id'];
        this.newsservice.getNews(this.country)
        .subscribe(
          (data:any)=>{
            this.articles= data;
          }
        )
      }
    )

  }


 

}
