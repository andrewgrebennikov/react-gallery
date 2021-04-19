export const fetchCards = () => (dispatch) => {
	fetch(
		"https://pixabay.com/api/?key=21157636-be398b2a266e9f0d9869a57c6&q=cats&image_type=all&per_page=100"
	)
		.then((resp) => resp.json())
		.then((json) =>
			dispatch({
				type: "FETCH_CARDS",
				payload: json.hits,
			})
		);
};

export const sortCards = (items, sortBy) => (dispatch) => {
	const cards = [...items];

	if (sortBy === "default") {
		return items;
	}

	if (sortBy === "likes") {
		cards.sort((current, next) => {
			return next.likes - current.likes;
		});
	}

	if (sortBy === "comments") {
		cards.sort((current, next) => {
			return next.comments - current.comments;
		});
	}

	dispatch({
		type: "SORT_CARDS",
		payload: {
			items: cards,
			sortBy,
		},
	});
};

export const filterCards = (items, filterBy) => (dispatch) => {
	dispatch({
		type: "FILTER_CARDS_BY_TAGS",
		payload: {
			items:
				filterBy === ""
					? items
					: items.filter((item) =>
							item.tags
								.split(", ")
								.join("")
								.toLowerCase()
								.includes(filterBy.toLowerCase())
					  ),
			filterBy,
		},
	});
};
