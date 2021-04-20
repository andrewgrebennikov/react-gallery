import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, sortCards, filterCards } from "../redux/actions/cards";
import { Catalog, Filter, Sort } from "../components";

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

	useEffect(() => {
		dispatch(fetchCards());
		setLoading(false);
	}, []);

	return (
		<>
			<h1 className="title">Галерея</h1>
			<Sort activeSortValue={activeSortValue} onChangeSort={handleChangeSort} />
			<Filter onChangeFilter={handleChangeFilter} />
			{loading && <p>Загрузка...</p>}
			<Catalog items={filteredCards} />
		</>
	);
};

export default Home;
