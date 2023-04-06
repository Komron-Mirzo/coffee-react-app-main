import './Stats.css';
import StatsCard from './StatsCard';



function Stats() {

    return (
        <div className="stats-container" >
            <div className="stats-content">
                <StatsCard number={256} fontSz={24} color="#fff" title="Premium Clients" content="Sed ut perspiciatis unde" />
                <StatsCard number={362} fontSz={24} color="#fff" title="Expert Members" content="Sed ut perspiciatis unde" />
                <StatsCard number={753} fontSz={24} color="#fff" title="Winning Awards" content="Sed ut perspiciatis unde" />
            </div>


        </div>

    );
}

export default Stats;