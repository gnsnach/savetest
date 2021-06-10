import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=%${environment.giphyApiKey}&limit=50&rating=g`);
   }
   searchGifs(gifName: String) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=%${environment.giphyApiKey}&limit=50&rating=g`);

   }
}



