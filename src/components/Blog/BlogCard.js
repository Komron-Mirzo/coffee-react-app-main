import IconText from "./IconText";

function BlogCard({ background, mainText, iconCalendar, textCalendar, iconComment, textComment }) {


    return (
        <div className="blog-card" style={{
            backgroundImage: `linear-gradient(#00000031, #00000031), url(${background})`,
            backgroundOverlay: `#000`,
            backgroundSize: `cover`,
        }}>
            <h2>{mainText}</h2>
            <div className="blog-meta">
                <span><IconText icon={iconCalendar} iconText={textCalendar} /></span>
                <span><IconText icon={iconComment} iconText={textComment} /></span>

            </div>
        </div >
    );
}

export default BlogCard;