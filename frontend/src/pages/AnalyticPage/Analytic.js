import React, { useState, useEffect } from 'react';
import './Analytic.css';
import Loader from '../../components/Loader';
import axios from 'axios';
import Highcharts from 'highcharts'
import bellCurve from 'highcharts/modules/histogram-bellcurve'
import HighchartsReact from 'highcharts-react-official'
bellCurve(Highcharts);


function Analytic() {

    const [query, setQuery] = useState('');
    const [rawdata, setRawdata] = useState([]);
    const [showloader, setShowloader] = useState(false);

    const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

    const options = {
        title: {
            text: `Average Salary for ${query} ${parseInt(average(rawdata))} USD$/year`,

            style: {
                color: '#ffff'
            }

        },

        xAxis: [{
            title: {
                text: 'Data',
                style: {
                    color: '#3a3737'
                }
            },
            alignTicks: false,
            labels: {
                style: {
                    color: '#3a3737'
                }
            }
        }, {
            title: {
                text: 'Histogram',
                style: {
                    color: '#ffff'
                }
            },
            labels: {
                style: {
                    color: '#ffff'
                }
            },
            alignTicks: false,
            opposite: false
        }],

        yAxis: [{
            title: {
                text: 'Data',
                style: {
                    color: '#3a3737'
                }
            },
            labels: {
                style: {
                    color: '#3a3737'
                }
            }
        }, {
            title: {
                text: 'Histogram',
                style: {
                    color: '#ffff'
                }
            },
            labels: {
                style: {
                    color: '#ffff'
                }
            },
            opposite: true
        }],

        chart: {
            backgroundColor: '#3a3737'
        },

        plotOptions: {
            histogram: {
                accessibility: {
                    pointDescriptionFormatter: function (point) {
                        var ix = point.index + 1,
                            x1 = point.x.toFixed(3),
                            x2 = point.x2.toFixed(3),
                            val = point.y;
                        return ix + '. ' + x1 + ' to ' + x2 + ', ' + val + '.';
                    }
                }
            }
        },

        series: [{
            name: 'Histogram',
            type: 'histogram',
            xAxis: 1,
            yAxis: 1,
            baseSeries: 's1',
            zIndex: -1
        }, {
            name: 'Data',
            type: 'scatter',
            data: rawdata,
            id: 's1',
            marker: {
                radius: 1.5
            }
        }]
    }

    const handleClick = () => {

        setShowloader(true);
        axios.get(`https://cboxplay.herokuapp.com/analytics/salary/${query}`).then(
            res => {
                setShowloader(false);
                setRawdata(res.data);
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

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="search-container">
                <h1>Torre Salary Analytic Roles/Skills</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ex:Java Developer" className="analytic-input" onChange={handleQuery} />
                </form>
                <button onClick={handleClick} className="button-search">Search</button>
            </div>

            <div className="loader-analytic">
                {
                    (showloader) ? (
                        <Loader />
                    ) : (<></>)
                }
            </div>

            <div className="container-analytic-page">
                {
                    (rawdata.length > 0) ? (
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    ) : (
                            <h1>Search for a Skill/Role</h1>
                        )
                }

            </div>
        </>
    )

}

export default Analytic;