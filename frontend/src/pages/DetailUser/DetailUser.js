import React, { useEffect, useState } from 'react';
import './DetailUser.css';
import axios from 'axios';


function DetailUser(data) {

    const [info, setInfo] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`https://cboxplay.herokuapp.com/user/${data.data.username}`)
            .then(
                res => {
                    setInfo(res.data)
                    setShow(true)
                }
            ).catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="detail-container">
                <div className="img-container">
                    {
                        (data.data.picture !== null) ? (
                            <img src={data.data.picture} className="item-img" alt=""></img>
                        ) : (
                                <img src="https://penidago.com/assets/images/member/no-image.jpg" className="item-img" alt=""></img>
                            )
                    }
                </div>
                <div className="head">
                    <h2>{data.data.name}</h2>
                    <h5>{data.data.locationName}</h5>
                    <h6>{data.data.professionalHeadline}</h6>

                </div>

                <>
                    {
                        (show) ? (
                            (info.languages.length > 0) ?
                                (info.languages.map((language, index) => (
                                    <div className="languages" key={index}>
                                        <>
                                            <h4>{language.language}:</h4>
                                            <p>{language.fluency}</p>
                                        </>
                                    </div>
                                ))) : (<></>)
                        ) : (<></>)
                    }

                </>
                <>
                    {
                        (show) ? (
                            (info.links.map((link, index) => (
                                <div className="links" key={index}>
                                    <>
                                        <h1>
                                            <a style={{ color: '#beeb1c' }} href={link.address}>{link.name}</a>
                                        </h1>
                                    </>
                                </div>
                            )))
                        ) : (<></>)
                    }
                </>

                <div className="information">
                    {
                        (show) ? (
                            (info.experiences.length > 0) ?
                                (info.experiences.map((exp, index) => (
                                    <div className="experiences" key={index}>
                                        <>
                                            <h3>{exp.category}:</h3>
                                            <p>{exp.name} {exp.fromMonth} - {exp.fromYear}</p>
                                            <p>{exp.contributions}</p>
                                        </>
                                    </div>
                                ))) : (<></>)
                        ) : (<></>)
                    }
                </div>

            </div>
        </>
    )

}


export default DetailUser;