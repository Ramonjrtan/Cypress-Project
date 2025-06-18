//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions
import { login } from '../support/D1_LoginGroups';
import { d1_addtechnician } from "../support/D1_AddTechnicianGroups";       

//  Test block
describe('Add Technician', () => {
    it('should add a technician', () => {
        cy.viewport(1920, 1080);
        cy.log('✅ Viewport set to 1920x1080');
        
        // Step 1: Perform login
        login(env.email, env.password);
        cy.log('✅ Successfully logged in');
               
        // Step 3: Add a new technician
        d1_addtechnician();
        cy.log('✅ Technician added successfully');
    });
});
