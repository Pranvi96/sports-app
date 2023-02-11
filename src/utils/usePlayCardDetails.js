import { useEffect, useState } from "react";
import { FETCH_PLAY_CARDS } from "../../constants";

const usePlayCardDetails = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAllCards()
    }, [])

    async function getAllCards() {
        const data = await fetch(FETCH_PLAY_CARDS);
        const json = await data.json();
        setCards(json);
    }
    return cards
}

export default usePlayCardDetails