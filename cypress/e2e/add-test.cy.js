import {
    toolbarId, 
    addListButtonId, 
    addSongButtonId, 
    playlistCard1Id,
    playlistCardsId, 
    undoButtonId, 
    redoButtonId
} 
from './empty.cy';

beforeEach(() =>{
    cy.visit('/')
  
    cy.get(toolbarId).children('.disabled').should('have.length', 4);
    cy.get(addListButtonId).should('not.have.class', 'disabled').click();
});

describe('Add Test', () => {
    beforeEach(() => {
        cy.get(addSongButtonId).should('not.have.class', 'disabled').click();
        cy.get(playlistCardsId).children().should('have.length', 1);
        expect(cy.get(playlistCard1Id).contains('Untitled by Unknown'));
    });

    it('should undo and redo correctly', () => {
        cy.get(undoButtonId).should('not.have.class', 'disabled').click();
        cy.get(playlistCardsId).children().should('have.length', 0);
      
        cy.get(redoButtonId).should('not.have.class', 'disabled').click();
        cy.get(playlistCardsId).children().should('have.length', 1);
    });
});