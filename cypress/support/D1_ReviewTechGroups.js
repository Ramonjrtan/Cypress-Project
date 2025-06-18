//  Cypress & Environment
import env from '../../cypress.env.json';

export function po_reviewtech() {
  // Step 1: Click the Reviews tab
  cy.contains(env.reviewsTabButton, 'Reviews')
    .should('exist')
    .should('be.visible')
    .click();

  cy.contains(env.ratingsHeader, 'Ratings')
    .should('be.visible');

  // Step 2: Click the New Rating button
  cy.contains(env.newRatingButton, 'New Rating')
    .should('be.visible')
    .click();

  cy.get(env.ratingModal)
    .find(env.ratingModalHeader)
    .should('contain.text', 'Add Ticket Rating');

    cy.get('.content > .loading-wrapper').should('not.exist'); // Wait until the loading spinner disappears

  // Step 3: Click on the "Reviewer" dropdown to open it
  cy.get(env.reviewerDropdown).click();

  // Step 4: Select the option "Ramon-GMAIL (You)" from the dropdown
  cy.get(env.reviewerDropdown)
    .find('.ng-dropdown-panel-items .ng-option')
    .contains('Ramon-GMAIL (You)')
    .click();

  // Step 5: Click on the "Technician" dropdown to open it
  cy.get(env.technicianratingDropdown).click();

  // Step 6: Select the option "TEST TECHNICIAN" from the dropdown
  cy.get(env.technicianratingDropdown)
    .find('.ng-dropdown-panel-items .ng-option')
    .contains('TEST TECHNICIAN')
    .click();

  // Step 7: Click the Excellent radio buttons
  cy.get(env.ratingRadio1).click();
  cy.get(env.ratingRadio2).click();
  cy.get(env.ratingRadio3).click();
  cy.get(env.ratingRadio4).click();

  // Step 8: Select the 5-star rating
  cy.get(env.starRating).eq(4).click();

  // Step 9: Click the Save button to submit the rating
  cy.contains(env.saveRatingButton, 'Save')
    .should('be.visible')
    .click();

  // Step 10: Verify success message appears
  cy.get(env.ratingSuccessMessage, { timeout: 10000 })
    .should('be.visible');

  // Step 11: Optionally check disappearance of the success message
  // cy.get(env.ratingSuccessMessage, { timeout: 10000 }) 
  //   .should('not.exist');
}
