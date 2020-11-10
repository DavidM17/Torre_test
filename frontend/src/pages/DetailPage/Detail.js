import React,{useEffect,useState} from 'react';
import './Detail.css';
import axios from 'axios';



function Detail(data) {

    const [info,setInfo] = useState([])
    const [show,setShow] = useState(false)

    useEffect(()=>{
    
        axios.get(`https://torre.co/api/opportunities/${data.data.id}`)
        .then(
                res => {
                    
                    setInfo(res.data)
                    
                    setShow(true)
                }
            ).catch(err => console.log(err));
    },[])

    return (
        <>
            <div className="detail-container">
                <div className="img-container">
                    {
                        (data.data.organizations[0] !== undefined) ? (
                            <img src={data.data.organizations[0].picture} className="item-img" alt=""></img>
                        ) : (
                                <img src="https://penidago.com/assets/images/member/no-image.jpg" className="item-img" alt=""></img>
                            )
                    }
                </div>
                <div className="head">
                    <h2>{data.data.objective}</h2>
                    <h5>{data.data.type}</h5>
                    <h6>{data.data.locations}</h6>
                    {
                        (data.data.compensation) ? (
                            (data.data.compensation.data) ? (
                                <h3>{data.data.compensation.data.minAmount} {data.data.compensation.data.currency} {data.data.compensation.data.periodicity}</h3>
                            ) :
                                (<></>)
                        ) : (<></>)

                    }
                    {
                        (data.data.remote) ? (
                            <h3 style={{ color: '#beeb1c' }}>Remote Job</h3>
                        ) : (<></>)
                    }
                    {
                        (data.data.status === 'open') ? (
                            <h4 style={{ color: '#beeb1c' }}>Open Offer</h4>
                        ) : (
                                <h4 style={{ color: 'red' }}>Closed Offer</h4>
                            )
                    }
                </div>
                <div className="members">
                    {
                        (show) ? (
                        (data.data.members.map((detail, index) => (
                            <div key={index} className="poster">
                                <img src={detail.picture} alt=""></img>
                                <h5 style={{color:'#beeb1c'}}>Member</h5>
                                <h5>{detail.name}</h5>
                            </div>
                                
                        )))   ):(<></>)                    
                    }
                </div>
                <div className="information">

                {
                    (show) ? (
                        (info.details.length > 0) ?
                            (info.details.map((detail, index) => (
                                <div key={index}>
                                <>
                                <h2>{detail.code}</h2>
                                <p>{detail.content}</p>
                                </>
                                </div>
                            ))) : (

                                <h1>No Jobs</h1>


                            )
                    ):(<></>)
                        

                    
                } 

                </div>
                



            </div>
        </>
    )

}



export default Detail;