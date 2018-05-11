import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.css']
})
export class NavlinkComponent implements OnInit {

in:boolean=true;
us:boolean=false;
ch:boolean=false;

  constructor(private route:Router) { }

  ngOnInit() {
    this.route.navigate(['/news','in']);

  }
 
  intrue(){
    this.in=true;
    this.us=false;
    this.ch=false;
  }
  ustrue(){
    this.in=false;
    this.us=true;
    this.ch=false;
  }
  chtrue(){
    this.in=false;
    this.us=false;
    this.ch=true;
  }

  
}
