import './Pages/App.css'
import React from "react";
import R from './Pages/resume/resume'
import img from './img/IMG_0415.JPG'
import A from './Pages/about/about'
import image from './img/Снимок_экрана__46_-removebg-preview.png'


function App() {
    return (

        <div className={'i'}>

            <div className="col-md-12 i-bg">
                <section className={'home'} id={'home'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-3">
                                <div className="nav d-flex justify-content-between mt-3 align-items-center">

                                    <h1><a href="">PORTFOLIO</a></h1>

                                    <h5><a href="#">HOME</a></h5>
                                    <h5><a href="#about">ABOUT ME</a></h5>
                                    <h5><a href="#resume">RESUME</a></h5>
                                    <h5><a href="#contact">CONTACT ME</a></h5>
                                </div>
                            </div>
                            <div className="col-md-3 text offset-1">
                                <p className={'p'}>Hello, My name is </p>
                                <h2>ELBERDIEV ISLOM</h2>
                                <h2>Fronted DEVELOPER</h2>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="over">
                                    <div className="col-md-2 title-wrap offset-2">
                                        <div className="i-title-item">Web - Developer</div>
                                        <div className="i-title-item">Html & Css</div>
                                        <div className="i-title-item">Bootstrap & Sass</div>
                                        <div className="i-title-item">Java & Database</div>
                                        <div className="i-title-item">Javascript & React</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 im">
                                <img src={image} className={'w'} alt=""/>

                            </div>


                        </div>


                    </div>
                </section>
            </div>

            <div className="container" style={{height:'100vh'}}>
                <R/>
            </div>
<hr/>
            <div className="container">
                <A/>
            </div>
        </div>
    );
}

export default App;
