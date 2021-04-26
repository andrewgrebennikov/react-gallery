import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCard } from "../redux/actions/card";
import { CardTags } from "../components";

const Card = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const card = useSelector(({ card }) => card.item);

	useEffect(() => {
		dispatch(fetchCard(id));
	}, [dispatch, id]);

	return (
		<>
			<h1 className="title">Изображение</h1>
			{card ? (
				<div className="card-details">
					<img
						src={card.webformatURL}
						alt={card.type}
						className="card-details__img"
						width={card.webformatWidth}
						height={card.webformatHeight}
						loading="lazy"
					/>
					<p className="card-details__info">
						Количество лайков: <b>{card.likes}</b>
					</p>
					<p className="card-details__info">
						Количество комментариев: <b>{card.comments}</b>
					</p>
					<CardTags tags={card.tags} className="card-details__tags" />
					<table className="card-details__table">
						<tbody>
							{Object.entries(card).map(([key, value], index) => {
								return (
									<tr key={index} className="card-details__tr">
										<th className="card-details__th">{key}</th>
										<td className="card-details__td">{value}</td>
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
