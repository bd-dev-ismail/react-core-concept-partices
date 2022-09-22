import React, { useState } from 'react';

const Mobile = () => {
    const [charge, setCharge] = useState(100);
    const betteryDown = ()=>{
        if(charge >0){
            setCharge(charge - 10)
        }
        return;
        
    }
    return (
        <div style={{margin: '30px 0'}}>
            <h1>Charge {charge}%</h1>
            <p>Jodi Charge 0% hoye jai ..taile r down hobe na!</p>
            <button onClick={betteryDown} style={{backgroundColor: 'purple', padding: '12px 22px', border: 'none', borderRadius: '15px', color: 'white', fontWeight: 'bold'}}>Bettery Down</button>
        </div>
    );
};

export default Mobile;