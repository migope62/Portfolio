import React, { useState } from 'react';
import './first.css';

function First() {
    // Créer un tableau avec les textes à afficher derrière les cartes
    const texts = ['React js', 'Node js', 'Mongodb', 'Git hub', 'Wordpress', 'Bootstrap', 'Trello', 'Figma'];

    // Définir l'état initial des cartes
    const [cards, setCards] = useState([
        { id: 1, isFlipped: false },
        { id: 2, isFlipped: false },
        { id: 3, isFlipped: false },
        { id: 4, isFlipped: false },
        { id: 5, isFlipped: false },
        { id: 6, isFlipped: false },
        { id: 7, isFlipped: false },
        { id: 8, isFlipped: false },
    ]);

    // Fonction pour gérer le clic sur une carte
    const handleCardClick = (id) => {
        // Copier le tableau de cartes
        let newCards = [...cards];

        // Trouver la carte correspondant à l'id cliqué
        let clickedCard = newCards.find((card) => card.id === id);

        // Retourner la carte en changeant la valeur de isFlipped
        clickedCard.isFlipped = true;

        // Mettre à jour l'état des cartes avec le nouveau tableau
        setCards(newCards);
    };

    return (
        <>
            <h1 className='textcard'>Curieux ? Cliquez pour découvrir ce qui se cache derrière ce dos de carte.</h1>
            <div className="cards-container">
                <div className="cards">
                    {/* Parcourir chaque carte du tableau et afficher une carte pour chaque */}
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`card ${card.isFlipped ? 'flipped' : ''}`}
                            onClick={() => handleCardClick(card.id)}
                        >
                            {/* Afficher le point d'interrogation ou le texte selon l'état de la carte */}
                            <div className="front">{!card.isFlipped ? '?' : ''}</div>
                            <div className="back">{texts[card.id - 1]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default First;
