export const convertTime = time => {
  const hour = new Date(time).getHours()%12;
  const min = new Date(time).getMinutes();
  if(min!==0)
    return `${hour}:${min}`;
  return hour;
};

export const timeCheck = (card, selectedCards) => {
  // selectedCards.map(el => {
  //   const elStart = convertTime(el.start_time);
  //   const elEnd = convertTime(el.end_time);
  //   const start = convertTime(card.start_time);
  //   const end = convertTime(card.end_time);
  //   console.log(start, end, elStart, elEnd);
  //   console.log(start >= elStart, start < elEnd , end > elStart, end <= elEnd)
  //   if (start >= elStart && start < elEnd && end > elStart && end <= elEnd) {
  //       console.log('working')
  //       return true
  //   }
  // });
  // return false;
  return (
    selectedCards.length > 0 &&
    selectedCards?.every(el => {
      console.log(el);
      console.log(card);
      return (
        new Date(el.end_time) >= new Date(card.end_time) &&
        new Date(el.start_time) <= new Date(card.start_time)
      );
    })
  );
};
// el: 5-6
// card: 1-2