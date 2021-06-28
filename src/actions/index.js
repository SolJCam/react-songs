// this particular nameing convention (index.js) is simply so that we can write a shorter import statement 
// when no filename is provided react will automatically seek out the index.js file

// This is an ACTION: a plain object that represents an intention to change the state. Actions are the only way to get data into the store
export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};