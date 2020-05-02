import React from 'react';
import youtube from '../apis/youtube.js';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js'

const KEY = 'AIzaSyA2u7KClGpkP0Y0AaOof8bDPXEi7ZwR4R8'

class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            video: null,
            videoList: []
        }
    }

    componentDidMount(){
        this.onSearchSubmit('cars')
    }

    onSearchSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                type: 'video',
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        })
        this.setState({
            videoList: response.data.items,
            video: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ video: video })
        console.log(video)
    }

    render(){
        return(
            <div className='ui container'>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.video} />
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                                videos={this.state.videoList} 
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
