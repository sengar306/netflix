import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-apiservice.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailsComponent implements OnInit {
  

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute,private title:Title,private meta:Meta) { }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
   
     this.getMovie(getParamId);
     this.getVedio(getParamId);
     this.getCast(getParamId);
   
  }
  getMovie(id:any)
  {
    this.service.getMovieDetails(id).subscribe((result)=>{
         
          this.getMovieDetailResult=result;
    })
  }
  getVedio(id:any)
  { 
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,"getvedio");
      result.results.forEach((element:any) => {
        if(element.type=="trailer")
        {
          this.getMovieVideoResult=element.key;
        }
        
      });
    
    })
  }

    getCast(id:any)
    {
      this.service.getMovieCast(id).subscribe((result)=>{
        console.log(result,'movieCast#');
        this.getMovieCastResult = result.cast;
      })
    }
  

 

  

}