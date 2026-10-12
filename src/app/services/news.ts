import { Injectable } from '@angular/core';

interface News {
  id: number;
  title: string,
  category: string,
  image: string,
  shortDesc: string,
  fullDesc: string
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  //arreglo global de noticias
  news: News[]=[
    {
        id: 1,
        title: "Rutas Turísticas Sostenibles",
        category: "Turismo",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Descubre los mejores destinos ecológicos para visitar este año.",
        fullDesc: "El turismo ecológico crece a pasos agigantados. Conoce las opciones que reducen la huella de carbono..."
    },
    {
        id: 2,
        title: "El Auge del Comercio Electrónico y Retail Digital",
        category: "Comercio",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Cómo las plataformas digitales y los pagos electrónicos están transformando las ventas globales.",
        fullDesc: "El comercio electrónico continúa expandiéndose a un ritmo acelerado. Las empresas de retail y los pequeños negocios deben adaptarse a las nuevas tendencias de consumo digital, pasarelas de pago y logística avanzada para competir con éxito en el mercado actual..."
    },
    {
        id: 3,
        title: "El Auge del Desarrollo Web Moderno",
        category: "Tecnología",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Frameworks modernos y buenas prácticas para construir aplicaciones web escalables.",
        fullDesc: "El ecosistema de desarrollo frontend evoluciona constantemente. Las arquitecturas basadas en componentes y la gestión global de estados permiten crear experiencias de usuario más rápidas, seguras y adaptadas a cualquier dispositivo moderno..."
    }
  ];

  //arreglo global noticias favoritas
  favNews: News[]=[];

// --- MÉTODOS (Gestión de noticias generales) ---
  // Método para agregar noticias gestion
  addNew(newNews: any) {
    const itemConId = {
      id: this.news.length + 1,
      ...newNews
    };
    this.news.push(itemConId);
  }

  // Método para eliminar noticias gestion
  deleteNew(index: number) {
    this.news.splice(index, 1);
  }

  // --- MÉTODOS (Gestión de Favoritos) ---

  // metodo para verificar noticias repetidas y crear una nueva noticia
  addFavNews(fav: News){
    //verificar si la noticia ya exite en favoritos
    const exits = this.favNews.some(item => item.id === fav.id);
    if (!exits) {
      this.favNews.push(fav);
      console.log(this.favNews);
    }
  }
//eliminar noticias en favoritos
  deleteFavNews(index: number){
    this.favNews.splice(index, 1);
  }
}
