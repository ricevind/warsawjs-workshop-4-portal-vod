import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input()
  private video: Video;

  constructor() { }

  ngOnInit() {
    console.log('VIDEO z Player', this.video);
  }

}
