import React, { useState } from 'react';
import './Jobs.css';
import JobItem from '../../components/JobItem';
import Detail from '../../pages/DetailPage/Detail';
import Loader from '../../components/Loader';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';


function Jobs() {

    const [query, setQuery] = useState('');
    const [jobs, setJobs] = useState([]);
    const [offer, setOffer] = useState([]);
    const [detail, setDetail] = useState(false);
    const [showloader, setShowloader] = useState(false);
    const [firstLoad, setFirstload] = useState(false);



    const handleClick = () => {

        setShowloader(true);

        axios.post('https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=50&aggregate=false&offset=0', { "skill/role": { "text": query, "experience": "potential-to-develop" } })
            .then(
                res => {
                    setShowloader(false);
                    setFirstload(true);
                    setJobs(res.data.results);

                }
            ).catch(err => console.log(err));

    }

    const handleQuery = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleClick();
    }

    const detailJob = (job) => {
        setOffer(job);

        setDetail(true);
    }

    return (
        <>
            {
                (detail) ? (
                    <>
                        <div className="back-container">
                            <ArrowBackIcon className="icon-arrow" style={{ color: 'white', fontsize: '50px' }} onClick={() => setDetail(false)}></ArrowBackIcon>
                            <button className="back-btn" onClick={() => setDetail(false)}>Go Back</button>
                        </div>
                        <div className="detail-container">
                            <Detail data={offer}></Detail>
                        </div>
                    </>
                ) : (
                        <>
                            <div className="search-container">
                                <h1>Torre Job Search</h1>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Search" className="job-input" onChange={handleQuery} />
                                </form>
                                <button onClick={handleClick} className="button-search">Search</button>
                            </div>
                            <div className="loader-jobs">
                                {
                                    (showloader) ? (
                                        <Loader />
                                    ) : (
                                            <>
                                            </>
                                        )
                                }
                            </div>

                            <div className="container-job-page">

                                {
                                    (jobs.length > 0) ?
                                        (jobs.map((job, index) => (
                                            <div key={index} onClick={() => detailJob(job)}>
                                                <JobItem data={job} key={index} />
                                            </div>
                                        ))) : (
                                            <>
                                                {
                                                    (jobs && firstLoad) ? (
                                                        <h1>No Jobs</h1>
                                                    ) : (
                                                            <>
                                                            </>
                                                        )

                                                }
                                            </>
                                        )

                                }

                            </div>
                        </>
                    )
            }

        </>
    )


}



export default Jobs;