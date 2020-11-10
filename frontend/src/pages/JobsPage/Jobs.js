import React, { useState } from 'react';
import './Jobs.css';
import JobItem from '../../components/JobItem';
import Detail from '../../pages/DetailPage/Detail';
import axios from 'axios';


function Jobs() {

    const [query, setQuery] = useState('');
    const [jobs, setJobs] = useState([]);
    const [offer, setOffer] = useState([]);
    const [detail, setDetail] = useState(false);



    const handleClick = () => {

        axios.post('https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=50&aggregate=false&offset=0', { "skill/role": { "text": query, "experience": "potential-to-develop" } }).
            then(
                res => {
                    setJobs(res.data.results);
                    console.log(res.data.results[0].organizations[0].picture)

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
                    <Detail data={offer}></Detail>
                ) : (
                        <>
                            <div className="search-container">
                                <h1>Torre Job Search</h1>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Search" className="job-input" onChange={handleQuery} />
                                </form>
                                <button onClick={handleClick} className="button-search">Search</button>
                            </div>
                            <div className="container-job-page">

                                {
                                    (jobs.length > 0) ?
                                        (jobs.map((job, index) => (
                                            <JobItem data={job} key={index} />

                                        ))) : (

                                            <h1>No Jobs</h1>


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