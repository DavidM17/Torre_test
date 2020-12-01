import React, { useState } from 'react';
import './People.css';
import PersonItem from '../../components/PersonItem';
import DetailUser from '../DetailUser/DetailUser';
import Loader from '../../components/Loader';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';

function People() {

    const [query, setQuery] = useState('');
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState([]);
    const [detail, setDetail] = useState(false);
    const [showloader, setShowloader] = useState(false);
    const [firstLoad, setFirstload] = useState(false);

    const handleClick = () => {

        setShowloader(true);

        axios.post('https://search.torre.co/people/_search/?size=30&lang=es&aggregate=false&offset=0', { name: { term: query } })
            .then(
                res => {
                    setShowloader(false);
                    setFirstload(true);
                    setPeople(res.data.results);
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

    const detailPerson = (person) => {
        setPerson(person);
        setDetail(true);

    }

    return (
        <>
            {

                (detail) ? (
                    <>
                        <div className="back-container">
                            <ArrowBackIcon className="icon-arrow" style={{ color: 'white', fontsize: '50px' }} onClick={() => setDetail(false)}></ArrowBackIcon>
                            <h1 onClick={() => setDetail(false)}>Go Back to {query} search</h1>

                        </div>

                        <DetailUser data={person}></DetailUser>

                    </>
                ) : (
                        <>
                            <div className="search-container">
                                <h1>Torre People Search</h1>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Search" className="job-input" onChange={handleQuery} />
                                </form>
                                <button onClick={handleClick} className="button-search">Search</button>
                            </div>
                            <div className="loader-people">
                                {
                                    (showloader) ? (
                                        <Loader />
                                    ) : (<></>)
                                }
                            </div>

                            <div className="container-people-page">

                                {
                                    (people.length > 0) ?
                                        (people.map((person, index) => (
                                            <div key={index} onClick={() => detailPerson(person)}>
                                                <PersonItem data={person} key={index} />
                                            </div>
                                        ))) : (
                                            <>
                                                {
                                                    (people && firstLoad) ? (
                                                        <h1>No Person with this name</h1>
                                                    ) : (<></>)

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

export default People;