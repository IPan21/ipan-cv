import javascript from '../../../../../assets/memoryGameImages/cards-img-js.png';
import css from '../../../../../assets/memoryGameImages/cards-img-css.png';
import html from '../../../../../assets/memoryGameImages/cards-img-html.png';
import mobx from '../../../../../assets/memoryGameImages/cards-img-mobx.png';
import mongodb from '../../../../../assets/memoryGameImages/cards-img-mongodb.png';
import nodejs from '../../../../../assets/memoryGameImages/cards-img-nodejs.png';
import git from '../../../../../assets/memoryGameImages/cards-img-git.png';
import postgres from '../../../../../assets/memoryGameImages/cards-img-postgres.png';
import react from '../../../../../assets/memoryGameImages/cards-img-react.png';
import python from '../../../../../assets/memoryGameImages/cards-img-python.png';
import backImg from '../../../../../assets/memoryGameImages/card-img-hidden.jpg';
import _ from 'lodash';

export function createCardsObject(){
    const cardsImages = { javascript, css, git, html, mobx, mongodb, nodejs, postgres, react, python };
    const cards = [];
    let id = 1;
    _.map(cardsImages, (value, key) => {
        const card = () => { return { id: id++, type: key, backImg,frontImg: value, isOpen: true, isCompleted: false }; };
        cards.push(card());
        cards.push(card()); 
    });
    const shuffledCardsArray = cards.sort(() => Math.random() - 0.5);
    return shuffledCardsArray;
}