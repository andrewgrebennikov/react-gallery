export const fetchCard = (id) => async (dispatch) => {
	await fetch(
		`https://pixabay.com/api/?key=21157636-be398b2a266e9f0d9869a57c6&id=${id}`
	)
		.then((resp) => resp.json())
		.then((json) => dispatch(setCard(json.hits[0])));
};

export const setCard = (item) => ({
	type: "SET_CARD",
	payload: item,
});
