import React, { useRef, useEffect } from 'react';
import './video.css';

const Videocontact = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.addEventListener('ended', () => {
            setTimeout(() => {
                video.play();
            }, 100);
        });
        video.playbackRate = 0.5; // ralentit la vidéo

        // Vérifier si l'utilisateur est sur un appareil mobile
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /iphone|ipod|ipad|android/.test(userAgent);

        // Si l'utilisateur est sur un appareil mobile, désactiver la lecture automatique
        if (isMobile) {
            video.setAttribute('playsInline', 'true');
            video.removeAttribute('autoPlay');
        }
    }, []);

    return (
        <div className="video-container">
            <video ref={videoRef} loop autoPlay muted>
                <source src="/video/humain.mp4" type="video/mp4" />
                Votre navigateur n'est pas compatible.
            </video>
        </div>
    );
};

export default Videocontact;
