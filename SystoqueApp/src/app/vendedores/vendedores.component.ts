import { Component, OnInit } from '@angular/core';
import { Vendedor } from './vendedor/vendedor.model';
import { VendedoresService } from './vendedores.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html'
})
export class VendedoresComponent implements OnInit {

  vendedoresForm: FormGroup;
  vendedor: Vendedor;
  errorMessage: string;

  constructor(private vendedorService: VendedoresService, private fb: FormBuilder, private router: Router, private alert: AlertService) { }

  vendedores: Vendedor[];
  ngOnInit() {
    this.vendedoresForm = this.fb.group({
      Nome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      DataNasc: this.fb.control('', [Validators.required]),
      comissao: this.fb.control('', [Validators.required, Validators.min(0), Validators.max(1)])
    });
  }

  save() {
    console.log(this.vendedoresForm);
    console.log('Salvo: ' + JSON.stringify(this.vendedoresForm.value));
  }

  create(vend: Vendedor) {
    this.vendedorService.createVendedor(vend)
      .subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error);
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.vendedoresForm.reset();
    this.alert.Success('Vendedor Registrado com Sucesso');
    this.router.navigate(['/vendedores']);
  }

}
