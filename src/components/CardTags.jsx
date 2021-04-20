import React from "react";
import { CardTag } from "./";

const CardTags = ({ tags }) => {
	return (
		<div className="tags">
			<ul className="tags__list">
				{tags.split(", ").map((tag, index) => {
					return <CardTag key={index} name={tag} />;
				})}
			</ul>
		</div>
	);
};

export default CardTags;
