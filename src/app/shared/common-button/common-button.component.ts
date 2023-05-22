import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'py-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent implements OnInit {

  @Output() cancelEmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.cancelEmit.emit(false)
  }
}
