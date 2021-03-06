import {Component, OnInit, Input} from '@angular/core';
import {LogLevel} from "../log-level.enum";
import {MySpecialLoggerService} from "../my-special-logger.service";

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {
  @Input() private logger: MySpecialLoggerService;

  constructor() { }
  captureMousePos($event:MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);

  }
  ngOnInit() {
  }

}
