// Arreglo de noticias (JSON)
const noticias = [
    {
        id: 1,
        title: "Rutas Turísticas Sostenibles",
        category: "Turismo",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Descubre los mejores destinos ecológicos para visitar este año.",
        fullDesc: "El turismo ecológico crece a pasos agigantados. Conoce las opciones que reducen la huella de carbono..."
    }
];


function crearCards(listaNoticias) {
    const contenedor = document.getElementById('news-container');
    if (!contenedor) return;

    // Generamos el HTML de cada tarjeta recorriendo el JSON
    contenedor.innerHTML = listaNoticias.map(noticia => `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
                <!-- Imagen -->
                <img src="${noticia.image}" class="card-img-top" alt="${noticia.title}" style="height: 200px; object-fit: cover;">
                
                <!-- Cuerpo de la tarjeta -->
                <div class="card-body d-flex flex-column">
                    <span class="badge bg-primary mb-2 align-self-start">${noticia.category}</span>
                    <h5 class="card-title fw-bold">${noticia.title}</h5>
                    <p class="card-text text-muted flex-grow-1">${noticia.shortDesc}</p>
                    
                    <!-- Botón pasando el ID de la noticia -->
                        <button class="btn btn-outline-primary" 
                                data-bs-toggle="modal" 
                                data-bs-target="#modalNoticia"
                                onclick="cargarModal(${noticia.id})">
                            Leer más
                        </button>
                </div>
            </div>
        </div>
    `).join('');
}
//Mostar la noticia con descripcion completa
function cargarModal(id) {
    // 1. Buscar la noticia seleccionada
    const noticia = noticias.find(n => n.id === id);
    if (!noticia) return;

    //Generar los datos en el Modal HTML
    document.getElementById('modal-title').textContent = noticia.title;
    document.getElementById('modal-category').textContent = noticia.category;
    document.getElementById('modal-image').src = noticia.image;
    document.getElementById('modal-desc').textContent = noticia.fullDesc;

}

// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    crearCards(noticias);
});