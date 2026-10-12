import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../services/news';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  imports: [RouterModule, ReactiveFormsModule],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  private newsService = inject(NewsService);
  //obtener noticias
  get favNews() {
    return this.newsService.favNews;
  }


  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  mensajeEnviado = signal(false);

  submitContactForm() {
    if (this.contactForm.valid) {
      //console.log('Datos del formulario:', this.contactForm.value);
      this.mensajeEnviado.set(true);
      this.contactForm.reset();

      // Ocultar la alerta automáticamente después de 4 segundos
      setTimeout(() => {
        this.mensajeEnviado.set(false);
      }, 2000);

    } else {
      this.contactForm.markAllAsTouched(); // Muestra errores si los hay
    }
  }

}
