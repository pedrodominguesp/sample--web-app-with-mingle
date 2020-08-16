import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { PoDialogService } from '@po-ui/ng-components';

import { ConfigService } from './config.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  reactiveForm: FormGroup;
  loading: boolean;
  alias: string;
  appId: string;
  environment: string;

  constructor(private formBuilder: FormBuilder, private poDialog: PoDialogService, private router: Router, private configService: ConfigService) {
    this.createReactiveForm();
  }

  ngOnInit(): void {
    this.loading = false;
    this.setInitialValues();
  }

  createReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      environment: ['', Validators.compose([Validators.required])],
      alias: ['', Validators.compose([Validators.required])],
      appId: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  saveForm() {
    this.loading = true;
    let valueForm = this.reactiveForm.value;
    Object.keys(valueForm).map(k => valueForm[k] = valueForm[k].trim());
    this.configService.saveConfig(valueForm.environment, valueForm.alias, valueForm.appId);
    setTimeout(() => {
      this.loading = false;
      this.poDialog.alert({
        title: 'Eba!',
        message: 'Configurações atualizadas com sucesso!',
        ok: () => (this.router.navigate(['/login']))
      });
    }, 500);

  }

  private setInitialValues(): void {
    this.environment = this.configService.getEnvironment();
    this.alias = this.configService.getAlias();
    this.appId = this.configService.getIdApp();
  }
}
