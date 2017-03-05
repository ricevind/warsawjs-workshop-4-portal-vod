import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Video } from '../models/video';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  search(): Observable<Video[]> {
    return this.http.get('/assets/search.json')
      .map(res => {
        const videos = res.json().items.map((el) => {
          const video: Video = {
            id: el.id.videoId,
            description: el.snippet.description,
            thumb: el.snippet.thumbnails.high.url,
            title: el.snippet.title
        };
        return video;
      })
      .filter(el => el.id);
      return videos;

      });
  }

   get(id): Observable<Video> {
        return this.search()
            .map(videos => {
                return videos.filter(video => {
                    return video.id === id;
                });
            })
            .map(videos => videos[0]);
    }
}
