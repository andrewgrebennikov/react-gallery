import { setLoading } from "./loading";

export const fetchCards = () => async (dispatch) => {
	dispatch(setLoading(true));
	await fetch(
		"https://pixabay.com/api/?key=21157636-be398b2a266e9f0d9869a57c6&q=cats&image_type=all&per_page=100"
	)
		.then((resp) => resp.json())
		.then((json) => {
			dispatch(setCards(json.hits));
			dispatch(setLoading(false));
		});
};

export const setCards = (items) => ({
	type: "SET_CARDS",
	payload: items,
});

export const sortCards = (sortBy) => ({
	type: "SET_SORT_BY",
	payload: sortBy,
});

export const filterCards = (filterBy) => ({
	type: "SET_FILTER_BY",
	payload: filterBy,
});
