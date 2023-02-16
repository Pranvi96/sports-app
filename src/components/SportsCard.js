import { convertTime } from "../utils/helper";

const SportsCard = props => {
  const {
    card,
    isSelected,
    allEvents,
    handleSelectCard,
    removeCard,
  } = props;

  const {id, event_category, event_name, start_time, end_time} = card

  const handleSelectClick = () => {
    handleSelectCard && handleSelectCard(card);
  };

  const handleRemoveClick = () => {
    removeCard && removeCard(id);
  };

  return (
    <div className="play-card">
      <div className="event-type">
        <h1>{event_category[0]}</h1>
      </div>
      <div>
        <h2>{event_name}</h2>
        <h5>{`(${event_category})`}</h5>
        <h5>
          {convertTime(start_time)} PM - {convertTime(end_time)} PM
        </h5>

        {allEvents ? (
          <button
            onClick={handleSelectClick}
            disabled={isSelected}
            className="select-btn"
          >
            Select
          </button>
        ) : (
          <button onClick={handleRemoveClick} className="remove-btn">
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default SportsCard;
