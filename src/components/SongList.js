import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// the below code accomplishes the goal of getting the data from the redux store into the defined component
// i.e., import connect, call it in export default and pass in our component in the second function call
// define mapStateToProps which will always get a first argument as state and 
// will always return an object that is going to show up as props inside of our component
class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key= {song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                        onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                             </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    render() {
       return (
           <div className="ui divided list">{this.renderList()}</div>
       ) 
    };
};


// This name is convention but not necessary. 
// You will see this name in other react projects and they all serve the same general purpose
const mapStateToProps = state => {
    return {
        songs: state.songs
    };
};

            //  here we're passing the SongList class into a nested function and invoking it
export default connect(mapStateToProps, { selectSong })(SongList);
        // THIS IS KEY: at no point anwhere else in the application did i pass the action creater (selectSong) 
        // to a dispatch method wihch is the only way to update store and therefore utilize redux
        // as the second argument connect is applying dispatch to selectSong and updating store
        // the value returned from the function supplied to the first argument will allwyas represent state
        // the state and action can now intereact with the Redux API and be accessed through props  