import './about.css'
import img from '../../img/cv-removebg-preview.png'

function about() {

    return (
      <section id={'about'}>
          <div className={'row'}>
              <div className="col-md-10 b offset-1 t">
                  <h2 className={'text-center mb-2 mt-4'}>ABOUT ME</h2>
                  <div className=" d-flex">
                      <div className=" col-md-6 d">
                          <br/>
                          <h4 className={'p1'}>My full name is Islom Elberdiev = > I was born 26.12.1997</h4>
                          <br/>
                          <h4>I had been started study in PDP = > 01.05.2021 and</h4>
                          <br/>
                          <h4> I had finish at 27.12.2021</h4>
                          <br/>
                          <h4>I am a full stack developer but I'm keen on Fronted works</h4>
                          <br/>
                          <h4>I am so passionate about programming and like to solve problems</h4>
                          <br/><br/>
                          <h4 className={'text-center'}>  - = >Thanks for care !!!</h4>
                      </div>
                      <div className="col-md-6">
                          <img src={img} className={'ing'} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default about