import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyDQVcE8BXbj-Y3ScEZtursKP3ioq0tqTGI'; 

//Create a New Component. This Component Wil Produce HTMl.



class App extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            videos:  [],
            selectedVideo : null,
        };
         YTSearch({ key: API_KEY, term:'One Punch Man' }, (videos) => {
            this.setState({
                videos,  // Equivalent to videos(state) : videos(Object & State)
                selectedVideo : videos[0],
            });
        });
       
        
    }


    videoSearch(term){
        
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({
                videos,  // Equivalent to videos(state) : videos(Object & State)
                
            });
        });

    }
    render(){

        const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300);

    return ( <div>
        <SearchBar onSearchTermChange = { videoSearch }/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
        videos = {this.state.videos} />
    </div>
    );
}
}

//Take this componet's Generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
