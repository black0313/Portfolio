function programSkills() {


    return(
        <div className={'row'}>
            <hr/>
            <h2 className={'text-center'}>My formal bio detail</h2>

            <div className="div d-flex justify-content-between mt-5">

                <div className="div1">

                    <div className="java">
                        <h3><label htmlFor="file">Java</label></h3>

                        <progress className={'progress-bar'} id="file" max="100" value="50"> 50%</progress>

                    </div>

                    <hr/>
                    <div className="javascript">
                        <h3><label htmlFor="file">JavaScript</label></h3>
                        <progress id="file" max="100" className={'progress-bar'} value="75"> 75%</progress>
                    </div>
                    <hr/>

                    <div className="Database">
                        <h3><label htmlFor="file">Database</label></h3>
                        <progress id="file" max="100" className={'progress-bar'} value="70"> 70%</progress>
                    </div>
                </div>

                <div className="div2">

                    <div className="Html">
                        <h3><label htmlFor="file">Html</label></h3>
                        <progress id="file" max="100" className={'progress-bar'} value="90"> 90%</progress>
                    </div>
                    <hr/>

                    <div className="Css">
                        <h3><label htmlFor="file">Css & Sass</label></h3>
                        <progress id="file" max="100" className={'progress-bar'} value="90"> 90%</progress>
                    </div>
                    <hr/>
                    <div className="Css w-100">
                        <h3><label htmlFor="file">React</label></h3>
                        <progress id="file" max="100" className={'progress-bar'} value="90"> 90%</progress>
                    </div>

                </div>

            </div>
        </div>    )
}

export default programSkills