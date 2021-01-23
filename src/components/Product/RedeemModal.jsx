import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import theme from '../../styles/theme';
import styled from 'styled-components';

const RedeemModal = (props) => {
	const {
		redeemProduct,
		userPoints,
		productCost,
		productId,
		successRedeem
	} = props;
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				type="button"
				onClick={() => {
					handleOpen();
					redeemProduct(productId, productCost, userPoints);
				}}
			>
				Redeem now
			</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<Title id="transition-modal-title">
							{successRedeem
								? 'Congratulations!'
								: 'Ops... something went wrong!'}
						</Title>
						<p id="transition-modal-description">
							{successRedeem
								? "You've redeemed the product successfully"
								: 'Please try again in a few minutes.'}
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default RedeemModal;
const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: '#fffefe',
		border: 'none',
		boxShadow: theme.shadows[5],
		borderRadius: '10px',
		padding: theme.spacing(2, 4, 3),
		color: '#0AD4FA',
		fontWeight: 300,
		textAlign: 'center',
		outline: 'none'
	}
}));

const Button = styled.button`
	padding: 0.5rem 2.2rem;
	border: none;
	border-radius: 20px;
	background-color: #f2f1f1;
	color: ${theme.fonts.primaryColor};
	font-size: 0.9em;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: #c7c5c5;
		color: #fff;
	}
`;

const Title = styled.h3`
	font-weight: 500;
`;
