import { Component } from '@angular/core';
import { MySpecialLoggerService} from './my-special-logger.service';
import {LogLevel } from './log-level.enum';
@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mouse-pos-logger';
  logger: MySpecialLoggerService;
  constructor(){
    this.logger = new MySpecialLoggerService(LogLevel.INFO);
    this.testLoggerLevel();
  }
  testLoggerLevel() {
    console.log('test');
    this.logger.info('test logging in info');
  }

}
