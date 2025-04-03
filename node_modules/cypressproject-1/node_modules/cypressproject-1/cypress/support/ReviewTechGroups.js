export function po_reviewtech() {
    // Step 1: Click the Reviews tab
    cy.contains('button', 'Reviews')
      .should('exist')
      .should('be.visible')
      .click();
  
    cy.contains('div.title-content h3', 'Ratings')
      .should('be.visible');
  
    // Step 2: Click the New Rating button
    cy.contains('button', 'New Rating')
      .should('be.visible')
      .click();
  
    cy.get('fieldflow-dialog.ng-untouched.ng-pristine.ng-invalid')
      .find('div.header div')
      .should('contain.text', 'Add Ticket Rating');
    
    // Step 3: Click on the "Reviewer" dropdown to open it
    cy.get('ng-select[formcontrolname="reviewerId"]')
      .click();
  
    // Step 4: Select the option "Ramon-GMAIL (You)" from the dropdown
    cy.get('ng-select[formcontrolname="reviewerId"]')
      .find('.ng-dropdown-panel-items .ng-option')
      .contains('Ramon-GMAIL (You)')
      .click();
  
    // Step 5: Click on the "Technician" dropdown to open it
    cy.get('ng-select[formcontrolname="technicianId"]')
      .click();
  
    // Step 6: Select the option "TEST TECHNICIAN" from the dropdown
    cy.get('ng-select[formcontrolname="technicianId"]')
      .find('.ng-dropdown-panel-items .ng-option')
      .contains('TEST TECHNICIAN')
      .click();
  
    // Step 7: Click the Excellent radio button for the rating
    cy.get('#mat-radio-2 > .mdc-form-field > .mdc-label')
      .click();

    cy.get('#mat-radio-5 > .mdc-form-field > .mdc-label')
      .click();

    cy.get('#mat-radio-8 > .mdc-form-field > .mdc-label')
      .click();

    cy.get('#mat-radio-11 > .mdc-form-field > .mdc-label')
      .click();
  
    // Step 8: Select the 5-star rating
    cy.get('.br-unit') // Select all rating stars
      .eq(4) // Select the 5th star (index starts at 0)
      .click(); // Click to select the 5-star rating
  
    // Step 9: Click the Save button to submit the rating
    cy.contains('button', 'Save')
      .should('be.visible')
      .click();

     // Step 10: Verify success message appears
     cy.get("div[aria-label='Rating saved successfully']", { timeout: 10000 }) 
    .should('be.visible');

    // // Step 11: Ensure success message disappears before proceeding
    // cy.get("div[aria-label='Rating saved successfully']", { timeout: 10000 }) 
    // .should('not.exist');   
}
