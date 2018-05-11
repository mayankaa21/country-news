import { News } from './../news.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-initialnews',
  templateUrl: './initialnews.component.html',
  styleUrls: ['./initialnews.component.css']
})
export class InitialnewsComponent implements OnInit {
  articles:News[];

  constructor(private newsservice:UserService, ) { }

  ngOnInit() {
    this.newsservice.getNews("in")
    .subscribe( 
      (data:any)=>{
        this.articles= data;
        console.log(this.articles);
      }
    )
   
    
      }
    

  }
 


