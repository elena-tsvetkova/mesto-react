import React from 'react';

function Card (props) {
    return (
      <article className="element">
        <img src={`${props.link}`} alt="" className="element__image"/>
        <div className="element__header">
          <h2 className="element__title">{props.name}</h2>
              <div className="element__count">
                <button type="button" className="element__like"></button>
                <span className="element__like-count">{props.likes.length}</span>
              </div>
        </div>
        <button type="button" className="element__trash"></button>
      </article>
    );
}

export default Card;
