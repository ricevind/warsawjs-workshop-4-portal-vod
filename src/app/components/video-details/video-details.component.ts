import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../service/video.service';
import { Video } from '../../models/video';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  private id: string;
  private video: Video;

  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id = params['videoId']);
    this.videoService.get(this.id).subscribe(v => this.video = v);
  }

}
