const initialState = {
	items: null,
	sortBy: "default",
	filterBy: "",
};

const cards = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_CARDS":
			return {
				...state,
				items: payload,
			};
		case "SET_SORT_BY":
			return {
				...state,
				sortBy: payload,
			};
		case "SET_FILTER_BY":
			return {
				...state,
				filterBy: payload,
			};
		default:
			return state;
	}
};

export default cards;
