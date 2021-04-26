import { combineReducers } from "redux";

import cards from "./cards";
import card from "./card";

const rootReducer = combineReducers({
	cards,
	card,
});

export default rootReducer;
