import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { FilterContext } from '../Context/FilterContext';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const FiltersByCategory = () => {
	const classes = useStyles();
	const [filter, setFilter] = useContext(FilterContext);
	const [open, setOpen] = useState(false);
	const [productData] = useContext(ProductContext);
	const categories = [
		...new Set(productData.map((product) => product.category))
	].sort();

	function handleFilters(event) {
		let { name, value } = event.target;
		const newData = { ...filter, [name]: value.toLowerCase() };
		setFilter(newData);
	}

	function handleClose() {
		setOpen(false);
	}

	function handleOpen() {
		setOpen(true);
	}

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel
					style={{ color: '#0AD4FA' }}
					id="demo-controlled-open-select-label"
				>
					Filter by Category
				</InputLabel>
				<Select
					style={{ color: '#616161' }}
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={filter.category}
					onChange={handleFilters}
					name="category"
				>
					<MenuItem value={'all categories'}>
						<em>All Categories</em>
					</MenuItem>
					{categories.map((category) => (
						<MenuItem key={category} value={category.toLowerCase()}>
							{category}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
export default FiltersByCategory;

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200
	}
}));
