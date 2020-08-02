import React from 'react';
import './Question.scss';

function Question() {
    return(
        <section className = "question">
        <img src = 'https://i.playground.ru/e/k1jAC89bWjiKj38d1xmRpw.jpeg' alt = 'game poster' />
        <div className = 'game-info'>
            <h3 className = 'game-name'>Counter-Strike: Global Offensive</h3>
            <div className = 'player'>
                <div className = 'timeline'>
                    <div className = 'playpause'>
                        <i className = 'fa fa-play play-indicator' aria-hidden = 'true'></i>
                    </div>
                    <span className = 'time time-start'>00:00</span>
                    <input className = 'progress-bar' type = 'range' min = '0' max = '' step = '0.1' />
                    <span className = 'time time-end'>01:20</span>
                </div>
                <div className = 'volume'>
                    <i className = 'fa fa-volume-up volume-indicator fa-2x' aria-hidden = 'falsetrue'></i>
                    <input className = 'volume-level' type = 'range' min = '0' max = '1' step = '0.01' />
                </div>
            </div>
        </div>
    </section>
    );
}

export default Question;