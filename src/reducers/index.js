import { combineReducers } from 'redux'; //helper function that turns an object whose values are different reducing functions into a single reducing function you can pass to createStore

// REDUCERS (also called reducing functions), are a fundamental concept in functional programming  
// In Redux, they accept the state object and an action, and return a new state object
// NOTE reducers DO NOT UPDATE the state object, but instead create a NEW object

const songsReducer = () => {
    return [
        { title: 'no scrubs', duration: '4:05' },
        { title: 'Big Poppa', duration: '5:10' },
        { title: 'Changes', duration: '4:35' },
        { title: 'Until The End Time', duration: '5:20' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return(action.payload);
    };

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});