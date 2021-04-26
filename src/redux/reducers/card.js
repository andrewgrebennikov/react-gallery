const initialState = {
	item: null,
};

const card = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_CARD":
			return {
				...state,
				item: payload,
			};
		default:
			return state;
	}
};

export default card;
