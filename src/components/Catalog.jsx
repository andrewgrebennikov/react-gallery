import React from "react";
import { Card } from "./";

const Catalog = ({ items, isLoading }) => {
	return (
		<div className="catalog">
			{!items ? (
				isLoading && <p>Загрузка...</p>
			) : (
				<div className="catalog__list">
					{items.length === 0 ? (
						<p>Ничего не найдено</p>
					) : (
						items.map((card) => {
							return <Card key={card.id} {...card} />;
						})
					)}
				</div>
			)}
		</div>
	);
};

export default Catalog;
