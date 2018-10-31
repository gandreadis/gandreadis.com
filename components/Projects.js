import React from 'react';
import TileItem from "./TileItem";

const ProjectItem = ({ title, subtitle, team, context, link, keywords }) => (
    <TileItem
        title={ "🔨 " + title }
        subtitle={ subtitle }
        keywords={ keywords }
        color="light"
    >
        <div className="content">
            { team } - { context }
        </div>
        <div className="content">
            { link ?
                <div>
                    <a href={ link } className="button is-small is-warning">Project Website</a>
                </div> :
                undefined
            }
        </div>
    </TileItem>
)

export default () => (
    <div className="tile is-ancestor">
        <ProjectItem
            title="OpenDC"
            subtitle="Collaborative Datacenter Simulation and Exploration for Everybody"
            team="Team @Large"
            context="Bachelor Honours Track"
            link="https://opendc.org"
            keywords={ ["datacenters", "simulator", "web app"] }
        />
        <ProjectItem
            title="Schaapi"
            subtitle="Early Detection of Breaking Changes Based on API Usages"
            team="Café Jojo"
            context="Bachelor Thesis"
            link="https://cafejojo.org/schaapi"
            keywords={ ["software engineering", "automated test generation", "breaking changes", "continuous integration"] }
        />
    </div>
)
