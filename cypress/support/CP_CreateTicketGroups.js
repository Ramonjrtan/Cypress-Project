import env from '../../cypress.env.json';
import { cp_ticketdocument } from "./CP_TicketDocumentGroups";

export function cp_addticket() {
  // Step 1: Click My Tickets
  cy.get(env.cpMyTicketsLink).should('be.visible').click();
  cy.log('✅ Success: Clicked My Tickets');

  cy.contains('h1', 'My Tickets', { timeout: 60000 }).should("be.visible");
  cy.log('✅ Success: My Tickets page loaded');

  cy.contains('button', '+ Add Ticket').should('be.visible').click();
  cy.log('✅ Success: Clicked Add Ticket');

  cy.contains('h1', 'Add Ticket', { timeout: 60000 }).should("be.visible");
  cy.log('✅ Success: Add Ticket page loaded');

  cy.get(env.cpIssueDescription).type('Client Portal Cypress Test Ticket');
  cy.log('✅ Success: Entered Issue Description');

  cy.get(env.cpScopeOfWork).type('SOW: Client Portal Cypress Test Ticket');
  cy.log('✅ Success: Entered Scope of Work');

  cy.get(env.cpContractDropdown).click();
  cy.log('✅ Success: Opened Contract dropdown');

  cy.get(env.cpContractOption).contains('Dispatch SOW CP Test (USE FOR TESTING)').click();
  cy.get(env.cpContractDropdown).should('not.have.class', 'mat-select-focused');
  cy.log('✅ Success: Selected Contract');

  cy.get(env.cpTicketProblemDropdown).click();
  cy.get(env.cpTicketProblemOption).contains('Cabling').click();
  cy.get('body').click();
  cy.get(env.cpTicketProblemDropdown).should('not.have.class', 'mat-select-focused');
  cy.log('✅ Success: Selected Ticket Problem Code');

  cy.get(env.cpEndClientDropdown).first().scrollIntoView().click();
  cy.get(env.cpEndClientDropdown).first().type('Test Client (USE FOR TESTING)', { timeout: 10000 });
  cy.get(env.cpDropdownOption).contains('Test Client (USE FOR TESTING)').click();
  cy.log('✅ Success: Selected End Client');

  cy.get(env.cpCountryDropdown).eq(1).scrollIntoView().click();
  cy.get(env.cpCountryDropdown).eq(1).type('United States', { timeout: 10000 });
  cy.get(env.cpDropdownOption).contains('United States').click();
  cy.log('✅ Success: Selected Country');

  cy.get(env.cpLocationDropdown).eq(2).scrollIntoView().click();
  cy.get(env.cpLocationDropdown).eq(2).type('Test location McD - Indianapolis - IN', { timeout: 10000 });
  cy.get(env.cpDropdownOption).contains('Test location McD - Indianapolis - IN').click();
  cy.log('✅ Success: Selected Location');

  cy.get(env.cpResponseDateInput).scrollIntoView().click();
  cy.wait(500);
  cy.get(env.cpDatePickerCancel).contains('Cancel').click({ force: true });
  cy.wait(500);
  cy.get(env.cpResponseDateInput).clear().type('12/31/2025, 9:00 AM', { force: true });
  cy.log('✅ Success: Entered Requested Response Date');

  cy.get(env.cpTechnicianLevelDropdown).scrollIntoView().click();
  cy.get(env.cpTechnicianLevelDropdown).type('standard technician', { timeout: 10000 });
  cy.get(env.cpDropdownOption).contains('standard technician').click();
  cy.log('✅ Success: Selected Technician Level');

  cy.get(env.cpNumTechniciansDropdown).scrollIntoView().click();
  cy.get(env.cpNumTechniciansDropdown).type('1', { timeout: 10000 });
  cy.get(env.cpDropdownOption).contains('1').click();
  cy.log('✅ Success: Selected Number of Technicians');

  cy.get(env.cpAddTechnicianButton).click();
  cy.contains('span.label.label-info', 'standard technician').scrollIntoView().should('be.visible');
  cy.log('✅ Success: Verified Standard Technician label');

  cy.get(env.cpSpecialRequirements).scrollIntoView().type('Special Requirements: Client Portal Cypress Test Ticket');
  cy.get(env.cpSpecialConditions).scrollIntoView().type('Special Conditions: Client Portal Cypress Test Ticket');
  cy.get(env.cpRequiredTools).scrollIntoView().type('Ticket Required Tools: Client Portal Cypress Test Ticket');
  cy.log('✅ Success: Filled additional ticket details');

  // cp_ticketdocument();
  // cy.log('✅ Success: Document added');

  cy.get(env.cpSaveButton).contains('Save').click({ force: true });
  cy.get(env.cpSuccessMessage, { timeout: 100000 }).should('be.visible');
  cy.get(env.cpSuccessMessage, { timeout: 100000 }).should('not.exist');
  cy.log('✅ Success: Ticket saved and confirmation verified');

  // cy.get('tbody tr').each(($row) => {
  //   // Extract the ticket number from the specific column
  //   cy.wrap($row)
  //     .find('td:nth-child(2) .ticket-no') // Assuming the ticket number is in the second <td> of each row
  //     .invoke('text')
  //     .then((ticketNumber) => {
  //       // Log the ticket number
  //       cy.log(ticketNumber.trim()); // .trim() to remove any extra spaces
}
