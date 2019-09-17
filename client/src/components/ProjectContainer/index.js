import React from "react";
import "./style.css";
import homePageSBS from "../assets/images/homepageSBS2.webp";
import pageSBS from "../assets/images/page2.png";
import fyreHome from "../assets/images/fyreHome.png";
import fyreMatch from "../assets/images/fyreggMatch.png";
import fruitHome from "../assets/images/fruitclass.png";
import SLSstill from "../assets/images/STSstill.jpg";
import SLSgif from "../assets/images/STSgif.webp";
import ReactTooltip from "react-tooltip";
//
import htmlLogo from "../assets/icons/html5.svg";
import cssLogo from "../assets/icons/css3.svg";
import jsLogo from "../assets/icons/javascript.svg";
import reactLogo from "../assets/icons/React-icon.svg";
import gMapsLogo from "../assets/icons/GoogleMapsLogo.svg";
import riotLogo from "../assets/icons/riot-games.svg";
import mongoDBLogo from "../assets/icons/mongodb.svg";
import mongooseLogo from "../assets/icons/mongoose.jpg";
import mySQLLogo from "../assets/icons/mysql.svg";
import bootstrapLogo from "../assets/icons/bootstrap-4.svg";
import handlebars from "../assets/icons/handlebarsjs-icon.svg";
import sequelizeLogo from "../assets/icons/sequelize.svg";
import expressLogo from "../assets/icons/express-109.svg";
import jqueryLogo from "../assets/icons/jquery-1.svg";
import sassLogo from "../assets/icons/sass-1.svg";
import mochaLogo from "../assets/icons/mocha-1.svg";
import chaiLogo from "../assets/icons/chai.svg";
import bulmaLogo from "../assets/images/bulma-logo2.png";
import illLogo from "../assets/icons/adobe-illustrator-cc.svg";
import phLogo from "../assets/icons/photoshop-cc.svg";
import pythonLogo from "../assets/icons/python-5.svg";
import tfLogo from "../assets/icons/tensorflow-tf.svg";
import kerasLogo from "../assets/icons/keras.svg";
import numpyLogo from "../assets/icons/numpy-logo.svg";
import condaLogo from "../assets/icons/conda.png";
import jnLogo from "../assets/icons/jupyternotebook.svg";

