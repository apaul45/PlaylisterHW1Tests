const addListButtonId = '#' + 'add-list-button';

const playlistCardsId = '#' + 'playlist-cards';
const playlistCard1Id = '#' + 'playlist-card-1'; //For the first song card in a playlist
const toolbarId = '#' + 'edit-toolbar';

const deleteSong0ButtonId = '#' + 'delete-song-0'; //For the delete button within the first song card in a playlist
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