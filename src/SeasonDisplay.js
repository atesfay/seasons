import React from 'react';

const seasonConfig = {
    Summer: {
        text: "It's Summer, Let's hit the beach!",
        iconName: 'sun'
    },
    Winter:{
        text: "It's Winter, it's soo cold!",
        iconName: 'snowflake'
    }
} ;

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

    const {text, iconName} = seasonConfig[season] // {text, iconName}

    return <div>
               < i className={`${iconName} icon`} />
               <h1>{text}</h1> 
               < i className={`${iconName} icon`} />
           </div>
};

export default SeasonDisplay;