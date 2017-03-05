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

  @Input()
  private height: string;

  @Input()
  private width: string;

  constructor() { }

  ngOnInit() {
    this.height = this.height || '315';
    this.width = this.width || '420';
  }

}
