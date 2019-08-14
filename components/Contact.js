import React from 'react';

const ContactItem = ({title, iconName, link}) => (
    <div className="column is-6-mobile is-3-tablet is-2-desktop has-text-centered">
        <a
            href={link}
            className="is-centered is-inline-block has-text-white"
            style={{padding: "1.5em"}}
        >
            <i className={"fa fa-2x fa-" + iconName}/><br/>
            {title}
        </a>
    </div>
)

export default () => (
    <div className="columns is-multiline is-mobile is-centered">
        <ContactItem
            title="Email"
            iconName="envelope"
            link="mailto:info@gandreadis.com"
        />
        <ContactItem
            title="GitHub"
            iconName="github"
            link="https://github.com/gandreadis"
        />
        <ContactItem
            title="LinkedIn"
            iconName="linkedin"
            link="https://linkedin.com/in/gandreadis"
        />
        <ContactItem
            title="ResearchGate"
            iconName="book"
            link="https://www.researchgate.net/profile/Georgios_Andreadis4"
        />
        <ContactItem
            title="StackOverflow"
            iconName="stack-overflow"
            link="https://stackoverflow.com/users/975317/gandreadis"
        />
        <ContactItem
            title="Twitter"
            iconName="twitter"
            link="https://twitter.com/geoandreadis"
        />
    </div>
)
