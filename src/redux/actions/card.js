import { setLoading } from "./loading";

export const fetchCard = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	await fetch(
		`https://pixabay.com/api/?key=21157636-be398b2a266e9f0d9869a57c6&id=${id}`
	)
		.then((resp) => resp.json())
		.then((json) => {
			dispatch(setCard(json.hits[0]));
			dispatch(setLoading(false));
		});
};

export const setCard = (item) => ({
	type: "SET_CARD",
	payload: item,
});

export const removeCard = () => ({
	type: "SET_CARD",
	payload: null,
});
