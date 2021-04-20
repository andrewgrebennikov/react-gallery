import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../redux/actions/cards";
import { useParams } from "react-router-dom";
import { CardTags } from "../components";

const Card = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const cards = useSelector(({ cards }) => cards.items);
	const detailsCard = cards?.find((card) => card.id === parseInt(id));

	useEffect(() => {
		dispatch(fetchCards());
	}, [dispatch]);

	return (
		<>
			<h1 className="title">Изображение</h1>
			{detailsCard ? (
				<div className="card-detailes">
					<img
						src={detailsCard.webformatURL}
						alt={detailsCard.type}
						className="card-detailes__img"
						width={detailsCard.webformatWidth}
						height={detailsCard.webformatHeight}
						loading="lazy"
					/>
					<p className="card-detailes__info">
						Количество лайков: <b>{detailsCard.likes}</b>
					</p>
					<p className="card-detailes__info">
						Количество комментариев: <b>{detailsCard.comments}</b>
					</p>
					<CardTags tags={detailsCard.tags} className="card-detailes__tags" />
					<table className="card-detailes__table">
						<tbody>
							{Object.entries(detailsCard).map(([key, value], index) => {
								return (
									<tr key={index} className="card-detailes__tr">
										<th className="card-detailes__th">{key}</th>
										<td className="card-detailes__td">{value}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				<p>Загрузка...</p>
			)}
		</>
	);
};

export default Card;
