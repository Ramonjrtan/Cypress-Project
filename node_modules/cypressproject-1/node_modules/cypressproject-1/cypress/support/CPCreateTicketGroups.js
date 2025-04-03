import { cp_ticketdocument } from "./CPTicketDocumentGroups";
export function cp_addticket() {
    // Step 1: Click My Tickets
    cy.get('.tickets > a')
      .should('be.visible')
      .click();
    cy.log('✅ Success: Clicked My Tickets');
  
    // Wait until "My Tickets" page loads
    cy.contains('h1', 'My Tickets', { timeout: 60000 })
      .should("be.visible");
    cy.log('✅ Success: My Tickets page loaded');
  
    // Step 2: Click Add Ticket
    cy.contains('button', '+ Add Ticket')
      .should('be.visible')
      .click();
    cy.log('✅ Success: Clicked Add Ticket');
  
    // Wait until "Add Ticket" page loads
    cy.contains('h1', 'Add Ticket', { timeout: 60000 })
      .should("be.visible");
    cy.log('✅ Success: Add Ticket page loaded');
  
    // Step 3: Enter Issue Description
    cy.get('input[formcontrolname="Issue"]')
      .type('Client Portal Cypress Test Ticket');
    cy.log('✅ Success: Entered Issue Description');
  
    // Step 4: Enter Scope of Work
    cy.get('textarea[formcontrolname="ScopeOfWork"]')
      .type('SOW: Client Portal Cypress Test Ticket');
    cy.log('✅ Success: Entered Scope of Work');
  
    // Step 5: Click the Contract dropdown to open the options
    cy.get('mat-select[formcontrolname="Contract"]')
      .click();
    cy.log('✅ Success: Opened Contract dropdown');
  
    // Step 6: Select the desired contract
    cy.get('mat-option')
      .contains('Dispatch SOW CP Test (USE FOR TESTING)')
      .click();
    cy.log('✅ Success: Selected Contract');
    
    // Ensure dropdown closes
    cy.get('mat-select[formcontrolname="Contract"]')
      .should('not.have.class', 'mat-select-focused');
    cy.log('✅ Success: Contract dropdown closed');
  
    // Step 7: Click the Ticket Problem Code dropdown to open the options
    cy.get('mat-select[formcontrolname="TicketProblemCode"]')
      .click();
    cy.log('✅ Success: Opened Ticket Problem Code dropdown');
  
    // Step 8: Select "Cabling" from the dropdown
    cy.get('mat-option')
      .contains('Cabling')
      .click();
    cy.log('✅ Success: Selected Ticket Problem Code');
    
    // Ensure dropdown closes by clicking outside the dropdown
    cy.get('body').click();  // Click outside to close the dropdown

    // Verify dropdown is closed
    cy.get('mat-select[formcontrolname="TicketProblemCode"]')
      .should('not.have.class', 'mat-select-focused');
    cy.log('✅ Success: Ticket Problem Code dropdown closed');
  
    // Step 9: Click the End Client dropdown to open the options
    cy.get('ng-select[bindlabel="text"][bindvalue="id"]')
      .first()  // This will target the first matching element
      .scrollIntoView()
      .click();
    cy.log('✅ Success: Opened End Client dropdown');
  
    // Step 10: Type in the "Test Client (USE FOR TESTING)" to filter the options
    cy.get('ng-select[bindlabel="text"][bindvalue="id"]')
      .first()  // Target the same element as in Step 9
      .type('Test Client (USE FOR TESTING)', { timeout: 10000 });
    cy.log('✅ Success: Typed in Test Client');
  
    // Step 11: Select the client from the dropdown
    cy.get('.ng-dropdown-panel .ng-option')
      .contains('Test Client (USE FOR TESTING)')
      .click();
    cy.log('✅ Success: Selected End Client');
  
    // Step 12: Click the Country dropdown to open the options
    cy.get('ng-select[bindlabel="text"][bindvalue="id"]')
      .eq(1) // Use .eq() to target the second matching dropdown (similar to Step 9 and 10)
      .scrollIntoView()
      .click();
    cy.log('✅ Success: Opened Country dropdown');
  
    // Step 13: Type in "United States" to filter the options
    cy.get('ng-select[bindlabel="text"][bindvalue="id"]')
      .eq(1)  // Target the same dropdown element as in Step 12
      .type('United States', { timeout: 10000 });
    cy.log('✅ Success: Typed in United States');
  
    // Step 14: Select "United States" from the dropdown
    cy.get('.ng-dropdown-panel .ng-option')
      .contains('United States')
      .click();
    cy.log('✅ Success: Selected Country');
  
    // Step 15: Click the Location dropdown to open the options
    cy.get('ng-select[bindlabel="text"][bindvalue="id"]')
      .eq(2)  // Use .eq() to target the third matching dropdown (similar to Step 9-11)
      .scrollIntoView()
      .click();
    cy.log('✅ Success: Opened Location dropdown');
  
    // Step 16: Type in "Test location McD - Indianapolis - IN" to filter the options
    cy.get('ng-select[bindlabel="text"][bindvalue="id"]')
      .eq(2)  // Target the same dropdown element as in Step 15
      .type('Test location McD - Indianapolis - IN', { timeout: 10000 });
    cy.log('✅ Success: Typed in Test location');
  
    // Step 17: Select the location from the dropdown
    cy.get('.ng-dropdown-panel .ng-option')
      .contains('Test location McD - Indianapolis - IN')
      .click();
    cy.log('✅ Success: Selected Location');
    
    // Step 18: Open the date picker
    cy.get('input[formcontrolname="requestedResponseDate"]')
      .scrollIntoView()
      .click();
    cy.log('✅ Success: Opened Date Picker');
  
    // Wait for the date picker to open
    cy.wait(500);
  
    // Click the Cancel button (force click)
    cy.get('button.owl-dt-control-button')
      .contains('Cancel')
      .click({ force: true });
    cy.log('✅ Success: Clicked Cancel button on Date Picker');
  
    // Wait briefly for UI changes
    cy.wait(500);
  
    // Type the requested response date
    cy.get('input[formcontrolname="requestedResponseDate"]')
      .clear()
      .type('12/31/2025, 9:00 AM', { force: true });
    cy.log('✅ Success: Entered Requested Response Date');
  
    // Step 19: Click the Technician Level dropdown to open the options
    cy.get('ng-select[placeholder="Select Technical Level"]')
    .scrollIntoView()
    .click();
    cy.log('✅ Success: Opened Technician Level dropdown');

    // Step 20: Type in the "Standard Technician" to filter the options
    cy.get('ng-select[placeholder="Select Technical Level"]')
    .type('standard technician', { timeout: 10000 });
    cy.log('✅ Success: Typed in Standard Technician');

    // Step 21: Select the "Standard Technician" from the dropdown
    cy.get('.ng-dropdown-panel .ng-option')
    .contains('standard technician')
    .click();
    cy.log('✅ Success: Selected Technician Level');

    // Step 22: Click the Number of Technician dropdown to open the options
    cy.get('ng-select[placeholder="Select No Of Technicians"]')
    .scrollIntoView()
    .click();
    cy.log('✅ Success: Opened Number of Technicians dropdown');

    // Step 23: Type in "1" to filter the options
    cy.get('ng-select[placeholder="Select No Of Technicians"]')
    .type('1', { timeout: 10000 });
    cy.log('✅ Success: Typed in 1');

    // Step 24: Select "1" from the dropdown
    cy.get('.ng-dropdown-panel .ng-option')
    .contains('1')
    .click();
    cy.log('✅ Success: Selected Number of Technicians');
  
    // Step 25: Click Add button
    cy.get('button.btn.btn-default.btn-block')
      .click();
    cy.log('✅ Success: Clicked Add button');
  
    // Verify label "standard technician" is visible
    cy.contains('span.label.label-info', 'standard technician')
      .scrollIntoView()
      .should('be.visible');
    cy.log('✅ Success: Verified Standard Technician label');
  
    // Step 26: Enter Special Requirements
    cy.get('textarea[formcontrolname="SpecialRequirements"]')
      .scrollIntoView()
      .type('Special Requirements: Client Portal Cypress Test Ticket');
    cy.log('✅ Success: Entered Special Requirements');
  
    // Step 27: Enter Special Conditions
    cy.get('textarea[formcontrolname="SpecialConditions"]')
      .scrollIntoView()
      .type('Special Conditions: Client Portal Cypress Test Ticket');
    cy.log('✅ Success: Entered Special Conditions');
  
    // Step 28: Enter Ticket Required Tools
    cy.get('textarea[formcontrolname="TicketRequiredTools"]')
      .scrollIntoView()
      .type('Ticket Required Tools: Client Portal Cypress Test Ticket');
    cy.log('✅ Success: Entered Ticket Required Tools');

    //Add Document
    cp_ticketdocument();
    cy.log('✅ Success: Document added');
  
    // Step 29: Click Save button
    cy.get('button.btn.btn-info.btn-sm')
    .contains('Save')
    .click({ force: true });
    cy.log('✅ Success: Scrolled to Save button');
  
  
    // Step 30: Verify success message appears
    cy.get("div[aria-label='Success']", { timeout: 10000 })
      .should('be.visible');
    cy.log('✅ Success: Success message appeared');
  
    // Step 31: Ensure success message disappears before proceeding
    cy.get("div[aria-label='Success']", { timeout: 10000 })
      .should('not.exist');
    cy.log('✅ Success: Success message disappeared');
}
