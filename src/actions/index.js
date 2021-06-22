// this particular nameing convention (index.js) is simply so that we can write a shorter import statement 
// when no filename is provided react will automatically seek out the index.js file


export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};