import {
    toolbarId,
    addListButtonId,
    closeButtonId,
    playlistCardsId,
} from './empty.cy';

beforeEach(() =>{
    cy.visit('/')
  
    cy.get(toolbarId).children('.disabled').should('have.length', 4);
    cy.get(addListButtonId).should('not.have.class', 'disabled').click();
});

it('should close the current playlist correctly', () => {
    cy.get(closeButtonId).should('not.have.class', 'disabled').click();
    cy.get(playlistCardsId).should('not.have.descendants');
  
    //Foolproof check
    cy.get(addListButtonId).should('not.have.class', 'disabled');
    cy.get(toolbarId).children('.disabled').should('have.length', 4);
});
