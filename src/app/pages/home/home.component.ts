import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-apiservice.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private service: MovieApiServiceService) {}
    
   bannerApiData:any=[];
   id:any="";
   trendingApiData:any=[];
  ngOnInit(): void {
     this.bannerData();  
     this.trendingData();
  }


  // bannerdata
  bannerData() {
    console.log("vivek")
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      
      this.bannerApiData=result.results;
     
    });
  }
  trendingData()
  {
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,"trending resiult");
      this.trendingApiData=result.results;
    })
  }

  

}