import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>

            <div className="exp-1">
                <h4>Développeur Fullstack</h4>
                <h6>Virtuality</h6>
                <h5>Août 2021 - Octobre 2021</h5>
                <p>Les stacks techniques utilisées : Javascript et Sass en Front - Symfony en BackEnd - Git / Github pour le travail en équipe<br />

                Mes missions en tant que dev full-stack :
                Chargé de la page de "Réservation" (front/back). - Mise en place d'un CRUD : réservation d'un créneau après la connexion + contrôle/sécurité. - Restriction d'accès au Backoffice. - Envoi de mail de confirmation avec Swiftmailer. - Mise en place d'un formulaire de contact pour les clients. - Template Twig,<br /><br /></p>
            </div>

            <div className="exp-2">
                <h4>Moniteur étudiant à ETN@ - Le mans Université </h4>
                <h6>DSI - Le Mans Université</h6>
                <h5>Septembre 2019 - Août 2020 (10 mois)</h5>
                <p>Soutien informatique et aide à l'utilisation des nouvelles technologies</p>
            </div>
            
        </div>
    );
};

export default Experience;