import { combineReducers } from "redux";

import cards from "./cards";
import card from "./card";
import loading from "./loading";

const rootReducer = combineReducers({
	cards,
	card,
	loading,
});

export default rootReducer;
