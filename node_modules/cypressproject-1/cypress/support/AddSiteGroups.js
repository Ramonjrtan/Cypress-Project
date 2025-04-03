export function add_site() {
  // Step 1: Click on Sites tab
  cy.get('button').contains('Sites')
    .should('be.visible')
    .click();

  // Step 2: Wait until "Site Info" header is loaded
  cy.get("h3", { timeout: 20000 })
    .should("be.visible")
    .and("contain", "Site Info");

  // Step 3: Select "End Client" from the dropdown
  cy.get(".ng-value-container")
    .should("be.visible")
    .click()
    .type("Test Client (USE FOR TESTING){enter}");

  // Step 4: Click "Add Location" button
  cy.contains("button", "Add Location")
    .scrollIntoView()
    .should("be.visible")
    .and("not.be.disabled")
    .click();

  // Step 5: Ensure modal appears
  cy.get(".cds--modal-container.cds--modal-container--lg", { timeout: 20000 })
    .should("exist")
    .and("be.visible");

  // Step 6: Wait for modal header
  cy.get(".cds--modal-header.default", { timeout: 10000 })
    .should("contain", "Select Site");

  // Step 7: Search for site location
  cy.get("input[placeholder='Search...']")
    .should("be.visible")
    .clear()
    .type("Test location McD")
    .wait(3000);

  // Step 8: Select the radio button
  cy.get(".cds--radio-button__appearance")
    .should("exist")
    .click({ force: true })
    .wait(3000);;

  // Step 9: Click "Save Client Site"
  // cy.get("button.cds--btn.cds--btn--primary")
  //   .should("be.visible")
  //   .click();
  cy.contains("button", "Save Client Site")
   .should("be.visible")
   .click();

  // Step 10: Verify success message
  // cy.get("div[aria-label='Site updated']")
  //   .should("be.visible")
  //   .should("have.text", " Site updated ")
  //   .wait(3000);

    cy.get("div[aria-label='Site updated']", { timeout: 10000 }) 
    .should('be.visible');

  // Step 11: Ensure success message disappears before proceeding
  cy.get("div[aria-label='Site updated']", { timeout: 10000 }) 
    .should('not.exist');

  cy.log("✅ Success message appeared and disappeared.");
}