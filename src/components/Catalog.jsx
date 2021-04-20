import React from "react";
import { Card } from "./";

const Catalog = ({ items, loading }) => {
	return (
		<div className="catalog">
			{loading && <p>Загрузка...</p>}
			<div className="catalog__list">
				{items != null ? (
					items.length ? (
						items.map((card) => {
							return <Card key={card.id} {...card} />;
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
