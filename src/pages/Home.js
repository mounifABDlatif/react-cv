import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Mounif Abdoulatif</h1>
                    <h2>Développeur Font-end et Back-end</h2>
                    <div className="pdf">
                        <a href="./media/CV_Mounif_ABDOULATIF.pdf">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;