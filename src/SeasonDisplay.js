import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ){
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }

};

const SeasonDisplay =(props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(props.lat);
    console.log(season);
    const text = season === 'Winter' ? 'Burr, it is chilly' : 'lets hit the beach';
    const icon = season === 'Winter' ? 'Snowflake' : 'Sun';

    return <div>
               < i className={`${icon} icon`} />
               <h1>It's {season}, {text}</h1> 
               < i className={`${icon} icon`} />
           </div>
};

export default SeasonDisplay;