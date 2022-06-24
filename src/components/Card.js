function Card (props) {
    const {
        name,
        link,
        likes
    } = props

  function handleClick() {
    props.onCardClick(props);
  }  

    return (
      <article className="element">
        <img src={link} alt={name} className="element__image" onClick={handleClick}/>
        <div className="element__header">
          <h2 className="element__title">{name}</h2>
              <div className="element__count">
                <button type="button" className="element__like"></button>
                <span className="element__like-count">{likes.length}</span>
              </div>
        </div>
        <button type="button" className="element__trash"></button>
      </article>
    );
}

export default Card;
