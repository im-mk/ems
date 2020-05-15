import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='body'>

                <div className="container">

                    <div className="donut-chart-block block">
                        <h2 className="titular">OS AUDIENCE</h2>
                        <div className="donut-chart">

                            <div id="porcion1" className="recorte"><div className="quesito ios" data-rel="21"></div></div>
                            <div id="porcion2" className="recorte"><div className="quesito mac" data-rel="39"></div></div>
                            <div id="porcion3" className="recorte"><div className="quesito win" data-rel="31"></div></div>
                            <div id="porcionFin" className="recorte"><div className="quesito linux" data-rel="9"></div></div>

                            <p className="center-date">JUNE<br /><span className="scnd-font-color">2013</span></p>
                        </div>
                        <ul className="os-percentages horizontal-list">
                            <li>
                                <p className="ios os scnd-font-color">iOS</p>
                                <p className="os-percentage">21<sup>%</sup></p>
                            </li>
                            <li>
                                <p className="mac os scnd-font-color">Mac</p>
                                <p className="os-percentage">39<sup>%</sup></p>
                            </li>
                            <li>
                                <p className="linux os scnd-font-color">Linux</p>
                                <p className="os-percentage">9<sup>%</sup></p>
                            </li>
                            <li>
                                <p className="win os scnd-font-color">Win</p>
                                <p className="os-percentage">31<sup>%</sup></p>
                            </li>
                        </ul>
                    </div>

                    <div className="line-chart-block block">
                        <div className="line-chart">
                            <div className='grafico'>
                                <ul className='eje-y'>
                                    <li data-ejeY='30'></li>
                                    <li data-ejeY='20'></li>
                                    <li data-ejeY='10'></li>
                                    <li data-ejeY='0'></li>
                                </ul>
                                <ul className='eje-x'>
                                    <li>Apr</li>
                                    <li>May</li>
                                    <li>Jun</li>
                                </ul>
                                <span data-valor='25'>
                                    <span data-valor='8'>
                                        <span data-valor='13'>
                                            <span data-valor='5'>
                                                <span data-valor='23'>
                                                    <span data-valor='12'>
                                                        <span data-valor='15'>
                                                        </span></span></span></span></span></span></span>
                            </div>

                        </div>
                        <ul className="time-lenght horizontal-list">
                            <li><a className="time-lenght-btn" href="#14">Week</a></li>
                            <li><a className="time-lenght-btn" href="#15">Month</a></li>
                            <li><a className="time-lenght-btn" href="#16">Year</a></li>
                        </ul>
                        <ul className="month-data clear">
                            <li>
                                <p>APR<span className="scnd-font-color"> 2013</span></p>
                                <p><span className="entypo-plus increment"> </span>21<sup>%</sup></p>
                            </li>
                            <li>
                                <p>MAY<span className="scnd-font-color"> 2013</span></p>
                                <p><span className="entypo-plus increment"> </span>48<sup>%</sup></p>
                            </li>
                            <li>
                                <p>JUN<span className="scnd-font-color"> 2013</span></p>
                                <p><span className="entypo-plus increment"> </span>35<sup>%</sup></p>
                            </li>
                        </ul>
                    </div>



                    <div className="bar-chart-block block">
                        <h2 className='titular'>By Country <span>*1000</span></h2>
                        <div className='grafico bar-chart'>
                            <ul className='eje-y'>
                                <li data-ejeY='60'></li>
                                <li data-ejeY='45'></li>
                                <li data-ejeY='30'></li>
                                <li data-ejeY='15'></li>
                                <li data-ejeY='0'></li>
                            </ul>
                            <ul className='eje-x'>
                                <li data-ejeX='37'><i>España</i></li>
                                <li data-ejeX='56'><i>Portugal</i></li>
                                <li data-ejeX='25'><i>Italia</i></li>
                                <li data-ejeX='18'><i>Grecia</i></li>
                                <li data-ejeX='45'><i>EE.UU</i></li>
                                <li data-ejeX='50'><i>México</i></li>
                                <li data-ejeX='33'><i>Chile</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;