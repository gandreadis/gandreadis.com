import React from "react"

const TileItem = ({ title, subtitle, keywords, color, children }) => (
  <div className="tile is-parent is-6">
    <article
      className={"tile is-child notification is-" + color}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      {children}
      <div style={{ marginTop: "auto" }}>
        <div className="tags">{keywords.map((keyword, index) => (
          <span className="tag is-rounded is-info" key={index}>{keyword}</span>
        ))}</div>
      </div>
    </article>
  </div>
)

export default TileItem
