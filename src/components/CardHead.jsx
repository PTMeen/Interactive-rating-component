import starIcon from '../assets/images/icon-star.svg';

const CardHead = () => {
  return (
    <div>
      <div className="bg-gray-700/50 p-3 flex justify-center items-center rounded-full w-fit">
        <img src={starIcon} alt="star icon" className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
};
export default CardHead;
