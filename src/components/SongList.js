import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
       return (
           <div>Song List</div>
       ) 
    };
};

            //  here we're passing the SongList class into a nested function and invoking it
export default connect()(SongList);