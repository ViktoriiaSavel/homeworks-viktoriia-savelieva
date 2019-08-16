import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock-component',
  template: `
  `
})

export class ClockComponent {

  @Output()
  public clockObserver = new EventEmitter<Date>();

  constructor() {
    setInterval(() => {
      this.clockObserver.emit(new Date);
    },1000)
  }
}