import Card from './Card';
import CardContent from './CardContent';
import Rating from './Rating';
import SubmitBtn from './SubmitBtn';
import CardHead from './CardHead';

const RatingCard = ({ score, setScore, finishRating }) => {
  return (
    <Card>
      <CardHead />
      <CardContent />
      <Rating score={score} onScoreChange={(value) => setScore(value)} />
      <SubmitBtn finishRating={finishRating} />
    </Card>
  );
};
export default RatingCard;
