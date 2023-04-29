import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$')]],
      confirmarSenha: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$')]]
    }, { validators: passwordMatchValidator });
  }
  
  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      console.log('valid');
      const { usuario, senha } = this.loginForm.value;
      console.log({ usuario, senha });
      localStorage.setItem('usuarioLogado', usuario);
    } else {
      console.log('invalid');
      Object.keys(this.loginForm.controls).forEach(key => {
        const controlErrors = this.loginForm.get(key)?.errors;
        console.log(controlErrors);
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Validation error: ' + key + ', error: ' + keyError + ', value: ' + controlErrors[keyError]);
          });
        }
      });
    }
  }
}
function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('senha');
  const confirmPassword = control.get('confirmarSenha');
  if (password?.value !== confirmPassword?.value) {
    return { 'passwordMismatch': true };
  }
  return null;
}
