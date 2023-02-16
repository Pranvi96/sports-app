export const convertTime = time => {
  const hour = new Date(time).getHours() % 12;
  const min = new Date(time).getMinutes();
  if (min !== 0) return `${hour}:${min}`;
  return hour;
};

export const timeCheck = (card, selectedCards) => {
  let ans = false;
  selectedCards?.map(el => {
    ans =
      ans ||
      ((new Date(el.end_time) > new Date(card.start_time) &&
        new Date(el.start_time) <= new Date(card.start_time)) ||
        (new Date(el.end_time) > new Date(card.end_time) &&
        new Date(el.start_time) < new Date(card.end_time))
        );
  });
  return ans;
};
