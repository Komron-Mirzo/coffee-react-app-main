import '../Menu/Menu.css';
import CoffeeList from "./CoffeeList";
import BigTitle from '../Global/BigTitle';
import ParagraphText from '../Global/ParagraphText';


function MenuCard() {
    return (

        <div className="menu-card-parent">
            {
                CoffeeList.map((item, index) => {
                    return (
                        <div className="menu-card" key={index}>
                            <div className="menu-card-img">
                                < img src={item.img} width="160px" height="160px" />

                            </div>
                            <div className="menu-card-content" >
                                <div>
                                    <BigTitle title={item.title} fontSz="25px" />
                                </div>
                                <div>
                                    <ParagraphText text={item.ingredient} />
                                </div>
                                <div className='price-parent'>
                                    <span><hr className='price-line' /></span> <span className='price-number'> {item.price}</span>
                                </div>
                            </div>
                        </div>)
                })
            }
        </div>





    );
}

export default MenuCard;