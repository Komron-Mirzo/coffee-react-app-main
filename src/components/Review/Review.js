import SmallTitle from '../Global/SmallTitle';
import BigTitle from '../Global/BigTitle';
import '../Review/Review.css';
import ReviewSlider from '../Review/Slider';

function Review() {

    return (
        <div className="review-container">
            <div className="review-content" >
                <SmallTitle title="Customer Feedback" fontSz="14px" justifyContent="center" />
                <BigTitle title="What Our Clients Say" fontSz="40px" margin="0px 0px 57px 0px" textAlign="center" />
                <ReviewSlider />

            </div>

        </div>
    );
}

export default Review;