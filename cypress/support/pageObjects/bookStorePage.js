import { log } from "console";

class bookStore {
   get searchBox() {
      return cy.get('#searchBox');
   }

   // The element that looks like a search button appears to just be an icon 
   // and not a button... Or maybe it's a BUG.
   // get searchButton() {
   //    return cy.get('#basic-addon2');
   // }

   get booksTable() {
      return cy.get('.ReactTable');
   }

   get noRowsElement() {
      return cy.get('.rt-noData');
   }

   get getBookLink() {
      return cy.get('[id^="see-book-"]');
   }

   get bookContents() {
      return cy.get('#app');
   }

   clickSearchBox() {
      this.searchBox.click();
   }

   //Input search info in the searchbox.
   inputSearch(searchInfo) {
      this.searchBox.should('not.be.disabled');
      this.searchBox.clear();
      this.searchBox.should('have.value', '');
      this.searchBox.type(searchInfo);
   }

   // searchButtonClick() {
   //    this.searchButton.click();
   // }

   //Verify the search reasults.
   verifySearchResults(searchResult) {
      this.booksTable.each(($e1) => {
         cy.wrap($e1).should('contain.text', searchResult);
      })

   }
   //Verify there is no result in the search table.
   verifyNoRowFound(noRowsFound) {
      this.booksTable.should('contain.text', noRowsFound)
   }
   //Verify the book link works fine and able to redirect to the book page.
   verifyOpenBook() {
      this.getBookLink.click();
      this.bookContents.should('not.be.empty')
   }

   // verifySearchResultsNoneExist() {     
   //    cy.log("### TABLE search ELEMENT: ");
   //    this.booksTable.each(($e1) => {
   //       cy.log($e1)
   //       cy.wrap($e1).should('contain.text', '');
   //    })
   // }

}

export default new bookStore();