import React, { Component } from 'react'

export default class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false };
    }

    jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1;
        if(valeur === this.props.cache)
            this.setState({face:valeur, compteur: this.state.compteur+1, fin:true})
        else
            this.setState({face:valeur, compteur: this.state.compteur+1})
    }

    initialiser() {
        this.setState({ face: null, compteur: 0, fin: false });
    }


    getImage() {
        if(this.state.face === null)
            return require('../images/facevide.jpeg')
        else 
            return require('../images/face'+this.state.face+'.jpeg')
    }

    render() {
        return (
            <div className='jeu'>
                <img src={require('../images/jeude.jpeg')} alt='logo de'/>
                <h1>Jeu de Dé</h1>
                <h2>face: {this.state.face} </h2>
                <img className='imgface' src={this.getImage()} alt='face' />

                <h2>nombre d'essais : {this.state.compteur}</h2>
                {!this.state.fin ? 
                <button onClick={() => this.jouer()}>jouer</button> :
                <div>
                    <p>Bravo vous avez trouvez la face cachée.....</p>
                    <button onClick={() => this.initialiser()}>Initialiser</button>
                </div>
            }   
            </div>
        );
    }


}
