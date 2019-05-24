import { Component, OnInit, Input } from '@angular/core';
import { Vendedor } from './vendedor.model';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html'
})
export class VendedorComponent implements OnInit {

  @Input() vendedor: Vendedor;

  constructor() { }

  ngOnInit() {
  }

}
