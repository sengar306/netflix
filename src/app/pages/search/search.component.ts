import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-apiservice.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieApiServiceService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

  ngOnInit(): void {
  }
 searchResul:any=[];
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

 submitForm(){
  console.log(this.searchForm.value,"#search");
  this.service.searchMovieApiData(this.searchForm.value).subscribe((result)=>{
      this.searchResul=result.results;
  })
 }

}
