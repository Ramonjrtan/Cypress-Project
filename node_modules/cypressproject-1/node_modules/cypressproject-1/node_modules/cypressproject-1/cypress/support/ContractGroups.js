export function navigate_contract() {
    // Step 1: Navigate to the contract details page
    cy.visit('https://core.dispatch1.com/delivery/contract-detail/client/10001/contract/2706/overview');

    // Step 2: Ensure the page is fully loaded
    // cy.get('h1', { timeout: 60000 }).should('contain', 'Contract Details');
    cy.get("div.header-wrapper h1", { timeout: 60000 })
    .should("be.visible")
    .and("contain", "Contract Details");
  };