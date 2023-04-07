function IconText({ icon, iconText }) {

    const iconTextStyle = {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        color: "#BFBFBF",
    }

    return (
        <div className="icon-text">
            <span>
                {icon}
            </span>
            <h2 style={iconTextStyle}>
                {iconText}
            </h2>
        </div>
    );
}

export default IconText;