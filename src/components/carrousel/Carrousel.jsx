import React, { useState, useEffect } from 'react';
import './carrousel.css';

function Carrousel() {
    // Tableau des images du carrousel
    const images = [
        "./images/Projetfin.webp",
        "./images/qcmnombre.webp",
        "./images/quizcouleur.webp",
        "./images/Morpion.webp",
        "./images/Projetempyrion.webp"
    ];
    // Tableau des légendes pour chaque image
    const legends = [
        <a href="https://github.com/migope62/agencedevoyage">Agence de voyage pour l'italie avec React</a>,
        <a href="https://github.com/migope62/QuizNombre">Quizz nombre avec Javascript</a>,
        <a href="https://github.com/migope62/Quiz_couleur">Quizz couleur avec Javascript</a>,
        <a href="https://github.com/migope62/tic-tac-toe">Démineur avec Javascript</a>,
        <a href="https://github.com/migope62/">Empyrion serveur avec Wordpress</a>
    ];
    // État du composant pour la position actuelle de l'image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effet pour changer l'image affichée toutes les 4 secondes
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 4000);
        // Nettoyage de l'effet avant qu'il ne soit exécuté à nouveau
        return () => {
            clearInterval(intervalId);
        };
    },);


    return (
        <div className="carousel-container">
            {/* Conteneur pour les images */}
            <div className="carousel-image-container">
                {
                    // Afficher les 3 images centrales et les entourer des images suivantes et précédentes
                    images
                        .slice(currentImageIndex)
                        .concat(images.slice(0, currentImageIndex))
                        .slice(0, 4)
                        .map((image, index) => (
                            <div key={image}>
                                {/* Conteneur pour une image et sa légende */}
                                <div className="carousel-image-content">
                                    <img src={image} alt="slide" className="carousel-image" />
                                    <p className="image-legend">
                                        {legends[(index + currentImageIndex) % images.length]}
                                    </p>
                                </div>
                            </div>
                        ))
                }
            </div>
            {/* Conteneur pour les indicateurs de position */}
            <div className="carousel-indicator-container">
                {images.map((image, index) => (
                    <div
                        key={image}
                        onClick={() => setCurrentImageIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;
