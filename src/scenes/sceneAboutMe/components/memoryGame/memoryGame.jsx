import React, { useEffect, useState } from "react";
import { createCardsObject } from './components/createCardsObject';
import { Card } from './components/card';
import { Root } from './components/root';

export function MemoryGame() {
    const [cards, setCards] = useState(createCardsObject());
    const [cardsToCheck, setCardsToCheck] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const newCards = cards.map(card => ({ 
            ...card, isOpen: cardsToCheck.find(c => c.id === card.id) || completed.includes(card.type) 
        }));
        setCards(newCards);
      }, [cardsToCheck, completed]) // eslint-disable-line react-hooks/exhaustive-deps

    const onClick = card => {
        if (cardsToCheck.length === 2 || (cardsToCheck.length === 1 && cardsToCheck[0].id === card.id)) {
            return;
        };
        const newCardsToCheck = [...cardsToCheck, card];
        setCardsToCheck(newCardsToCheck);
        const cardsMatched = newCardsToCheck.length === 2 && newCardsToCheck[0].type === newCardsToCheck[1].type;
        if (cardsMatched) {
          setCompleted([...completed, newCardsToCheck[0].type]);
        };
        if (newCardsToCheck.length === 2) {
            setTimeout(() => { setCardsToCheck([]) }, 1000);
        };
      }
    
    return <Root>{cards.map(card => (<Card src={card.isOpen ? card.frontImg : card.backImg} alt="" onClick={() => onClick(card)} key={card.id}/>))}</Root>
}

