import React from "react";
import "./style.css";
import homePageSBS from "../assets/images/homePageSBS.gif";
import pageSBS from "../assets/images/page2.png";
import fyreHome from "../assets/images/fyreHome.png";
import fyreMatch from "../assets/images/fyreggMatch.png";
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
import javaLogo from "../assets/icons/java-4.svg";
import bulmaLogo from "../assets/images/bulma-logo2.png";
import illLogo from "../assets/icons/adobe-illustrator-cc.svg";
import phLogo from "../assets/icons/photoshop-cc.svg";
import prLogo from "../assets/icons/premiere-cc.svg";
import pythonLogo from "../assets/icons/python-5.svg";

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
                        Web Developer
                        <br />
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
                            className="reactLogo"
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
                        <img className="mochaLogo" src={javaLogo} />
                        <img
                            className="cssLogo"
                            data-tip="Python"
                            src={pythonLogo}
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
                            className="reactLogo"
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
                        <img
                            className="chaiLogo"
                            data-tip="Adobe Premiere"
                            src={prLogo}
                        />
                    </div>
                </div>
                <div className="sideSpace" />
            </div>
        </div>
    );
}

export default ProjectContainer;
