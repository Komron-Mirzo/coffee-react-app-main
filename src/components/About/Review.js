function ReviewCard({ img, text }) {

    return (

        <div className="review-container">
            <span className="review-img">
                <img src={img} alt="review-pic" />
            </span>
            <span className="review-text">
                {text}
            </span>

        </div>
    );
}

export default ReviewCard;