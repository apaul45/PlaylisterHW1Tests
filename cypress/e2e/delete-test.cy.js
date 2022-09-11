const addListButtonId = '#' + 'add-list-button';

const playlistCardsId = '#' + 'playlist-cards';
const playlistCard1Id = '#' + 'playlist-card-1';
const toolbarId = '#' + 'edit-toolbar';

const deleteSong0ButtonId = '#' + 'delete-song-0';
const deleteModalId = '#' + "delete-song-modal";
const deleteSongButtonId = '#' + 'delete-song-button';
const deleteSongConfirmButtonId =  '#' +'delete-song-confirm-button';
const deleteSongCancelButtonId = '#' + 'delete-song-cancel-button';

const addSongButtonId = '#' + 'add-song-button';
const undoButtonId = '#' + 'undo-button';
const redoButtonId = '#' + 'redo-button';
const closeButtonId = '#' + 'close-button';

const editModalId = '#' + "edit-song-dialog";
const editTitleInputId = '#' + "edit-song-title";
const editArtistInputId ='#' +  "edit-song-artist";
const editYtInputId = '#' + "edit-yt-id";
const editModalConfirmButtonId = '#' + 'edit-song-confirm-button';
const editModalCancelButtonId = '#' + 'edit-song-cancel-button';

beforeEach(() =>{
  cy.visit('/')

  cy.get(toolbarId).children('.disabled').should('have.length', 4);
  cy.get(addListButtonId).should('not.have.class', 'disabled').click();
  cy.get(addSongButtonId).should('not.have.class', 'disabled').click();
  cy.get(playlistCardsId).children().should('have.length', 1);
});

describe('Remove Song Tests', () => {

  beforeEach(() => {
    cy.get(deleteSong0ButtonId).click();
    cy.get(deleteModalId).should('be.visible');

    //Foolproof Check
    cy.get(addListButtonId).should('have.class', 'disabled');
    cy.get(toolbarId).children('.disabled').should('have.length', 4);
  });

  describe('Deletion Undo Redo Tests', () => {
    //Test Delete Confirm Button
    beforeEach(() => {
      cy.get(deleteSongConfirmButtonId).click();

      //Foolproof Check
      cy.get(addListButtonId).should('have.class', 'disabled');
      cy.get(toolbarId).children('.disabled').should('have.length', 1); //Only redo should be disabled since delete was just performed
  
      cy.get(playlistCardsId).children().should('have.length', 0); //Only redo should be disabled since delete was just performed
    });

    it('should undo and redo correctly', () => {
      cy.get(undoButtonId).should('not.have.class', 'disabled').click();
      cy.get(playlistCardsId).children().should('have.length', 1);

      cy.get(redoButtonId).should('not.have.class', 'disabled').click();
      cy.get(undoButtonId).should('not.have.class', 'disabled');
      cy.get(playlistCardsId).children().should('have.length', 0);
    });
  });

  it('should cancel correctly', () => {
    cy.get(deleteSongCancelButtonId).click();
    cy.get(playlistCardsId).children().should('have.length', 1);

    //Foolproof Check
    cy.get(addListButtonId).should('have.class', 'disabled');
    cy.get(toolbarId).children('.disabled').should('have.length', 1); //Only redo should be disabled because of original song addition 
  })
});