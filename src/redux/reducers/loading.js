const initialState = {
	isLoading: false,
};

const loading = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_LOADING":
			return {
				...state,
				isLoading: payload,
			};
		default:
			return state;
	}
};

export default loading;
