import ParagraphText from "../Global/ParagraphText";
import CountUp from 'react-countup';


function StatsCard({ number, fontSz, color, margin, title, content }) {

    const statsStyle = {
        fontSize: fontSz,
        fontWeight: 400,
        fontFamily: 'Open Sans',
        color: color,
        margin: margin,
    }

    return (
        <div className="stats-card">
            <div className="counter">
                <h1 className="stats-animated-number">
                    <CountUp
                        start={0}
                        end={number}
                        duration={2}
                        scrollSpyDelay={0}
                        enableScrollSpy={true}

                    >
                    </CountUp>+</h1>
            </div>
            <div className="stats-text" >
                <span style={statsStyle}>{title}</span>
                <span><ParagraphText text={content} /></span>
            </div>


        </div>
    );

}

export default StatsCard;