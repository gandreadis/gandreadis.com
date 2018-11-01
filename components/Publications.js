import React from "react";
import TileItem from "./TileItem";
import trimIndent from "trim-indentation";

const PublicationItem = ({title, subtitle, authors, venue, link, inPrint, keywords, bibtex}) => (
    <TileItem
        title={"📄 " + title}
        subtitle={subtitle}
        keywords={keywords}
        color="light"
    >
        <div className="content">
            {authors}
            <br/>
            <strong>{venue}</strong>
        </div>
        <div className="content">
            {link ?
                <div>
                    <a href={link} className="button is-small is-warning">ResearchGate</a>

                    {bibtex ?
                        <button
                            className="button is-small is-warning"
                            onClick={() => copyToClipboard(trimIndent(bibtex).trim())}
                            style={{marginLeft: 5}}
                        >
                            <i className="fa fa-clipboard mr-inline"/>
                            {" "}
                            Copy BibTeX to clipboard
                        </button> :
                        undefined
                    }
                    {inPrint ?
                        <span
                            className="tag is-success is-rounded"
                            style={{marginLeft: 5}}
                        >
                            In Print
                        </span> :
                        undefined
                    }
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
                inPrint={true}
                link="https://www.researchgate.net/publication/327010925_A_Reference_Architecture_for_Datacenter_Scheduling_Extended_Technical_Report"
                keywords={["reference architecture", "datacenter", "scheduling"]}
                bibtex={`
                    @inproceedings{DBLP:conf/SC/Andreadis18,
                      author    = {Georgios Andreadis and
                                   Laurens Versluis and
                                   Fabian Mastenbroek and
                                   Alexandru Iosup},
                      title     = {A Reference Architecture for Datacenter Scheduling: Design, Validation, and Experiments},
                      booktitle = {Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis (SC18), Dallas, Texas, USA, November, 2018},
                      year      = {2018},
                      url       = {https://arxiv.org/abs/1808.04224}
                      doi       = {},
                    }
                `}
            />
            <PublicationItem
                title="Massivizing Computer Systems"
                subtitle="A Vision to Understand, Design, and Engineer Computer Ecosystems through and beyond Modern Distributed Systems"
                authors="Alexandru Iosup, Alexandru Uta, Laurens Versluis, Georgios Andreadis, Erwin van Eyk, Tim Hegeman, Sacheendra Talluri, Vincent van Beek, Lucian Toader"
                venue="ICDCS 2018"
                link="https://www.researchgate.net/publication/326566944_Massivizing_Computer_Systems_A_Vision_to_Understand_Design_and_Engineer_Computer_Ecosystems_Through_and_Beyond_Modern_Distributed_Systems"
                keywords={["ecosystems", "distributed systems"]}
                bibtex={`
                    @article{journals/corr/IosupUVAEHTBT18,
                      author    = {Alexandru Iosup and
                                   Alexandru Uta and
                                   Laurens Versluis and
                                   Georgios Andreadis and
                                   Erwin van Eyk and
                                   Tim Hegeman and
                                   Sacheendra Talluri and
                                   Vincent van Beek and
                                   Lucian Toader},
                      title     = {Massivizing Computer Systems: a Vision to Understand, Design, and Engineer Computer Ecosystems through and beyond Modern Distributed Systems},
                      journal   = {CoRR},
                      volume    = {abs/1802.05465},
                      year      = {2018},
                      url       = {http://arxiv.org/abs/1802.05465},
                      archivePrefix = {arXiv},
                      eprint    = {1802.05465}
                    }
                `}
            />
        </div>
        <div className="tile is-ancestor">
            <PublicationItem
                title="The OpenDC Vision"
                subtitle="Towards Collaborative Datacenter Simulation and Exploration for Everybody"
                authors="Alexandru Iosup, Georgios Andreadis, Vincent van Beek, Matthijs Bijman, Erwin van Eyk, Mihai Neacsu, Leon Overweel, Sacheendra Talluri, Laurens Versluis, Maaike Visser"
                venue="ISPDC 2017"
                link="https://www.researchgate.net/publication/321407023_The_OpenDC_Vision_Towards_Collaborative_Datacenter_Simulation_and_Exploration_for_Everybody"
                keywords={["datacenters", "clouds", "simulator"]}
                bibtex={`
                    @inproceedings{conf/ispdc/IosupABBENOTVV17,
                      author    = {Alexandru Iosup and
                                   Georgios Andreadis and
                                   Vincent van Beek and
                                   Matthijs Bijman and
                                   Erwin {van Eyk} and
                                   Mihai Neacsu and
                                   Leon Overweel and
                                   Sacheendra Talluri and
                                   Laurens Versluis and
                                   Maaike Visser},
                      title     = {The OpenDC Vision: Towards Collaborative Datacenter Simulation and Exploration for Everybody},
                      booktitle = {16th International Symposium on Parallel and Distributed Computing,
                                   {ISPDC} 2017, Innsbruck, Austria, July 4-6, 2017},
                      pages     = {1--10},
                      year      = {2017}
                    }
                `}
            />
        </div>
    </div>
)

function copyToClipboard(text) {
    const textAreaElement = document.createElement("textarea");
    textAreaElement.value = text;
    document.body.appendChild(textAreaElement);
    textAreaElement.select();

    const result = document.execCommand("copy");
    document.body.removeChild(textAreaElement)
    return result;
}
