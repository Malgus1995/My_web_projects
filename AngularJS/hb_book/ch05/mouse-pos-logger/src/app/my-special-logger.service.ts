import { Injectable } from '@angular/core';
import { LogLevel } from './log-level.enum';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class MySpecialLoggerService {

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }
  logLevel: LogLevel;
  logs: string[] = [];
  private readonly MAX_HISTORY_CNT: number = 100;
  private readonly TIME_FORMATTER: string = 'YYYY-MM-DD HH:mm:ss.SSS';
  debug(msg: string) {  this.log(LogLevel.DEBUG, msg); }
  info(msg: string) { this.log(LogLevel.INFO, msg); }
  error(msg: string) { this.log(LogLevel.ERROR, msg); }
  warn(msg: string) { this.log(LogLevel.WARN, msg); }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }
  private keepLogHistory(log: string) {
    if (this.logs.length === this.MAX_HISTORY_CNT) {
      this.logs.shift();
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string ) {
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }

  private isProperLogLevel(logLevel: LogLevel): boolean {
    if (this.logLevel === LogLevel.DEBUG) { return true; }
    return logLevel >= this.logLevel;
  }
}
