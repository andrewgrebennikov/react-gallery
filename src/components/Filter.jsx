import React from "react";
import useDebounce from "./debounce";

const Filter = ({ onChangeFilter }) => {
	const debounceChange = useDebounce(onChangeFilter, 300);

	return (
		<div className="filter">
			<label htmlFor="">Фильтровать по тегам </label>
			<input
				type="text"
				placeholder="Введите название тега"
				onKeyUp={debounceChange}
			/>
		</div>
	);
};

export default Filter;
