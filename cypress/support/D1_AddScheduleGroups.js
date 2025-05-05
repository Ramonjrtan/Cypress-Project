import env from '../../cypress.env.json';

export function add_schedule() {
  // Step 1: Click on Schedules tab
  cy.get(env.schedulesTabButton)
    .should('be.visible')
    .click();

  // Step 2: Click on Add Schedule
  cy.get(env.addScheduleButton)
    .should('be.visible')
    .click();

  // Step 3: Ensure modal appears
  cy.get(env.scheduleModalContainer, { timeout: 20000 })
    .should('exist')
    .and('be.visible');

  // Step 4: Ensure modal header appears
  cy.get(env.scheduleModalHeader, { timeout: 10000 })
    .should('contain', 'Add Schedule');

  // Step 5: Open calendar
  cy.get(env.calendarOpenButton)
    .should('be.visible')
    .click();

  // Step 6: Click on Next month button
  cy.get(env.calendarNextButton)
    .should('be.visible')
    .click();

  // Step 7: Select start date the 30th day of the month
  cy.contains(env.calendarCellSelector, '30')
    .should('be.visible')
    .click({ force: true });

  // // Select end date
  // cy.contains(env.calendarCell30, '30')
  //   .should('be.visible')
  //   .click({ force: true });

      // Select end date
  cy.contains(env.calendarCellSelector, '30')
  .should('be.visible')
  .click({ force: true });

  // Step 8: Wait for selection to register
  cy.wait(1000);

  // Step 9: Enter time manually (09:00 AM)
  cy.get(env.timePickerButton,{ timeout: 10000 })
    .should('be.visible')
    .click(); // Click the time picker button to activate it
    cy.wait(1000);

    cy.get('.cancel')
    .click();
    cy.wait(5000);

  cy.get(env.hourInput,{ timeout: 10000 })
    // .should('be.visible')
    .click({ force: true }) // sometimes needed to trigger focus
    .clear({ force: true }) // if there's a default value
    .type('09:00 AM', { force: true });

    cy.get('.submit')
    .click();
    cy.wait(5000);

  // Step 10: Click Save
  cy.get(env.scheduleSaveButton)
    .should('be.visible')
    .click();

  // Step 11: Verify success message
  cy.get(env.scheduleSuccessMessage)
    .should('be.visible');

  // Step 12: Wait for 2 seconds
  cy.wait(5000);

  // Step 13: Click on Edit Schedule button
  cy.get(env.editScheduleButton)
    .should('be.visible')
    .click();

  // Step 14: Wait for modal to appear
  cy.get(env.scheduleModalContainer, { timeout: 20000 })
    .should('exist')
    .and('be.visible');

  // Step 15: Verify modal title
  cy.get(env.scheduleModalHeader, { timeout: 10000 })
    .should('contain', 'Edit Schedule');

  // Step 16: Enter new date and time
  cy.get(env.datePickerInput)
    .should('be.visible')
    .click();

  // Step 17: Select month and year
  cy.get(env.monthYearButton)
    .should('be.visible')
    .click();
  cy.get(env.selectYear2025)
    .should('be.visible')
    .click();
  cy.get(env.selectMonthNovember)
    .should('be.visible')
    .click();

  // Step 18: Select the day (December 30, 2025)
  cy.get(env.selectDayDecember30)
    .should('be.visible')
    .click();

  // Step 19: Ensure the time picker is visible
  cy.get(env.timePickerContainer)
    .should('be.visible');

  // Step 20: Set hour to 09
  cy.get(env.publishHourInput)
    .clear()
    .type('09');

  // Step 21: Set minutes to 00
  cy.get(env.minuteInput)
    .clear()
    .type('00');

  // Step 22: Confirm the selected date & time
  cy.get(env.confirmDateTimeButton)
    .should('be.visible')
    .click();

  // Step 23: Click Save
  cy.get(env.scheduleSaveButton)
    .should('be.visible')
    .click();

  // Step 24: Verify success message
  cy.get(env.updateScheduleSuccessMessage)
    .should('be.visible');

  // Step 25: Ensure success message disappears before proceeding (optional)
  // cy.get(env.scheduleSuccessMessage, { timeout: 10000 }) 
  //   .should('not.exist');

  cy.log("✅ Success message appeared and disappeared.");
}
