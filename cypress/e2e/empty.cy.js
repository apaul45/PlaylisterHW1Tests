//Use this file to export all the ids to the actual suites

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

context('Share IDs across all suites', () => {
    // Generating a random userCount value for further verifications.
    module.exports = {
        addListButtonId,
        playlistCard1Id,
        playlistCardsId,
        deleteModalId,
        deleteSong0ButtonId,
        deleteSongButtonId,
        deleteSongConfirmButtonId, 
        deleteSongCancelButtonId,
        addSongButtonId,
        undoButtonId,
        redoButtonId,
        closeButtonId,
        editModalId,
        editTitleInputId, 
        editArtistInputId,
        editYtInputId,
        editModalConfirmButtonId,
        toolbarId,
        editModalCancelButtonId
    }
});