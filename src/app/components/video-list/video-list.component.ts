import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { Video } from '../../models/video';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayerComponent } from "../player/player.component";


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  private list: Observable<Video[]>;
  private video: Video;
  private searchFor: string;

  constructor(private videoService: VideoService,
              private modalService: NgbModal
             ) { }

  ngOnInit() {
    this.list = this.videoService.search();
    // this.videoService.search().subscribe((videos) => this.list = videos);
  }

  onVideoClick(video: Video) {
    this.video = video;
    const modal = this.modalService.open(PlayerComponent);
    modal.componentInstance.video = this.video;
    modal.componentInstance.width = '680';
    modal.componentInstance.height = '560';

  }

}
