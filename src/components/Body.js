import { useState } from "react";
import Shimmer from "./Shimmer";
import usePlayCardDetails from "../utils/usePlayCardDetails";
import SportsCard from "./SportsCard";
import { timeCheck } from "../utils/helper";

const Body = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const cards = usePlayCardDetails();
  console.log(cards);

  const handleSelectCard = card => {
    console.log("check-----", timeCheck(card, selectedCards));
    if (selectedCards.length >= 3) {
      alert("You cannot select more than 3 events");
      return;
    } else if (timeCheck(card, selectedCards)) {
      alert("You cannot participate in more than one event at the same time.");
      return;
    } else {
      setSelectedCards(prev => {
        return [...prev, card];
      });
    }
  };

  const removeCard = id => {
    const dummyState = [...selectedCards];
    let index = dummyState.findIndex(el => el.id === id);
    console.log(index);
    if (index !== -1) {
      dummyState.splice(index, 1);
      setSelectedCards(dummyState);
    }
  };

  return cards?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="wrapper">
        <h2>All Events</h2>
        <div className="cards">
          {cards.map(card => {
            return (
              <SportsCard
                card={card}
                handleSelectCard={handleSelectCard}
                isSelected={selectedCards.findIndex(({ id }) => id === card.id)>-1}
                allEvents
              />
            );
          })}
        </div>
      </div>
      <div className="wrapper">
        <h2>Selected events</h2>
        <div className="cards">
          {!selectedCards.length ? <h3>You have not selected any event yet. Please select some events.</h3>
          : selectedCards.map(card => {
            return (
              <SportsCard
                card={card}
                removeCard={removeCard}
                isSelected={selectedCards.findIndex(({ id }) => id === card.id)>-1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
