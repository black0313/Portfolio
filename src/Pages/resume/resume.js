
import programSkills from "./program/programSkills";
import './resume.css'
import {Link,Switch,Route} from "react-router-dom";
import contact from './contact/contact'
function i() {

    return(
        <section id={'resume'}>
            <div className={'row mt-4 h'}>

                <div className="col-md-8 d-flex justify-content-between mt-4 h2 offset-2">

                    <Link to={'/contact'}><button className={'btn btn-outline-dark'}>Contact with Me</button></Link>
                    <h1 className={'text-center mt-5'} style={{color:'darGreen'}}>- = > RESUME > = -</h1>
                    <Link to={'program'}><button className={'btn btn-outline-dark'}>ProgramSkills</button></Link>

                </div>

                <div className="col-md-10 offset-1">
                    {/*<h1 className={'text-center'}>-|-|-|- </h1>*/}
                    <div className="col-md-8 offset-2">
                        <Switch>
                            <Route path={'/contact'} component={contact}/>
                            <Route path={'/program'} component={programSkills}/>
                        </Switch>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default i