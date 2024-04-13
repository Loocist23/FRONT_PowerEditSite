import React from 'react';
import '../styles/Card.css'; // Assurez-vous de créer ce fichier CSS pour styliser vos cartes

const Card = ({ title, data }) => (
    <div className="card">
        <h2>{title}</h2>
        {Object.entries(data).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
        ))}
    </div>
);

export default Card;