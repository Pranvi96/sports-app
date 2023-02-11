const Shimmer = () => {
  return (
    <div className="container">
      {/* {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))} */}
      <div className="shimmer-wrapper">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
      <div className="shimmer-wrapper">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
