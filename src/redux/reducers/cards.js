const initialState = {
	items: null,
	filteredItems: null,
	sortBy: "default",
	filterBy: "",
};

const cards = (state = initialState, action) => {
	if (action.type === "FETCH_CARDS") {
		return {
			...state,
			items: action.payload,
			filteredItems: action.payload,
			sortBy: "default",
		};
	}
	if (action.type === "SORT_CARDS") {
		return {
			...state,
			sortBy: action.payload.sortBy,
			filteredItems: action.payload.items,
		};
	}
	if (action.type === "FILTER_CARDS_BY_TAGS") {
		return {
			...state,
			sortBy: "default",
			filterBy: action.payload.filterBy,
			filteredItems: action.payload.items,
		};
	}
	return state;
};

export default cards;
