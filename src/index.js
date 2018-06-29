import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import { DatePicker } from 'antd';
const API_KEY = 'AIzaSyDQVcE8BXbj-Y3ScEZtursKP3ioq0tqTGI'; 

//Create a New Component. This Component Wil Produce HTMl.



class App extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            videos:  [],
        };
        
        YTSearch({ key: API_KEY, term: 'Devil May Cry' }, (videos) => {
            this.setState({
                videos,  // Equivalent to videos(state) : videos(Object & State)
            });
        });
    }
    render(){
    return ( <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
        {/* <DatePicker />, mountnode */}
    </div>
    );
}
}

//Take this componet's Generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
