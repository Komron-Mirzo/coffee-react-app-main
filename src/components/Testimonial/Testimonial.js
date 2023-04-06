import SmallTitle from '../Global/SmallTitle';
import BigTitle from '../Global/BigTitle';
import './Testimonial.css';
import ReviewSlider from './Slider';

function Testimonial() {

    return (
        <div className="testimonial-container">
            <div className="testimonial-content" >
                <SmallTitle title="Customer Feedback" fontSz="14px" justifyContent="center" />
                <BigTitle title="What Our Clients Say" fontSz="40px" margin="0px 0px 57px 0px" textAlign="center" />
                <ReviewSlider />

            </div>

        </div>
    );
}

export default Testimonial;