import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../services/news';

@Component({
  imports: [RouterModule],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
    private newsService = inject(NewsService);
  //obtener noticias
  get favNews(){
    return this.newsService.favNews;
  }
}
