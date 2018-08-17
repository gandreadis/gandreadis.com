import React from 'react';
import TileItem from "./TileItem";

const PublicationItem = ({ title, subtitle, authors, venue, link, inPrint, keywords }) => (
    <TileItem
        title={ "📄 " + title }
        subtitle={ subtitle }
        keywords={ keywords }
        color="danger"
    >
        <div className="content">
            { authors }
            <br/>
            <strong>{ venue }</strong>
        </div>
        <div className="content">
            { link ?
                <div>
                    <a href={ link } className="button is-small is-warning">ResearchGate</a>
                </div> :
                undefined
            }
            { inPrint ?
                <div>
                    <span className="tag is-info">In Print</span>
                </div> :
                undefined
            }
        </div>
    </TileItem>
)

export default () => (
    <div>
        <div className="tile is-ancestor">
            <PublicationItem
                title="A Reference Architecture for Datacenter Scheduling"
                subtitle="Design, Validation, and Experiments"
                authors="Georgios Andreadis, Laurens Versluis, Fabian Mastenbroek, Alexandru Iosup"
                venue="Supercomputing 2018"
                link="https://www.researchgate.net/publication/327010925_A_Reference_Architecture_for_Datacenter_Scheduling_Extended_Technical_Report"
                keywords={ ["reference architecture", "datacenter", "scheduling"] }
            />
            <PublicationItem
                title="Massivizing Computer Systems"
                subtitle="A Vision to Understand, Design, and Engineer Computer Ecosystems through and beyond Modern Distributed Systems"
                authors="Alexandru Iosup, Alexandru Uta, Laurens Versluis, Georgios Andreadis, Erwin van Eyk, Tim Hegeman, Sacheendra Talluri, Vincent van Beek, Lucian Toader"
                venue="ICDCS 2018"
                link="https://www.researchgate.net/publication/326566944_Massivizing_Computer_Systems_A_Vision_to_Understand_Design_and_Engineer_Computer_Ecosystems_Through_and_Beyond_Modern_Distributed_Systems"
                keywords={ ["ecosystems", "distributed systems"] }
            />
        </div>
        <div className="tile is-ancestor">
            <PublicationItem
                title="The OpenDC Vision"
                subtitle="Towards Collaborative Datacenter Simulation and Exploration for Everybody"
                authors="Alexandru Iosup, Georgios Andreadis, Vincent van Beek, Matthijs Bijman, Erwin van Eyk, Mihai Neacsu, Leon Overweel, Sacheendra Talluri, Laurens Versluis, Maaike Visser"
                venue="ISPDC 2017"
                link="https://www.researchgate.net/publication/321407023_The_OpenDC_Vision_Towards_Collaborative_Datacenter_Simulation_and_Exploration_for_Everybody"
                keywords={ ["datacenters", "clouds", "simulator"] }
            />
        </div>
    </div>
)
