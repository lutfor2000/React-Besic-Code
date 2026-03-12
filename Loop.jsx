
import React from 'react';
const city = ['Dhaka','Rangpur','Pakhisthan','Nepal'];

const Loop = () => {
    return (
        <div>
            <ul>
                {
                  city.map((item,i)=>{
                      return <li key={i.toString()}>{i}-{item}</li>
                  })
                }
            </ul>
        </div>
    );
};

export default Loop;
