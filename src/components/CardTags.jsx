import React from "react";
import { CardTag } from "./";

const CardTags = ({ tags, className }) => {
	const classes = ["tags"];

	if (className) {
		classes.push(className);
	}

	return (
		<div className={classes.join(" ")}>
			<ul className="tags__list">
				{tags.split(", ").map((tag, index) => {
					return <CardTag key={index} name={tag} />;
				})}
			</ul>
		</div>
	);
};

export default CardTags;
