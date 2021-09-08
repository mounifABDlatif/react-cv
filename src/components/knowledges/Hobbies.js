import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-dumbbell"></i>
                    <span>Calisthénie</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hand-holding-heart"></i>
                    <span>Bénévolat</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-camera"></i>
                    <span>Photo</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;