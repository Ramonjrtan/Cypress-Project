export function add_activity(){
  // Step 1: Click on Activities tab
  cy.contains('button', 'Activities')
    .should('be.visible')
    .click();

  // Step 2: Wait until the page is fully loaded
  cy.waitUntil(() => cy.get('body').should('not.have.class', 'loading'), {
    timeout: 10000,
    interval: 500,
  });

  // Step 3: Click "Add Activity" after ensuring it's visible
  cy.contains('button', 'Add Activity')
    .should('be.visible')
    .click();

  // Step 4: Ensure modal appears
  cy.get('.cds--modal-container.cds--modal-container--lg', { timeout: 20000 })
    .should('exist')
    .and('be.visible');

  // Step 5: Ensure modal header appears
  cy.get('.cds--modal-header.default', { timeout: 10000 })
    .should('contain', 'Add Activity');

  // Function to search and select the activity
  const searchAndSelectActivity = () => {
    cy.get("input[placeholder='Activity Name...']")
      .wait(5000)
      .should('be.visible')
      .type('Automation Test Activity')
      .wait(5000);

    cy.get("td[title='Automation Test Activity']", { timeout: 10000 })
      .should('be.visible')
      .then(($activity) => {
        if ($activity.is(':visible')) {
          cy.wrap($activity).click();
        } else {
          cy.clear("td[title='Automation Test Activity");
          cy.wait(5000);
          searchAndSelectActivity();
        }
      });

      cy.get('input[type="checkbox"]', { timeout: 10000 })
      .click({ force: true });
  };

  // Step 6: Search and select activity
  searchAndSelectActivity();

  // Step 9: Click on Save Activity
  cy.get('.buttons > .cds--btn--primary').click({ force: true });


  // Step 10: Confirm success message appears
  cy.get("div[aria-label='Saved Successfully']", { timeout: 10000 })
    .should('be.visible');

  // Step 11: Ensure success message disappears before proceeding
  cy.get("img[src='assets/images/D1.png']").should('not.exist');
}