import React from "react";
import "./style.css";
import homePageSBS from "../assets/images/homePageSBS.gif";
import pageSBS from "../assets/images/page2.png";
import htmlLogo from "../assets/icons/html5.svg";
import cssLogo from "../assets/icons/css3.svg";
import jsLogo from "../assets/icons/javascript.svg";
import reactLogo from "../assets/icons/React-icon.svg";
import gMapsLogo from "../assets/icons/GoogleMapsLogo.svg";
import riotLogo from "../assets/icons/riot-games.svg";
import mongoDBLogo from "../assets/icons/mongodb.svg";
import mongooseLogo from "../assets/icons/mongoose.jpg";

function ProjectContainer() {
    return (
        <div>
            <div className="projectContainer">
                <div className="sideSpace" />
                <div className="projectOneContainer">
                    <div className="projectTitle">
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
                        Seattle Brewery Search is a site that provides an
                        interactive map that shows the locations of all the
                        breweries in the greater Seattle area.
                    </div>
                    <div className="projectTechnologies">
                        <img className="htmlLogo" src={htmlLogo} />
                        <img className="cssLogo" src={cssLogo} />
                        <img className="jsLogo" src={jsLogo} />
                        <img className="reactLogo" src={reactLogo} />
                        <img className="gMapsLogo" src={gMapsLogo} />
                        <img className="mongoDBLogo" src={mongoDBLogo} />
                        <img className="reactLogo" src={mongooseLogo} />
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
                    <img className="homePageSBS" src={homePageSBS} />
                    <img className="homePageSBS" src={pageSBS} />

                    <div className="projectDescription">
                        Fyre.gg is a site provides on demand and indepth player
                        statistics for the game League of Legends. It allows
                        users to search for both profiles and specific matches
                        with dynamic photos, tooltips of items, spells and
                        calculations of relevant statistics just as Kill/Death
                        ratio and Creep score. The game boasts a player base of
                        hundreds of millions of players world wide and is
                        considered to be one of the most popular games in the
                        world.
                    </div>
                    <div className="projectTechnologies">
                        <img className="htmlLogo" src={htmlLogo} />
                        <img className="cssLogo" src={cssLogo} />
                        <img className="jsLogo" src={jsLogo} />
                        <img className="reactLogo" src={reactLogo} />
                        <img className="riotLogo" src={riotLogo} />
                        <img className="mongoDBLogo" src={mongoDBLogo} />
                        <img className="reactLogo" src={mongooseLogo} />
                    </div>
                </div>
                <div className="sideSpace" />
            </div>
        </div>
    );
}

export default ProjectContainer;
