     // Configuración del Swiper
        const swiper = new Swiper('#testimonios-slider', {
            loop: true, // Habilitar loop infinito
            autoplay: {
                delay: 3000, // Tiempo entre cada slide (3 segundos)
                disableOnInteraction: false, // No detener autoplay al interactuar
            },
            pagination: {
                el: '#testimonios-slider .swiper-pagination',
                clickable: true, // Permitir clic en los puntos de la paginación
            },
        });

 