import { useState } from 'react';
import ThankyouCard from './components/ThankyouCard';
import RatingCard from './components/RatingCard';

const App = () => {
  const [score, setScore] = useState(0);
  const [isRating, setIsRating] = useState(true);

  const finishRating = () => {
    if (score === 0) return;
    setIsRating(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] ">
      {isRating ? (
        <RatingCard
          score={score}
          setScore={setScore}
          finishRating={finishRating}
        />
      ) : (
        <ThankyouCard score={score} />
      )}

      <div className="absolute bottom-3">
        Challenge by
        <a
          className="text-orange-600 ml-1"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">PtMeen</a>.
      </div>
    </div>
  );
};
export default App;
