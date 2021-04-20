import React from "react";
import { CardBlock } from "./";

const Catalog = ({ items }) => {
	return (
		<div className="catalog">
			<div className="catalog__list">
				{items != null ? (
					items.length ? (
						items.map((card) => {
							return <CardBlock key={card.id} {...card} />;
						})
					) : items.length === 0 ? (
						<p>Ничего не найдено</p>
					) : null
				) : null}
			</div>
		</div>
	);
};

export default Catalog;
