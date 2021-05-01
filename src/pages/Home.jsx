import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, sortCards, filterCards } from "../redux/actions/cards";
import { Catalog, Filter, Sort } from "../components";

const Home = () => {
	const dispatch = useDispatch();
	let cards = useSelector(({ cards }) => cards.items);
	const activeSortValue = useSelector(({ cards }) => cards.sortBy);
	const activeFilterValue = useSelector(({ cards }) => cards.filterBy);
	const isLoading = useSelector(({ loading }) => loading.isLoading);

	const sortCardsBy = (items, sortBy) => {
		switch (sortBy) {
			case "likes":
				return items?.sort((current, next) => {
					return next.likes - current.likes;
				});
			case "comments":
				return items?.sort((current, next) => {
					return next.comments - current.comments;
				});
			default:
				return items;
		}
	};

	const filterCardsBy = (items, filterBy) => {
		return items?.filter((item) =>
			item.tags
				.split(", ")
				.join(" ")
				.toLowerCase()
				.includes(filterBy.toLowerCase())
		);
	};

	const finalCards = (items, filterBy, sortBy) => {
		return sortCardsBy(filterCardsBy(items, filterBy), sortBy);
	};

	cards = finalCards(cards, activeFilterValue, activeSortValue);

	const handleChangeSort = (event) => {
		dispatch(sortCards(event.target.value));
	};

	const handleChangeFilter = (event) => {
		dispatch(filterCards(event.target.value));
	};

	useEffect(() => {
		dispatch(fetchCards());
	}, [dispatch]);

	return (
		<>
			<h1 className="title">Галерея</h1>
			<Sort
				activeSortValue={activeSortValue}
				onChangeSort={handleChangeSort}
			/>
			<Filter
				onChangeFilter={handleChangeFilter}
				activeFilterValue={activeFilterValue}
			/>
			<Catalog items={cards} isLoading={isLoading} />
		</>
	);
};

export default Home;
