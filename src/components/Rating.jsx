import { useState } from 'react';
import RatingBtn from './RatingBtn';

const Rating = ({ score, onScoreChange }) => {
  return (
    <div className="flex justify-between my-8" items-center>
      <RatingBtn score={score} btnValue={1} onClick={onScoreChange} />
      <RatingBtn score={score} btnValue={2} onClick={onScoreChange} />
      <RatingBtn score={score} btnValue={3} onClick={onScoreChange} />
      <RatingBtn score={score} btnValue={4} onClick={onScoreChange} />
      <RatingBtn score={score} btnValue={5} onClick={onScoreChange} />
    </div>
  );
};
export default Rating;
