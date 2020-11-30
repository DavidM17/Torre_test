import React from 'react';
import './JobItem.css';

function JobItem(data) {


    return (
        <>
            <div className="job-item-container">
                <div className="head-container">
                    {
                        (data.data.organizations[0] !== undefined) ? (
                            <img src={data.data.organizations[0].picture} className="item-img" alt=""></img>
                        ) : (
                                <img src="https://penidago.com/assets/images/member/no-image.jpg" className="item-img" alt=""></img>
                            )
                    }

                    <div className="head-job">
                        <h3>{data.data.objective}</h3>
                        <h5>{data.data.type}</h5>
                        <h6>{data.data.locations}</h6>
                    </div>
                </div>
                <div className="body-job">
                    {
                        (data.data.compensation) ? (
                            (data.data.compensation.data) ? (
                                <h3>{data.data.compensation.data.minAmount} {data.data.compensation.data.currency} {data.data.compensation.data.periodicity}</h3>
                            ) :
                                (<></>)
                        ) : (<></>)

                    }
                    <h5>Status: {data.data.status}</h5>
                    {
                        (data.data.remote) ? (
                            <h3 style={{ color: '#beeb1c' }}>Remote Job</h3>
                        ) : (<></>)
                    }

                    {
                        (data.data.deadline) ? (
                            <h5>Apply Before:{data.data.deadline}</h5>
                        ) : (<></>)
                    }


                </div>


            </div>
        </>
    );


}
export default JobItem;