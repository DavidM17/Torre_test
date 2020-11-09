import React,{useState, useEffect} from 'react';
import './Detail.css';
import axios from 'axios';


function Detail() {

    const [query, setQuery] = useState('');
    const [jobs, setJobs] = useState([]);

    
    const handleClick = () => {
        axios.post('https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=20&aggregate=false&offset=0',{"skill/role":{"text":query,"experience":"potential-to-develop"}}).
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

    

    

    return (
        <>
            <div className="search-container">
                <h1>Torre Job Search</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search" className="analytic-input" onChange={handleQuery}/>
                </form>
                <button onClick={handleClick} className="button-search">Search</button>
            </div>
            <div className="container-analytic-page">
            
            Grafica

        </div>
        </>
    )


}



export default Detail;