import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, sortCards, filterCards } from "../redux/actions/cards";
import useDebounce from "../components/debounce";
import Card from "../components/CardBlock";

const Home = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const cards = useSelector(({ cards }) => cards.items);
	const filteredCards = useSelector(({ cards }) => cards.filteredItems);
	const activeSortValue = useSelector(({ cards }) => cards.sortBy);

	const handleChangeSort = (event) => {
		dispatch(sortCards(filteredCards, event.target.value));
	};

	const handleChangeFilter = (event) => {
		dispatch(filterCards(cards, event.target.value));
	};

	const debounceChange = useDebounce(handleChangeFilter, 1000);

	useEffect(() => {
		dispatch(fetchCards());
		setLoading(false);
	}, []);

	return (
		<>
			<h1 className="title">Галерея</h1>
			<div className="sort">
				<label htmlFor="">Сортировать по </label>
				<select value={activeSortValue} id="" onChange={handleChangeSort}>
					<option value="default" disabled>
						Выбрать
					</option>
					<option value="likes">лайкам</option>
					<option value="comments">комментариям</option>
				</select>
			</div>
			<div className="filter">
				<label htmlFor="">Фильтровать по тегам </label>
				<input
					type="text"
					placeholder="Введите название тега"
					onKeyUp={debounceChange}
				/>
			</div>
			{loading && <p>Загрузка...</p>}
			<div className="catalog">
				<div className="catalog__list">
					{filteredCards != null ? (
						filteredCards.length ? (
							filteredCards.map((card) => {
								return <Card key={card.id} {...card} />;
							})
						) : filteredCards.length === 0 ? (
							<p>Ничего не найдено</p>
						) : null
					) : null}
				</div>
			</div>
		</>
	);
};

export default Home;
