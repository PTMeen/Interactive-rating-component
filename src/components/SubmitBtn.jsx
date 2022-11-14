const SubmitBtn = ({ finishRating }) => {
  return (
    <button
      onClick={finishRating}
      className="bg-orange-500 w-full p-2 rounded-full text-white font-bold text-xl uppercase hover:bg-white duration-300 hover:text-orange-500">
      Submit
    </button>
  );
};
export default SubmitBtn;
