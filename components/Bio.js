import React from 'react';

const BioItem = ({ emoji, title, subtitle, children }) => (
    <div className="tile is-parent">
        <div className="tile is-child has-text-centered">
            <h2 className="title" style={{marginBottom: 35}}>{ emoji }</h2>
            <p className="subtitle">
                { title }
                <br/>
                <em>{ subtitle }</em>
            </p>
            <p className="content">{ children }</p>
        </div>
    </div>
)

export default () => (
    <div>
        <div className="tile is-ancestor">
            <BioItem
                emoji="🎓"
                title="M.Sc. Student"
                subtitle="TU Delft"
            >
                I recently finished my B.Sc. in <strong>Computer Science</strong> with Honours
                at <strong>TU Delft</strong> and I'm now pursuing a M.Sc. degree in Software Technology.
            </BioItem>
            <BioItem
                emoji="📄"
                title="Junior Researcher"
                subtitle="AtLarge Research"
            >
                Starting during my BSc Honours Track, I've researched the scheduling process in datacenters, working in the
                { " " }
                <a href="http://atlarge.science" className="has-text-weight-bold">AtLarge Research Group</a>.
            </BioItem>
            <BioItem
                emoji="👨‍💻"
                title="Technology Lead"
                subtitle="OpenDC"
            >
                I am the Technology Lead for the
                { " " }
                <a href="https://opendc.org" className="has-text-weight-bold">OpenDC project</a>,
                an effort to provide accessible datacenter simulation in a web application format.
            </BioItem>
            <BioItem
                emoji="🎵"
                title="Principal Viola"
                subtitle="Ricciotti & Krashna"
            >
                I am currently principal violist in the <a href="https://ricciotti.nl" className="has-text-weight-bold">Ricciotti Ensemble</a> and the Delft student symphony orchestra <a href="https://krashna.nl" className="has-text-weight-bold">Krashna Musika</a>.
            </BioItem>
        </div>
    </div>
)
