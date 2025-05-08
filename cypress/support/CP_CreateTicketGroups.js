import env from '../../cypress.env.json';
import { cp_ticketdocument } from "./CP_TicketDocumentGroups";

export function cp_addticket() {
  // Step 1: Click My Tickets
  cy.get(env.clientPortal.MyTicketsLink).should('be.visible').click();
  cy.log('✅ Success: Clicked My Tickets');

  cy.contains('h1', 'My Tickets', { timeout: 60000 }).should("be.visible");
  cy.log('✅ Success: My Tickets page loaded');

  cy.contains('button', '+ Add Ticket').should('be.visible').click();
  cy.log('✅ Success: Clicked Add Ticket');

  cy.contains('h1', 'Add Ticket', { timeout: 60000 }).should("be.visible");
  cy.log('✅ Success: Add Ticket page loaded');

  cy.get(env.clientPortal.IssueDescription).type('Client Portal Cypress Test Ticket');
  cy.log('✅ Success: Entered Issue Description');

  cy.get(env.clientPortal.ScopeOfWork).type('SOW: Client Portal Cypress Test Ticket');
  cy.log('✅ Success: Entered Scope of Work');

  cy.get(env.clientPortal.ContractDropdown).click();
  cy.log('✅ Success: Opened Contract dropdown');

  cy.get(env.clientPortal.ContractOption).contains('Dispatch SOW CP Test (USE FOR TESTING)').click();
  cy.get(env.clientPortal.ContractDropdown).should('not.have.class', 'mat-select-focused');
  cy.log('✅ Success: Selected Contract');

  cy.get(env.clientPortal.TicketProblemDropdown).click();
  cy.get(env.clientPortal.TicketProblemOption).contains('Cabling').click();
  cy.get('body').click();
  cy.get(env.clientPortal.TicketProblemDropdown).should('not.have.class', 'mat-select-focused');
  cy.log('✅ Success: Selected Ticket Problem Code');

  cy.get(env.clientPortal.EndClientDropdown).first().scrollIntoView().click();
  cy.get(env.clientPortal.EndClientDropdown).first().type('Test Client (USE FOR TESTING)', { timeout: 10000 });
  cy.get(env.clientPortal.DropdownOption).contains('Test Client (USE FOR TESTING)').click();
  cy.log('✅ Success: Selected End Client');

  cy.get(env.clientPortal.CountryDropdown).eq(1).scrollIntoView().click();
  cy.get(env.clientPortal.CountryDropdown).eq(1).type('United States', { timeout: 10000 });
  cy.get(env.clientPortal.DropdownOption).contains('United States').click();
  cy.log('✅ Success: Selected Country');

  cy.get(env.clientPortal.LocationDropdown).eq(2).scrollIntoView().click();
  cy.get(env.clientPortal.LocationDropdown).eq(2).type('Test location McD - Indianapolis - IN', { timeout: 10000 });
  cy.get(env.clientPortal.DropdownOption).contains('Test location McD - Indianapolis - IN').click();
  cy.log('✅ Success: Selected Location');

  cy.get(env.clientPortal.ResponseDateInput).scrollIntoView().click();
  cy.wait(500);
  cy.get(env.clientPortal.DatePickerCancel).contains('Cancel').click({ force: true });
  cy.wait(500);
  cy.get(env.clientPortal.ResponseDateInput).clear().type('12/31/2025, 9:00 AM', { force: true });
  cy.log('✅ Success: Entered Requested Response Date');

  cy.get(env.clientPortal.TechnicianLevelDropdown).scrollIntoView().click();
  cy.get(env.clientPortal.TechnicianLevelDropdown).type('standard technician', { timeout: 10000 });
  cy.get(env.clientPortal.DropdownOption).contains('standard technician').click();
  cy.log('✅ Success: Selected Technician Level');

  cy.get(env.clientPortal.NumTechniciansDropdown).scrollIntoView().click();
  cy.get(env.clientPortal.NumTechniciansDropdown).type('1', { timeout: 10000 });
  cy.get(env.clientPortal.DropdownOption).contains('1').click();
  cy.log('✅ Success: Selected Number of Technicians');

  cy.get(env.clientPortal.AddTechnicianButton).click();
  cy.contains('span.label.label-info', 'standard technician').scrollIntoView().should('be.visible');
  cy.log('✅ Success: Verified Standard Technician label');

  cy.get(env.clientPortal.SpecialRequirements).scrollIntoView().type('Special Requirements: Client Portal Cypress Test Ticket');
  cy.get(env.clientPortal.SpecialConditions).scrollIntoView().type('Special Conditions: Client Portal Cypress Test Ticket');
  cy.get(env.clientPortal.RequiredTools).scrollIntoView().type('Ticket Required Tools: Client Portal Cypress Test Ticket');
  cy.log('✅ Success: Filled additional ticket details');

  // cp_ticketdocument();
  // cy.log('✅ Success: Document added');

  cy.get(env.clientPortal.SaveButton).contains('Save').click({ force: true });
  cy.get(env.clientPortal.SuccessMessage, { timeout: 100000 }).should('be.visible');
  cy.get(env.clientPortal.SuccessMessage, { timeout: 100000 }).should('not.exist');
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
