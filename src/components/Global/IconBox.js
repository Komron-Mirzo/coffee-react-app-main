import ParagraphText from "./ParagraphText";
import '../Global/Global.css';

function IconBox({ icon, title, content, fontSz, color, margin }) {



    const titleStyle = {
        fontSize: fontSz,
        fontWeight: 400,
        fontFamily: 'Open Sans',
        color: color,
        margin: margin,
    }

    return (
        <div className="icon-box">
            <div className="icon-box-icon">
                {icon}
            </div>
            <div className="icon-box-content" >
                <span style={titleStyle}>{title}</span>
                <span><ParagraphText text={content} /></span>
            </div>


        </div>

    );


}

export default IconBox;