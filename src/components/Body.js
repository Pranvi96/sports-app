import { useState } from "react";
import Shimmer from "./Shimmer";
import usePlayCardDetails from "../utils/usePlayCardDetails";
import SportsCard from "./SportsCard";
import { timeCheck } from "../utils/helper";
import {
  ALL_EVENTS,
  MAX_EVENTS_SELECTED,
  MAX_NO_OF_EVENTS_TO_PARTICIPATE,
  NO_EVENT_SELECTED,
  SELECTED_EVENTS,
  TIMED_EVENTS_SELECTED,
} from "../../constants";

const Body = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const cards = usePlayCardDetails();

  const handleSelectCard = card => {
    if (selectedCards.length >= MAX_NO_OF_EVENTS_TO_PARTICIPATE) {
      alert(MAX_EVENTS_SELECTED);
      return;
    } else if (timeCheck(card, selectedCards)) {
      alert(TIMED_EVENTS_SELECTED);
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
        <h1>{ALL_EVENTS}</h1>
        <div className="cards">
          {cards.map(card => {
            return (
              <SportsCard
                card={card}
                handleSelectCard={handleSelectCard}
                isSelected={
                  selectedCards.findIndex(({ id }) => id === card.id) > -1
                }
                allEvents
              />
            );
          })}
        </div>
      </div>
      <div className="wrapper">
        <h1>{SELECTED_EVENTS}</h1>
        <div className="cards">
          {!selectedCards.length ? (
            <h2>{NO_EVENT_SELECTED}</h2>
          ) : (
            selectedCards.map(card => {
              return (
                <SportsCard
                  card={card}
                  removeCard={removeCard}
                  isSelected={
                    selectedCards.findIndex(({ id }) => id === card.id) > -1
                  }
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
