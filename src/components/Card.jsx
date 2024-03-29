import React from "react";
import { Link } from "react-router-dom";
import { CardTags } from "./";

const Card = ({ id, tags, likes, type, comments, webformatURL }) => {
	return (
		<article className="catalog__item card">
			<Link to={`/card/${id}`} className="card__link">
				<img
					src={webformatURL}
					alt={type}
					className="card__img"
					width="150"
					height="150"
					loading="lazy"
				/>
			</Link>
			<p className="card__info">
				Количество лайков: <b>{likes}</b>
			</p>
			<p className="card__info">
				Количество комментариев: <b>{comments}</b>
			</p>
			<CardTags tags={tags} />
		</article>
	);
};

export default Card;
