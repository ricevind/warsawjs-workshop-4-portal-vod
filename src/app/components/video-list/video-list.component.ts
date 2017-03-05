import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { Video } from '../../models/video';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  private list: Observable<Video[]>;
  private video: Video;
  private searchFor: string;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.list = this.videoService.search();
    // this.videoService.search().subscribe((videos) => this.list = videos);
  }

  onVideoClick(video: Video) {
    this.video = video;
  }

}
