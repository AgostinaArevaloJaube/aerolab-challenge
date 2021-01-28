import { useState } from 'react';

const usePagination = (data = [], itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);
	const maxPage = Math.ceil(data.length / itemsPerPage);

	function currentData() {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		return data.slice(begin, end);
	}

	function nextPage() {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
	}

	function prevPage() {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	}

	function jumpToPage(page) {
		const pageNumber = Math.max(1, page);
		setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
	}

	return {
		nextPage,
		prevPage,
		jumpToPage,
		currentData,
		currentPage,
		maxPage
	};
};

export default usePagination;
