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
});

it('should close the current playlist correctly', () => {
    cy.get(closeButtonId).should('not.have.class', 'disabled').click();
    cy.get(playlistCardsId).should('not.have.descendants');
  
    //Foolproof check
    cy.get(addListButtonId).should('not.have.class', 'disabled');
    cy.get(toolbarId).children('.disabled').should('have.length', 4);
});