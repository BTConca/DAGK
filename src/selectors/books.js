// getVisibleBooks
export default (books, { text, sortBy, startYear, endYear }) => {
    return books.filter(book => {
        const textMatch =
            book.title.toLowerCase().includes(text.toLowerCase()) ||
            book.description.toLowerCase().includes(text.toLowerCase());

        const startYearMatch = typeof startYear !== 'number' || startYear <= book.published;
        const endYearMatch = typeof endYear !== 'number' || book.published <= endYear;

        return textMatch && startYearMatch && endYearMatch;
    }).sort((book1, book2) => {
        if (sortBy === 'title') {
            return book1.title.localeCompare(book2.title);
        } else if (sortBy === 'published') {
            return book1.published < book2.published ? -1 : 1;
        }
    });
}
