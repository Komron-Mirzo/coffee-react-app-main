import SmallTitle from '../Global/SmallTitle';
import BigTitle from '../Global/BigTitle';
import MenuCard from './MenuCard';

function Menu() {

    return (
        <div className="menu-container" >
            <div className="menu-content">
                <SmallTitle title="CHOOSE BEST COFFEE" fontSz="14px" marginDiv="0px 0px 20px 0px" justifyContent="center" />
                <BigTitle title="Popular Coffee Menu" fontSz="40px" textAlign="center" margin="0px 0px 95px 0px" />
                <MenuCard />
            </div>
        </div>

    );

}

export default Menu;