//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions (alphabetically)
import { login } from '../support/D1_LoginGroups';
import { d1_adddeal } from '../support/D1_AddDealGroups';          
import { delete_deal } from '../support/D1_DeleteDealGroup';

//  Test block
describe('Add Deal', () => {
    it('should add a Deal', () => {
        cy.viewport(1920, 1080);
        cy.log('✅ Viewport set to 1920x1080');
        
        // Step 1: Perform login
        login(env.email, env.password);
        cy.log('✅ Successfully logged in');
               
        // Step 3: Add new Deal
        d1_adddeal();
       cy.log('✅ Deal added successfully');

       // Step 4: Delete the Deal
       delete_deal();
       cy.log('✅ Deal deleted successfully');
    });
});