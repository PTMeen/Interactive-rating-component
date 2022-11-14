const RatingBtn = ({ btnValue, children, score, onClick }) => {
  let btnStyle = 'bg-gray-700/50';
  if (btnValue === score) {
    btnStyle = 'bg-orange-500 text-white';
  }
  if (score - btnValue === 1) {
    btnStyle = 'bg-gray-500 text-white';
  }

  return (
    <button
      onClick={() => onClick(btnValue)}
      className={`${btnStyle}  font-bold text-xl w-[45px] h-[45px] rounded-full flex justify-center items-center p-2 hover:bg-orange-500 hover:text-white duration-300`}>
      {btnValue}
    </button>
  );
};
export default RatingBtn;
