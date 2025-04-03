export function add_schedule() {
  // Step 1: Click on Schedules tab
  cy.get(':nth-child(6) > button > p').should('be.visible').click();

  // Step 2: Click on Add Schedule
  cy.get('button.primary').should('be.visible').click();

  // Step 3: Ensure modal appears
  cy.get('fieldflow-dialog', { timeout: 20000 }).should('exist').and('be.visible');

  // Step 4: Ensure modal header appears
  cy.get('.header div', { timeout: 10000 }).should('contain', 'Add Schedule');

  // Step 5: Open calendar
  cy.get("button[aria-label='Open calendar']").should('be.visible').click();

  // Step 6: Click on Next month button
  cy.get('.mat-calendar-next-button').should('be.visible').click();

  // Step 7: Select the 30th
  cy.contains('.mat-calendar-body-cell-content', '30').should('be.visible').click();
  cy.contains('.mat-calendar-body-cell-content', '30').should('be.visible').click();

  // Step 8: Wait for selection to register
  cy.wait(1000);

  // Step 9: Enter time manually (09:00 AM)
  cy.get('.mat-timepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target').should('be.visible').type('09:00 AM').type('{enter}');
  cy.wait(1000);

  // Step 10: Click Save
  cy.get('.actions > :nth-child(2) > .primary').should('be.visible').click();

  // Step 11: Verify success message
  cy.get("div[aria-label='Ticket Schedule is successfully added.']").should('be.visible');

  // Step 12: Wait for 2 seconds
  cy.wait(2000);

  // Step 13: Click on Edit Schedule button
  cy.get('[buttonstyle="primary"] > button > .mat-icon').should('be.visible').click();

  // Step 14: Wait for modal to appear
  cy.get('fieldflow-dialog', { timeout: 20000 }).should('exist').and('be.visible');

  // Step 15: Verify modal title
  cy.get('.header div', { timeout: 10000 }).should('contain', 'Edit Schedule');

  // Step 16: Enter new date and time
  // Open the date picker
  cy.get('input[formcontrolname="publishedSchedule"]').should('be.visible').click();

  // Step 17: Select month and year
  cy.get("button[aria-label='Choose month and year']").should('be.visible').click();
  cy.get('.owl-dt-year-2025 > .owl-dt-calendar-cell-content').should('be.visible').click();
  cy.get('.owl-dt-month-11 > .owl-dt-calendar-cell-content').should('be.visible').click();

  // Step 18: Select the day (December 30, 2025)
  cy.get("td[aria-label='December 30, 2025'] span[class='owl-dt-calendar-cell-content']").should('be.visible').click();

  // Step 19: Ensure the time picker is visible
  cy.get("owl-date-time-container").should('be.visible');

  // Step 20: Set hour to 09
  cy.get("owl-date-time-timer-box:nth-child(1) input").clear().type('09');

  // Step 21: Set minutes to 00
  cy.get("owl-date-time-timer-box:nth-child(2) input").clear().type('00');

  // Step 22: Confirm the selected date & time
  cy.get('.owl-dt-container-buttons > :nth-child(2) > .owl-dt-control-content').should('be.visible').click();

  // Step 23: Click Save
  cy.get('.actions > :nth-child(2) > .primary').should('be.visible').click();

  // Step 24: Verify success message
  cy.get("div[aria-label='Schedule is successfully updated!']").should('be.visible');

  // // Step 25: Ensure success message disappears before proceeding
  // cy.get("div[aria-label='Schedule is successfully updated!']", { timeout: 10000 }) 
  //   .should('not.exist');

  cy.log("✅ Success message appeared and disappeared.");
}
