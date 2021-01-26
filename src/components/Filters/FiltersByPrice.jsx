import React, { useContext, useState } from 'react';
import { FilterContext } from '../Context/FilterContext';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const FiltersByPrice = () => {
	const classes = useStyles();
	const [filter, setFilter] = useContext(FilterContext);
	const [open, setOpen] = useState(false);

	function handleFilters(event) {
		let { name, value } = event.target;
		const newData = { ...filter, [name]: value };
		setFilter(newData);
		console.log(name, value);
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
					Filter by Price
				</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={filter.price}
					onChange={handleFilters}
					name="price"
				>
					<MenuItem value={'all prices'}>
						<em>All Prices</em>
					</MenuItem>
					<MenuItem value={'lowest'}>Lowest Price</MenuItem>
					<MenuItem value={'highest'}>Highest Price</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};
export default FiltersByPrice;

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200
	}
}));
