import React, {useState} from "react";

function CardOpen(props) {
    const [showCard, setShowCard] = useState(false)
  return (
    <div>
      <div
        className="card"
        onClick={() => setShowCard(!showCard)}
      >
        <img src={props.picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name} </h5>
          {showCard && <><p className="card-text">{props.info}</p><a href={props.link} target="_blank" className="btn btn-primary">
                      Download
                  </a></>}
        </div>
      </div>
    </div>
  );
}

export default CardOpen;
