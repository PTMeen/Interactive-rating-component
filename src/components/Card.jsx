const RatingCard = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-darkBlue to-veryDarkBlue p-8 rounded-2xl w-[85%] max-w-[350px]">
      {children}
    </div>
  );
};
export default RatingCard;
