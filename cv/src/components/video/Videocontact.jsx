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
        video.playbackRate = 1.1; // ralentit la vidéo
    }, []);

    return (
        <div className="video-container">
            <video ref={videoRef}  loop autoPlay muted>
                <source src="/video/humain.mp4" type="video/mp4" />
                Votre navigateur n'est pas compatible.
            </video>
        </div>
    );
};

export default Videocontact;
