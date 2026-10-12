import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../services/news';

@Component({
  imports: [RouterModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  private newsService = inject(NewsService);
  //obtener noticias
  get news() {
    return this.newsService.news
  }

  get favNews(){
    return this.newsService.favNews;
  }
  //
  selectNews: any = null;
  
  //Método para abrir el modal asignando la noticia
  openModal(item: any) {
    this.selectNews = item;
    console.log('noticai selecionada', this.selectNews);
  }
  //Método para cerrar el modal limpiando la variable
  closeModal() {
    this.selectNews = null;
  }
//metodo para agregar noticias a favoritos
  selectFavNews(favNews:any){
    this.newsService.addFavNews(favNews);
    this.closeModal();
  }

}
