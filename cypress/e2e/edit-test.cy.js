import {
  toolbarId,
  addListButtonId,
  addSongButtonId,
  playlistCardsId,
  editModalId,
  editModalConfirmButtonId,
  editModalCancelButtonId,
  editTitleInputId,
  editArtistInputId,
  editYtInputId,
  playlistCard1Id,
  undoButtonId,
  redoButtonId
} from './empty.cy'

beforeEach(() =>{
    cy.visit('/')
  
    //Initial Foolproof Check
    cy.get(toolbarId).children().should('have.length', 4); //All toolbar buttons should be disabled
    cy.get(addListButtonId).should('not.have.class', 'disabled').click();
  
    //Second Foolproof Check
    cy.get(toolbarId).children('.disabled').should('have.length', 2); //Only undo and redo should be disabled
    cy.get(addSongButtonId).should('not.have.class', 'disabled').click();

    cy.get(playlistCardsId).children().should('have.length', 1);
});

describe('Edit Song Tests', () => {
    beforeEach(() => {
      cy.get(playlistCardsId).children().dblclick('right');
      cy.get(editModalId).should('be.visible');
  
      //Foolproof check
      cy.get(addListButtonId).should('have.class', 'disabled');
      cy.get(toolbarId).children('.disabled').should('have.length', 4);

      cy.get(editTitleInputId)
        .should('have.value', 'Untitled')
        .clear()
        .type('Test Title');

      cy.get(editArtistInputId)
        .should('have.value', 'Unknown')
        .clear()
        .type('Test Artist');

      cy.get(editYtInputId)
        .should('have.value', 'dQw4w9WgXcQ')
        .clear()
        .type('Test YouTube Id');
    });
  
    it('should edit and undo/redo correctly', () => {
        cy.get(editModalConfirmButtonId).click();
        cy.get(editModalId).should('not.be.visible');
    
        //Foolproof Check
        cy.get(addListButtonId).should('have.class', 'disabled');
        cy.get(toolbarId).children('.disabled').should('be.empty');
    
        expect(cy.get(playlistCard1Id).contains('Test Title by Test Artist'));

        cy.get(undoButtonId)
          .should('not.have.class', 'disabled')
          .click()
          .should('not.have.class', 'disabled'); //Should not because of the original add transaction
  
        expect(cy.get(playlistCard1Id).contains('Untitled by Unknown'));
  
        cy.get(redoButtonId)
          .should('not.have.class', 'disabled')
          .click()
          .should('have.class', 'disabled');
  
        expect(cy.get(playlistCard1Id).contains('Test Title by Test Artist'));
      });
  
    it('should cancel correctly', () => {
      cy.get(editModalCancelButtonId).click();
  
      //Foolproof Check
      cy.get(addListButtonId).should('have.class', 'disabled');
      cy.get(toolbarId).children('.disabled').should('have.length', 1); //Only redo should be disabled because of original add transaction
  
      expect(cy.get(playlistCard1Id).contains('Untitled by Unknown'));
    });
  });