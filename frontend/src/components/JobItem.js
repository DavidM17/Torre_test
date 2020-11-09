import React,{useEffect,useState} from 'react';
import './JobItem.css';

function JobItem(data) {
   
    useEffect(()=>{
        console.log(data.data);
        
    },[]);
    return (
        <>
        <div className="job-item-container"> 
            <div className="head-container">
                {
                    (data.data.organizations[0] !== undefined) ? (
                        <img src={data.data.organizations[0].picture} className="item-img"></img>
                    ):(
                        <img src="https://penidago.com/assets/images/member/no-image.jpg" className="item-img"></img>
                    )
                }
                
                <div className="head-job">
                    <h3>{data.data.objective}</h3>
                    <h5>{data.data.type}</h5>
                    <h6>{data.data.locations}</h6>
                </div>
            </div>
            <div className="body-job">
                
            
            </div>
            
            
        </div>
        </>
    );


}
export default JobItem;