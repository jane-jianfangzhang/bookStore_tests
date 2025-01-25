import bookStore from "../support/pageObjects/bookStorePage";

describe('bookStorePage', () => {

  beforeEach(() => {
    cy.visitPage('books');
  })

  it('Search by Title/author/Publisher: User should be able to get search result with valid input.', () => {
    cy.fixture('book.json')
      .then((searchData) => {
        const book = searchData.validBook;
    
        Object.keys(book).forEach((key) => {
          const value = book[key];
          cy.log(`Search books by ${key}`);

        bookStore.clickSearchBox();
        bookStore.inputSearch(value);
        bookStore.verifySearchResults(value);
        });

      });
    });

      it('User should not be able to get search result if there is no result.', () => {
        cy.fixture('book.json')
          .then((searchData) => {
            const book = searchData.invalidBook;
        
            Object.keys(book).forEach((key) => {
              const value = book[key];
              cy.log(`Search books by: ${key}`);
    
            bookStore.clickSearchBox();
            bookStore.inputSearch(value);
            cy.log(`Input search books by: ${key}`);
            bookStore.verifyNoRowFound(searchData.messages.noRowsFound);
            });
    
          })
    
      })

      it('User should be able to access the book page by clicking the book title link.', () => {
        cy.fixture('book.json')
          .then((searchData) => {
            const bookTitle = searchData.validBook.Title;
            bookStore.clickSearchBox();
            bookStore.inputSearch(bookTitle);
            cy.log("Verify the book is able to open and redirect to correct page.");
            bookStore.verifyOpenBook(bookTitle);
            });
    
          })
    
      })


  

