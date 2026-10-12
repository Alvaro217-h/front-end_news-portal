import { Component, inject } from '@angular/core';
import { FormBuilder,FormArray,FormGroup, ReactiveFormsModule,Validators, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news';

@Component({
  imports: [RouterModule, ReactiveFormsModule, FormsModule],
  selector: 'app-gestion',
  styleUrl: './gestion.css',
  templateUrl: './gestion.html',
})

export class Gestion {

  private newsService = inject(NewsService);

  get news(){
    return this.newsService.news
  }
  get favNews(){
    return this.newsService.favNews;
  }

  newsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      category:['', Validators.required],
      image:['', Validators.required],
      shortDesc:['', Validators.required],
      fullDesc:['', Validators.required]
    });
  }

  submitForm(){
    if(this.newsForm.valid){
      console.log(this.newsForm.value);
      this.newsService.addNew(this.newsForm.value);
      //localStorage.setItem("dateNews", JSON.stringify(this.newsForm.value));
      this.newsForm.reset();
      console.log(this.news);
    }
  }

  deleteNew(index:number){
    this.newsService.deleteNew(index);
  }

}



