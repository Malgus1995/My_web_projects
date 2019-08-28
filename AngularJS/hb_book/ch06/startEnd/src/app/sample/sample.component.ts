import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <h4>SampleComponent</h4>
  <p>content: {{exContent}}</p>
  `,
})
export class SampleComponent implements OnInit, OnDestroy {
  @Input() exContent: string;

  constructor() {
    alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }

  ngOnInit() {
    alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }

  ngOnDestroy() {
    alert('will be destoryed...');
  }

  private chkExistence(val) {
    return val !== undefined;
  }
}
