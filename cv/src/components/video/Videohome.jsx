import React, { useRef, useEffect } from 'react';
import './video.css';

const Videohome = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.addEventListener('ended', () => {
            setTimeout(() => {
                video.play();
            }, 100);
        });
        video.playbackRate = 0.5; // ralentit la vidéo
    }, []);

    return (
        <div className="video-container">
            <video ref={videoRef}  loop autoPlay muted>
                <source src="/video/code.mp4" type="video/mp4" />
                Votre navigateur n'est pas compatible.
            </video>
        </div>
    );
};

export default Videohome;

