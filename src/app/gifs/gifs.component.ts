import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})

export class GifsComponent implements OnInit {
gifs: any[] = [];
  subscription!: Subscription;
  message = "message from search";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getTrendingGifs();
    this.subscription = this.dataService.getGifs()
     .subscribe((response: any) => {
     //console.log('Data', response);
      console.log(response)
      //console.log(response.data) // will show the no of searches done so far in console, but need this to be updated in navbar
      this.gifs = response;
      
    });
  
}

  ngOnDestroy() {
this.subscription.unsubscribe();
  }


  saveimg() {

  }
}
