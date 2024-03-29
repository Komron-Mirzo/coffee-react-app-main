import './Table.css';
import SmallTitle from '../Global/SmallTitle';
import BigTitle from '../Global/BigTitle';
import Button from '../Global/Button';


function Table() {

    return (
        <div className="table-container" >
            <div className="table-content">
                <SmallTitle title="BOOKING TABLE FOR YOUR & FAMILY MEMBERS" fontSz="14px" justifyContent="center" marginDiv="0 0 15px 0" />
                <BigTitle title="Need a Table On Coffee House" fontSz="40px" margin="0px 0px 20px 0px" textAlign="center" />
                <Button buttonTitle="Booking Table" padding="15px 47px" border="solid 1px #fff" fontSz={16} margin="auto" />

            </div>
        </div>

    );
}

export default Table;