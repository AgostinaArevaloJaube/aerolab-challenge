import { useState } from 'react';

const usePagination = (data = [], itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);
	const maxPage = Math.ceil(data.length / itemsPerPage);

	function currentData() {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		return data.slice(begin, end);
	}

	function jumpToPage(page) {
		const pageNumber = Math.max(1, page);
		setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
	}

	return {
		jumpToPage,
		currentData,
		currentPage,
		maxPage
	};
};

export default usePagination;
