import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../services/news';

@Component({
  imports: [RouterModule],
  selector: 'app-favoritos',
  styleUrl: './favoritos.css',
  templateUrl: './favoritos.html',
})
export class Favoritos {
  private newsService= inject(NewsService);
//obtener las noticias gurdadas en favoritos
  get favNews(){
    return this.newsService.favNews;
  } 
//eliminar noticias favoritas
  deleteFavNews(index: number){
    this.newsService.deleteFavNews(index);
  }

}
