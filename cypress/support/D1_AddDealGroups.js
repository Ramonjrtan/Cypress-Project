import env from '../../cypress.env.json';

export function d1_adddeal() {
  cy.wait(5000);

  // Step 1: Click on Opportunities 
  cy.contains(env.Deals.OpportunitiesTabIcon, 'psychiatry').click();
  cy.log('✅ Successfully Clicked Opportunities Tab Icon');

  // Step 2: Ensure header appears
  cy.get(env.Deals.DealPageHeader, { timeout: 20000 })
    .contains('Deal')
    .should('be.visible');
  cy.log('✅ Deal page header is visible');

  cy.wait(5000);

  // Step 3: Click the "Add Deal" button
  cy.contains(env.Deals.AddDealButton, 'Add Deal')
    .should('be.visible')
    .click();
  cy.log('✅ Successfully Clicked Add Deal');

  // Step 4: Ensure header appears
  cy.get(env.Deals.AddDealHeader)
    .contains('Add Deal')
    .should('be.visible');
  cy.log('✅ Add Deal page header is visible');

  // Step 5: Handle Modal Appearance
  cy.get(env.Deals.ModalContainer, { timeout: 20000 })
    .should('exist')
    .and('be.visible');
  cy.log('✅ Modal is visible');

  cy.get(env.Deals.ModalContainer).within(() => {
    // Ensure "Deal Name" input field is visible before interacting
    cy.get(env.Deals.DealNameLabel).click(); // Click the label first
    cy.log('✅ Deal Name label clicked successfully');

    // Deal Name
    cy.get(env.Deals.DealNameInput)
      .should('be.visible')
      .type('Cypress Test Deal', { force: true });
    cy.log('✅ Deal Name entered successfully');

    // Schedule date
    cy.get(env.Deals.ScheduleDateInput).type('12/30/2025{enter}');
    cy.log('✅ Schedule date entered successfully');

    // Priority
    cy.get(env.Deals.PriorityDropdown).click();
    cy.log('✅ Priority dropdown opened successfully');

    // Select "High"
    cy.get(env.Deals.PriorityOption).contains('High').click();
    cy.log('✅ Priority selected successfully');

    // Deal Type
    cy.get(env.Deals.DealTypeDropdown).click();
    cy.log('✅ Deal Type dropdown opened successfully');

    // Select the "Field Services - Dispatch" option
    cy.get(env.Deals.DealTypeOption).contains('Field Services - Dispatch').click();
    cy.log('✅ Deal Type selected successfully');

    // Description
    cy.get(env.Deals.DescriptionTextarea).type('Cypress Test Deal');
    cy.log('✅ Description entered successfully');

    // Deal Owner
    cy.get(env.Deals.SolutioningOwnerDropdown).click();
    cy.log('✅ Solutioning Owner dropdown opened successfully');

    // Filter Deal Owner
    cy.get(env.Deals.SolutioningOwnerInput).type('Ramon-GMAIL', { force: true });
    cy.log('✅ Filtered Solutioning Owner options successfully');

    cy.contains(env.Deals.SolutioningOwner, 'Ramon-GMAIL').click();
    cy.log('✅ Solutioning Owner selected successfully');

    // Sales Owner
    cy.get(env.Deals.SalesOwnerDropdown).click();
    cy.log('✅ Sales Owner dropdown opened successfully');

    // Filter Sales Owner
    cy.get(env.Deals.SalesOwnerInput).type('Ramon-GMAIL', { force: true });
    cy.log('✅ Filtered Sales Owner options successfully');

    cy.contains(env.Deals.SolutioningOwner, 'Ramon-GMAIL').click();
    cy.log('✅ Sales Owner selected successfully');

    // Client
    cy.get(env.Deals.ClientDropdown).click();
    cy.log('✅ Client dropdown opened successfully');

    // Filter Client
    cy.get(env.Deals.ClientInput).type('Test Client (USE FOR TESTING)', { force: true });
    cy.log('✅ Filtered Client options successfully');

    cy.contains(env.Deals.olutioningOwner, 'Test Client (USE FOR TESTING)').click();
    cy.log('✅ Client selected successfully');

    // First Name
    cy.get(env.Deals.FirstNameInput).click().type('Ramon');
    cy.log('✅ First Name entered successfully');

    // Last Name
    cy.get(env.Deals.LastNameInput).click().type('Tan');
    cy.log('✅ Last Name entered successfully');

    // Email and Phone Number
    const randomId = Math.floor(Math.random() * 10000);
    const randomEmail = `cypresstest${randomId}@gmail.com`;
    cy.get(env.Deals.EmailInput).clear().type(randomEmail);
    cy.get(env.Deals.PrimaryContactPhoneInput).clear().type('18006626227');
    cy.log('✅ Email and Phone Number entered successfully');

    // Client Phone Number
    cy.get(env.Deals.ClientPhoneInput).clear().type('18006626227');
    
    // Client Address
    cy.get(env.Deals.AddressInput).clear().type('2105 London Rd, Duluth, MN 55812, United States');
    cy.log('✅ Client Phone Number and Address entered successfully');

    // Step 7: Wait until the "Save" button is enabled before clicking
    cy.waitUntil(() => 
        cy.get(env.Deals.SaveButton)
        .should('be.enabled'),
      { timeout: 10000, interval: 500 }
    );

    // Step 8: Click the Save button safely
    cy.get(env.Deals.SaveButton).first().click(); // clicks only the first match
    cy.log('✅ Successfully Clicked Save');

    cy.contains('Deal Updated successfully.', { timeout: 10000 })
      .should('be.visible');
      cy.log('✅ Deal Updated successfully message is visible');

    cy.contains('Deal Updated successfully.', { timeout: 10000 })
      .should('not.exist');
      cy.log('✅ Verified success message disappeared');
      
  });
}
