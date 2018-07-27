import React from 'react';

const BioItem = ({ emoji, title, children }) => (
    <div className="tile is-parent">
        <div className="tile is-child has-text-centered">
            <h2 className="title">{ emoji }</h2>
            <p className="subtitle">{ title }</p>
            <p className="content">{ children }</p>
        </div>
    </div>
)

export default () => (
    <div className="tile is-ancestor">
        <BioItem
            emoji="🎓"
            title="M.Sc. Student @ TU Delft"
        >
            I recently finished my B.Sc. in <strong>Computer Science</strong> with Honours
            at <strong>TU Delft</strong> and I'm now pursuing a M.Sc. degree.
        </BioItem>
        <BioItem
            emoji="📄"
            title="Junior Researcher @ AtLarge Research"
        >
            As part of my B.Sc. Honours Track, I've researched the scheduling process in datacenters, working in the
            { " " }
            <a href="http://atlarge.science" className="has-text-weight-bold">AtLarge Research Group</a>.
        </BioItem>
        <BioItem
            emoji="👨‍💻"
            title="Tech Lead @ OpenDC"
        >
            I am the Technology Lead for the
            { " " }
            <a href="https://opendc.org" className="has-text-weight-bold">OpenDC project</a>,
            an effort to provide accessible datacenter simulation in a web application format.
        </BioItem>
    </div>
)
