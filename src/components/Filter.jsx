import React, { useState } from "react";
import useDebounce from "./debounce";

const Filter = ({ activeFilterValue, onChangeFilter }) => {
	const debounceChange = useDebounce(onChangeFilter, 300);
	const [value, setValue] = useState(activeFilterValue);

	const handleChangeInput = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className="filter">
			<label htmlFor="">Фильтровать по тегам </label>
			<input
				type="text"
				placeholder="Введите название тега"
				onKeyUp={debounceChange}
				value={value}
				onChange={handleChangeInput}
			/>
		</div>
	);
};

export default Filter;
