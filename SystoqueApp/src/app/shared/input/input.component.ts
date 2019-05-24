import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  input: any;

  @Input() errorMessage: string;
  @Input() label: string;

  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit () {

    this.input = this.control;

    if (this.input === undefined) { throw new Error('Esse componente precisa ser usado com uma diretiva FormControlName'); }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