function ProjectContainer() {
    return (
        <div>
            <ReactTooltip place="top" type="dark" effect="solid" />
            <div className="projectContainer">
                <div className="sideSpace" />
                <div className="projectOneContainer">
                    <div className="headerTitle">
                        Hi I'm Tristan Dardani
                        <br />
                        <div>Software Developer</div>
                        <a
                            className="projectLink"
                            href="mailto:t.dardani8@gmail.com"
                            target="_blank"
                        >
                            <i>t.dardani8@gmail.com</i>
                        </a>
                        <span className="projectLink"> | </span>
                        <a
                            className="projectLink"
                            href="https://github.com/tdar31/"
                            target="_blank"
                        >
                            <i>Github</i>
                        </a>
                    </div>
                </div>
                <div className="sideSpace" />
            </div>

            <div className="projectContainer">
                <div className="sideSpace" />
                <div className="projectOneContainer">
                    <div className="projectTitle">
                        Slay The Spire Game Agent (DDQN + CNN Image Classifier)
                        <br />
                        <a
                            className="projectLink"
                            href="https://github.com/tdar31/SerpentSLSGameAgentPlugin"
                            target="_blank"
                        >
                            <i>Github Repo</i>
                        </a>
                    </div>

                    <img className="homePageSBS" src={SLSgif} />
                    <img className="homePageSBS" src={SLSstill} />

                    <div className="projectDescription">
                        This project is a game agent for the game Slay The Spire
                        using the SerpentAI framework with DDQN (Reinforced
                        Learning) and a trained CNN supervised image classifier
                        (~3500 images for 9 classes). It is my first foray into
                        any Machine Learning project outside of training image
                        Classifiers. The project uses Tensorflow 1.8 + Keras,
                        Tesseract-ocr 4.00, CUDA + CUDNN 9.1 and Anaconda. A
                        much more indepth README describing the project can be
                        found at the project's
                        <a
                            className="projectLinkText"
                            href="https://github.com/tdar31/SerpentSLSGameAgentPlugin"
                        >
                            Github repository
                        </a>
                    </div>

                    <br />

                    <div className="projectDescription" />

                    <div className="projectDescription">
                        The image classifier is trained to return which stages
                        the game is in by capturing the entire game screen then
                        returning which trained class it falls in (battle,
                        death, reward etc.). Depending on the stage the agent
                        will execute different automated commands to return the
                        game back to the controlled battle stage in order to
                        train the agent. Player and enemy stats are captured via
                        the usage of Tesseract from both predefined and dynamic
                        regions of the screen. Decision making (DDQN) revolves
                        around which of the five cards drawn to play each turn.
                        The enemy will always project its next move (attack,
                        buff, defend etc) so the idea is that based on certain
                        player stats, what the enemy plans on doing and the
                        cards available to the player; a decision is made.
                    </div>

                    <div className="projectTechnologies projectMargin">
                        <img
                            className="pythonLogo"
                            data-tip="Python"
                            src={pythonLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="Anaconda"
                            src={condaLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="Tensorflow"
                            src={tfLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="Keras"
                            src={kerasLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="Numpy"
                            src={numpyLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="Jupyter Notebook"
                            src={jnLogo}
                        />
                    </div>
                </div>
                <div className="sideSpace" />
            </div>

            <div className="projectContainer">
                <div className="sideSpace" />
                <div className="projectOneContainer">
                    <div className="project1Title">
                        Seattle Brewery Search
                        <br />
                        <a
                            className="projectLink"
                            href="https://www.seattlebrewerysearch.com"
                            target="_blank"
                        >
                            <i>www.seattlebrewerysearch.com </i>
                        </a>
                        <span className="projectLink"> | </span>
                        <a
                            className="projectLink"
                            href="https://github.com/tdar31/Seattle-Brewery-Search"
                            target="_blank"
                        >
                            <i>Github Repo</i>
                        </a>
                    </div>
                    <img className="homePageSBS" src={homePageSBS} />
                    <img className="homePageSBS" src={pageSBS} />

                    <div className="projectDescription">
                        Seattle Brewery Search is a full stack web application
                        that provides an interactive map that shows the
                        locations of all the breweries in the greater Seattle
                        area. The site uses the Google Maps API to generate the
                        interactive map with custom markers for each brewery.
                    </div>
                    <div className="projectTechnologies">
                        <img
                            className="htmlLogo"
                            data-tip="HTML5"
                            src={htmlLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="CSS3"
                            src={cssLogo}
                        />
                        <img
                            className="jsLogo"
                            data-tip="Javascript"
                            src={jsLogo}
                        />
                        <img
                            className="reactLogo"
                            data-tip="React"
                            src={reactLogo}
                        />
                        <img
                            className="gMapsLogo"
                            data-tip="Google Maps API"
                            src={gMapsLogo}
                        />
                        <img className="mongoDBLogo" src={mongoDBLogo} />
                        <img
                            className="mongooseLogo"
                            data-tip="Mongoose ODM"
                            src={mongooseLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Adobe Photoshop"
                            src={phLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Adobe Illustrator"
                            src={illLogo}
                        />
                    </div>
                </div>
                <div className="sideSpace" />
            </div>

            <div className="projectContainer">
                <div className="sideSpace" />
                <div className="projectOneContainer">
                    <div className="projectTitle">
                        Fruit Machine Learning Image Classifier
                        <br />
                        <a
                            className="projectLink"
                            href="https://fruit-image-classifer.onrender.com/"
                            target="_blank"
                        >
                            <i>https://fruit-image-classifer.onrender.com/</i>
                        </a>
                        <span className="projectLink"> | </span>
                        <a
                            className="projectLink"
                            href="https://github.com/tdar31/Fruit-MachineLearning-Image-Classifer"
                            target="_blank"
                        >
                            <i>Github Repo</i>
                        </a>
                    </div>

                    <img className="homePageSBS" src={fruitHome} />

                    <div className="projectDescription">
                        Trained CNN that does image classification for various
                        types of fruits. Simply upload a photo to return a
                        result. Model currently has a ~82% success rate
                        identifying the correct fruit using current training
                        data. Current dataset are ~200 images per class taken
                        from Google Images.
                    </div>

                    <br />

                    <div className="projectDescription">
                        Current classes: Apple, Apricot, Avocado, Banana,
                        Blackberry, Blueberry, Cantaloupe, Cherry, Cloudberry,
                        Coconut, Cucumber, Date, Dragonfruit, Durian, Fig,
                        Grape, Grapefruit, Honeyberry, Honeydew, Kiwifruit,
                        Kumquat, Lemon, Lime, Mango, Orange, Papaya,
                        Passionfruit, Peach, Pear, Plum, Pineapple,
                        Pomegranante, Raspberry, Strawberry and Watermelon
                    </div>

                    <div className="projectTechnologies projectMargin">
                        <img
                            className="htmlLogo"
                            data-tip="HTML5"
                            src={htmlLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="CSS3"
                            src={cssLogo}
                        />
                        <img
                            className="jsLogo"
                            data-tip="Javascript"
                            src={jsLogo}
                        />
                        <img
                            className="pythonLogo"
                            data-tip="Python"
                            src={pythonLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Jupyter Notebook"
                            src={jnLogo}
                        />
                    </div>
                </div>
                <div className="sideSpace" />
            </div>

            <div className="projectContainer">
                <div className="sideSpace" />
                <div className="projectOneContainer">
                    <div className="projectTitle">
                        Fyre.gg
                        <br />
                        <a
                            className="projectLink"
                            href="https://www.fyre.gg"
                            target="_blank"
                        >
                            <i>www.fyre.gg</i>
                        </a>
                        <span className="projectLink"> | </span>
                        <a
                            className="projectLink"
                            href="https://github.com/tdar31/fyregg"
                            target="_blank"
                        >
                            <i>Github Repo</i>
                        </a>
                    </div>
                    <img className="homePageSBS" src={fyreHome} />
                    <img className="homePageSBS" src={fyreMatch} />

                    <div className="projectDescription">
                        Fyre.gg is a full stack web application provides on
                        demand and indepth player statistics for the game League
                        of Legends. It allows users to search for both profiles
                        and specific matches with dynamic photos, tooltips of
                        items, spells and calculations of relevant statistics
                        just as Kill/Death ratio and Creep score.
                    </div>
                    <div className="projectTechnologies">
                        <img
                            className="htmlLogo"
                            data-tip="HTML5"
                            src={htmlLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="CSS3"
                            src={cssLogo}
                        />
                        <img
                            className="jsLogo"
                            data-tip="Javascript"
                            src={jsLogo}
                        />
                        <img
                            className="reactLogo"
                            data-tip="React"
                            src={reactLogo}
                        />
                        <img
                            className="riotLogo"
                            data-tip="Riot Games API"
                            src={riotLogo}
                        />
                        <img className="mongoDBLogo" src={mongoDBLogo} />
                        <img
                            className="mongooseLogo"
                            data-tip="Mongoose ODM"
                            src={mongooseLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Adobe Photoshop"
                            src={phLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Adobe Illustrator"
                            src={illLogo}
                        />
                    </div>
                </div>
                <div className="sideSpace" />
            </div>

            <div className="projectContainer">
                <div className="sideSpace" />
                <div className="projectOneContainer">
                    <div className="projectDescription">
                        All technologies I have experience with:
                    </div>
                    <div className="projectTechnologies">
                        <img
                            className="htmlLogo"
                            data-tip="HTML5"
                            src={htmlLogo}
                        />
                        <img
                            className="cssLogo"
                            data-tip="CSS3"
                            src={cssLogo}
                        />
                        <img
                            className="sassLogo"
                            data-tip="Sass"
                            src={sassLogo}
                        />
                        <img
                            className="jsLogo"
                            data-tip="Javascript"
                            src={jsLogo}
                        />
                        <img
                            className="pythonLogo"
                            data-tip="Python"
                            src={pythonLogo}
                        />
                        <img
                            className="pythonLogo"
                            data-tip="Tensorflow"
                            src={tfLogo}
                        />
                        <img
                            className="pythonLogo"
                            data-tip="Keras"
                            src={kerasLogo}
                        />
                        <img
                            className="pythonLogo"
                            data-tip="Numpy"
                            src={numpyLogo}
                        />
                        <img
                            className="pythonLogo"
                            data-tip="Anaconda"
                            src={condaLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Jupyter Notebook"
                            src={jnLogo}
                        />
                        <img className="jqueryLogo" src={jqueryLogo} />
                        <img
                            className="bootstrapLogo"
                            data-tip="Bootstrap"
                            src={bootstrapLogo}
                        />
                        <img
                            className="bulmaLogo"
                            data-tip="Bulma"
                            src={bulmaLogo}
                        />
                        <img
                            className="reactLogo"
                            data-tip="React / React Native"
                            src={reactLogo}
                        />
                        <img
                            className="handlebarsLogo"
                            data-tip="HandlebarsJS"
                            src={handlebars}
                        />
                        <img className="reactLogo" src={expressLogo} />
                        <img className="mysqlLogo" src={mySQLLogo} />
                        <img
                            className="sequelizeLogo"
                            data-tip="Sequelize ORM"
                            src={sequelizeLogo}
                        />
                        <img className="mongoDBLogo" src={mongoDBLogo} />
                        <img
                            className="mongooseLogo"
                            data-tip="Mongoose ODM"
                            src={mongooseLogo}
                        />
                        <img
                            className="mochaLogo"
                            data-tip="Mocha"
                            src={mochaLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Chai"
                            src={chaiLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Adobe Photoshop"
                            src={phLogo}
                        />
                        <img
                            className="chaiLogo"
                            data-tip="Adobe Illustrator"
                            src={illLogo}
                        />
                    </div>
                </div>
                <div className="sideSpace" />
            </div>
        </div>
    );
}

export default ProjectContainer;
