export function po_assigntech() {
    // Step 1: Click on PO Assignment tab
    cy.get('button[id^="n-tab-"][role="tab"]') // Matches buttons with dynamic IDs
      .contains('Assignment') // Ensures we target the correct tab
      .scrollIntoView() // Scrolls to make sure it's visible
      .should('be.visible')
      .click();
  
    // Step 2: Wait until the "Purchase Order" page is fully loaded
    cy.contains('h1', 'Purchase Order', { timeout: 10000 })
      .should('be.visible');
  
    // Step 3: Click "Create Technician Assignment" button
    cy.get('fieldflow-button[routerlink="assign-technician"] button.primary')
      .should('be.visible')
      .click();

      // Refresh the page
    cy.reload();
  
    // Step 4: Wait until the "Assign Technician" page is fully loaded
    cy.contains('h1', 'Assign Technician', { timeout: 10000 })
      .should('be.visible');

      //Wait until the radio button is visible
      cy.get('cds-radio input[type="radio"]', { timeout: 60000 }) // Selects all radio buttons
      .should('exist') // Ensures they exist in the DOM first
      .and('be.visible'); // Then ensure the radio button is visible   
  
    // Step 5: Click the first radio button to select a technician
    cy.get('cds-radio input[type="radio"]', { timeout: 30000 }) // Selects all radio buttons
      .should('exist') // Ensures they are in the DOM
      .and('be.visible') // Ensures they are visible
      .first() // Selects the first one
      .click({ force: true }); // Clicks even if it's inside an overflowed container
  
    // Step 6: Click the "Finalize Assignment" button
    cy.get('fieldflow-button button.primary') // Selects the button inside <fieldflow-button>
      .contains('Finalize Assignment') // Ensures we target the correct button
      .scrollIntoView() // Scrolls to ensure visibility
      .should('be.visible') // Ensures button is visible
      .click();
  
    // Step 7: Verify success message appears
    cy.get("div[aria-label='Successfully assigned technician to purchase order']", { timeout: 10000 }) 
      .should('be.visible');
  
    // Step 8: Ensure success message disappears before proceeding
    cy.get("div[aria-label='Successfully assigned technician to purchase order']", { timeout: 10000 }) 
      .should('not.exist');
  
    // Step 9: Verify "Technician Assigned" section is visible
    cy.get('h4').contains('Technician Assigned').should('be.visible');
  
    // Step 10: Click on "Purchase Order" breadcrumb to navigate back
    cy.get('lib-breadcrumb-item a[href*="/buy"]') // Finds the breadcrumb link containing "/buy"
      .should('be.visible') // Ensures it is visible before clicking
      .click();
  
    // Step 11: Wait until the "Add PO" section is visible
    cy.contains('h3', 'Add PO', { timeout: 10000 }) // Locate the <h3> with "Add PO"
      .should('be.visible'); // Ensure it is visible before proceeding
  }