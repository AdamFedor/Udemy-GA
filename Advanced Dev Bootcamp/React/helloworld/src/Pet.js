import React, {Component} from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component {
    render() {
        const liStyle = { fontSize: '1.5em' };
        return (
            <div className="card">
                <h2 className="name">Moxie</h2>
                <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
                    alt="moxie the cat" />
                <h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies:</h5>
                <ul>
                </ul>
                <HobbyList />
            </div>
        )
    }
}

export default Pet;