import Catalog from "./Catalog";
import coffeeMenuImg from '../About/coffee-menu.jpg';
import restaurantMenuImg from '../About/restaurant-menu.jpg';
import foodMenuImg from '../About/food-menu.jpg';
import '../About/About.css';
import SmallTitle from '../Global/SmallTitle';
import BigTitle from '../Global/BigTitle';
import neverCof from '../About/never-cof.png';
import ParagraphText from "../Global/ParagraphText";
import Review from '../About/Review';
import boy from '../About/boy.jpg';
import girl from '../About/girl.jpg';

// SVG Asset with props 
const FoodMenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.class} fill={props.fill} width={props.width} height={props.height} >
        <path d="M51.01 25.412h-3.1c0-1.722.138-7.024.826-15.288.69-8.057 2.135-8.953 2.824-8.953.689 0 .964.758.964 1.102v43.661c0 .413-.414.826-1.033.826-.55 0-1.033-.413-1.033-.826l.55-20.522Zm-1.722 20.522c0 1.102 1.033 2.066 2.204 2.066 1.24 0 2.204-.965 2.273-1.998V2.342c0-.965-.758-2.342-2.135-2.342h-.138c-2.135 0-3.374 3.099-3.925 10.055-.276 2.548-1.102 15.013-.758 16.114.07.345.414.482.689.482h2.272l-.482 19.283ZM23.712 1.848c0-.275.207-.413.482-.413.276 0 .483.276.551.413v8.54c0 .963.758 1.652 1.722 1.652.895 0 1.722-.757 1.722-1.652v-8.54c0-.551 1.032-.551 1.032 0v8.54c0 .963.758 1.652 1.722 1.652.895 0 1.721-.757 1.721-1.652v-8.54c0-.275.208-.413.483-.413.276 0 .482.275.482.413v11.845c0 2.066-1.653 3.926-3.787 4.407l-.482.069.275 27.546c0 .413-.413.758-.964.758-.551 0-.964-.344-.964-.826l.275-27.478-.482-.069c-2.135-.481-3.788-2.34-3.788-4.407V1.848Zm2.824 43.799c0 1.17.895 2.066 2.135 2.066 1.17 0 2.134-.826 2.135-1.998l-.275-26.582c2.48-.757 4.27-2.96 4.27-5.44V1.848c0-.895-.827-1.653-1.722-1.653-.964 0-1.722.758-1.722 1.653v8.54c0 .137-.207.413-.482.413-.207 0-.482-.138-.482-.413v-8.54c0-.964-.758-1.653-1.722-1.653S26.95.953 26.95 1.848v8.54c0 .137-.207.413-.483.413-.207 0-.482-.138-.482-.413v-8.54c0-.895-.826-1.653-1.722-1.653-.964 0-1.721.758-1.721 1.653v11.845c0 2.48 1.79 4.683 4.27 5.44l-.276 26.514ZM7.024 1.435c-3.512 0-5.853 5.51-5.853 9.228.137 4.132 1.653 6.611 4.82 7.506l.413.138-.206 27.477c0 .413.482.758.964.758s.964-.345.964-.758L7.85 18.307l.482-.138c3.168-.758 4.752-3.237 4.752-7.506-.07-3.719-2.549-9.228-6.06-9.228Zm.07 46.278c-1.172 0-2.136-.896-2.136-1.997l.276-26.582C2.754 18.376.207 16.24 0 10.732 0 6.532 2.686.264 7.024.264c4.339 0 7.231 6.267 7.231 10.399 0 5.647-2.754 7.782-5.234 8.54l.276 26.513c0 1.101-1.033 1.996-2.204 1.996ZM9.778 8.872c.069.344.345.55.62.55.344-.068.619-.344.55-.688-.275-2.203-1.239-3.994-2.754-4.82-.275-.207-.688-.07-.826.206-.207.275-.069.688.206.826 1.171.62 1.998 2.066 2.204 3.926Z" clip-rule="evenodd" />
    </svg>
)

const RestaurantMenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.class} fill={props.fill} width={props.width} height={props.height} >
        <path d="M32.297 7.638V4.575a4.742 4.742 0 0 0-9.48 0v3.043A27.535 27.535 0 0 0 .002 34.708v1.366a.867.867 0 0 0 .867.866h53.264a.867.867 0 0 0 .867-.866v-1.366a27.538 27.538 0 0 0-22.702-27.07ZM24.55 4.575a3.012 3.012 0 0 1 6.015 0v2.81a27.05 27.05 0 0 0-6.015-.014V4.575Zm28.717 30.632H1.735v-.499A25.77 25.77 0 0 1 27.502 8.942a25.77 25.77 0 0 1 25.767 25.766l-.002.5Zm.864 6.527H.867a.866.866 0 1 0 0 1.733h53.265a.867.867 0 0 0 0-1.733ZM32.78 17.426c0-.478.388-.866.866-.866a10.942 10.942 0 0 1 10.926 10.925.866.866 0 0 1-1.733 0 9.206 9.206 0 0 0-9.193-9.192.867.867 0 0 1-.866-.867Z" clip-rule="evenodd" />
    </svg>
)

const CoffeeMenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.class} fill={props.fill} width={props.width} height={props.height} >
        <path d="m18.77 14.14 1.321 1.322a5.93 5.93 0 0 0 0-8.39 4.072 4.072 0 0 1 0-5.75L18.77 0a5.94 5.94 0 0 0 0 8.39 4.072 4.072 0 0 1 0 5.75Zm-2.387 32.699H34.68c4.373 0 8.1-2.797 9.494-6.693h3.271A4.56 4.56 0 0 0 52 35.59v-7.24a4.56 4.56 0 0 0-4.556-4.556h-2.686v-6.3H6.304V36.76c0 5.556 4.523 10.08 10.08 10.08Zm28.375-21.175v11.095c0 .516-.038 1.022-.113 1.517h2.8a2.69 2.69 0 0 0 2.685-2.685v-7.242a2.69 2.69 0 0 0-2.686-2.685h-2.686ZM8.173 36.758v-17.4H42.89v17.4c0 4.524-3.681 8.21-8.21 8.21H16.383c-4.524 0-8.21-3.68-8.21-8.21ZM0 50.794h51.067v1.87H0v-1.87Zm25.953-35.332L24.63 14.14a4.04 4.04 0 0 0 1.19-2.875 4.04 4.04 0 0 0-1.19-2.876 5.94 5.94 0 0 1 0-8.389l1.322 1.322a4.072 4.072 0 0 0 0 5.75 5.895 5.895 0 0 1 1.738 4.198 5.89 5.89 0 0 1-1.738 4.192Zm4.534-1.322 1.322 1.322a5.94 5.94 0 0 0 0-8.39 4.072 4.072 0 0 1 0-5.75L30.487 0a5.94 5.94 0 0 0 0 8.39 4.072 4.072 0 0 1 0 5.75Z" clip-rule="evenodd" />
    </svg>
)


function About() {

    return (

        <div id="about">
            <div id="about-container" >
                <div className="catalog-menu" >
                    <Catalog title="Coffee Menu" backImg={coffeeMenuImg} icon={<CoffeeMenuIcon width="52px" height="52px" fill="#fff" />} />
                    <Catalog title="Restaurant Menu" backImg={restaurantMenuImg} icon={<RestaurantMenuIcon width="52px" height="52px" fill="#fff" />} />
                    <Catalog title="Food Menu" backImg={foodMenuImg} icon={<FoodMenuIcon width="52px" height="52px" fill="#fff" />} />
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <SmallTitle title="About Us" fontSz="14px" />
                        <BigTitle title="Organic & Fresh Coffee
Provider Center" fontSz="40px" margin="0px 0px 20px 0px" />
                        <ParagraphText margin="0px 0px 30px 0px" text="Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione" />
                        <div className="review-card" >
                            <span className="review-left">
                                <Review img={boy} text="Quis autem vel eum iure
reprehenderit in ealuptate velit esse molestiae"/>
                            </span>
                            <span className="review-right">
                                <Review img={girl} text="Sed ut perspiciatis unde omnis iste natus error voluptate accusantium. " />
                            </span>
                        </div>
                    </div>
                    <div className="about-image" >
                        <img src={neverCof} alt="coffee-pic" width="450px" />
                    </div>
                </div>


            </div>

        </div>

    );

}

export default About;