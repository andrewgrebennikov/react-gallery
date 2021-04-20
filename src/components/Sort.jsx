import React from "react";

const Sort = ({ activeSortValue, onChangeSort }) => {
	return (
		<div className="sort">
			<label htmlFor="">Сортировать по </label>
			<select value={activeSortValue} id="" onChange={onChangeSort}>
				<option value="default" disabled>
					Выбрать
				</option>
				<option value="likes">лайкам</option>
				<option value="comments">комментариям</option>
			</select>
		</div>
	);
};

export default Sort;
