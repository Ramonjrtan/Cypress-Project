//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions
import { login } from '../support/D1_LoginGroups';
import { add_team } from "../support/D1_AddTeamGroup";
import { edit_team } from '../support/D1_EditTeamGroup';
import { delete_team } from '../support/D1_DeleteTeamGroup';    


//  Test block
describe('Add Team', () => {
    it('should add a new Team', () => {
        cy.viewport(1920, 1080);
        cy.log('✅ Viewport set to 1920x1080');
        
        // Step 1: Perform login
        login(env.email, env.password);
        cy.log('✅ Successfully logged in');

        // Step 2: Add a new team
        add_team();
        cy.log('✅ Team added successfully');

        // Step 3: edit the team
        edit_team();
        cy.log('✅ Team edited successfully');

        // Step 4: Delete the team
        delete_team();
        cy.log('✅ Team deleted successfully');
    });
});