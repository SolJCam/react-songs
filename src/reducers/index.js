import { combineReducers } from 'redux';

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