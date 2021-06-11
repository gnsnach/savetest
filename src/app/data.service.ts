import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
gifs = new BehaviorSubject<any>([])
  constructor(private http: HttpClient) { }

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=JFGAR1mV2zPUVsqOo7GYllYEhUoM2KUS&limit=50&rating=g`)
      .subscribe((response: any) => {
          this.gifs.next(response.data);
      });
  }
   searchGifs(gifName: String) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=JFGAR1mV2zPUVsqOo7GYllYEhUoM2KUS&limit=50&rating=g`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
  });
   }
      getGifs() {
         return this.gifs.asObservable()
}
   
}



