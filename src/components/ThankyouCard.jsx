import Card from '../components/Card';
import thankyouImg from '../assets/images/illustration-thank-you.svg';

const ThankyouCard = ({ score }) => {
  return (
    <Card>
      <div className="text-center my-4">
        <div>
          <img className="mx-auto" src={thankyouImg} alt="thank you" />
        </div>
        <div className="text-center my-8">
          <span className="text-orange-500 bg-gray-700/50 py-1 px-3 m-auto rounded-full">
            You select {score} out of 5
          </span>
        </div>
        <h1 className="text-white font-bold text-3xl mb-4">Thank you!</h1>
        <div>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </Card>
  );
};
export default ThankyouCard;
