import '../About/About.css';

//Catalog Card Component

function Catalog({ backImg, icon, title }) {

    const catalogStyle = {
        width: "350px",
        height: "255px",
        background: `url(${backImg})`,
        backgroundSize: "cover",
        borderRadius: "4px",
    }

    const titleStyle = {
        color: "#fff",
        fontSize: "24px",
        marginRight: "auto",
        marginLeft: "auto",
        fontFamily: "Open Sans",
        lineHeight: "50px",
        fontWeight: "200",
    }

    return (

        <div style={catalogStyle} className="catalog-card">
            <div className="catalog-overlay">
                <div className='icon-class'>{icon} </div>
                <div style={titleStyle}>{title} </div>
            </div>
        </div>

    );

}

export default Catalog;