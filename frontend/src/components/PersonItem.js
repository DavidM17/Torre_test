import React from 'react';
import './PersonItem.css';


function PersonItem(data) {

    return (
        <>
            <div className="person-item-container">

                {
                    (data.data.picture !== null) ? (
                        <img src={data.data.picture} className="item-img" alt=""></img>
                    ) : (
                            <img src="https://penidago.com/assets/images/member/no-image.jpg" className="item-img" alt=""></img>
                        )
                }

                <div className="name">
                    <h1>{data.data.name}</h1>
                </div>
                <div className="location">
                    <h3>{data.data.locationName}</h3>

                </div>

            </div>
        </>
    );


}
export default PersonItem;