import React from 'react';
import './carrousel.css';

function Carrousel() {
    // Tableau des images du carrousel
    const images = [
        "./images/generateurcapture.png",
        "./images/capturejeu.png",
        "./images/Projetempyrion.webp"
    ];
    // Tableau des légendes pour chaque image
    const legends = [
        <a href="https://generator-logo-eight.vercel.app/">Generateur de logo</a>,
        <a href="https://jeu-gray.vercel.app/">Projet jeu rome antique</a>,
        <a href="https://github.com/migope62/">Empyrion serveur avec Wordpress</a>
    ];

    return (
        <div className="carousel-container">
            {/* Conteneur pour les images */}
            <div className="carousel-image-container">
                {/* Afficher toutes les images */}
                {images.map((image, index) => (
                    <div key={image} className="carousel-image-content">
                        {/* Conteneur pour une image et sa légende */}
                        <img src={image} alt="slide" className="carousel-image" />
                        <p className="image-legend">
                            {legends[index]}
                        </p>
                    </div>
                ))}
            </div>
            {/* Pas besoin de conteneur pour les indicateurs de position sans le carrousel */}
        </div>
    );
}

export default Carrousel;
