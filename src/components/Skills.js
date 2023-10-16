import meter1 from "../assets/img/html5.png";
import meter2 from "../assets/img/css3.png";
import meter3 from "../assets/img/js.png";

export const Skills = () => {
    return(
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Skills I have knowledge in.</p>
                        <div className="items">
                            <div className="item1">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item2">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item3">
                                <img src={meter3} alt="Image" />
                                <h5>JS</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
    );
}