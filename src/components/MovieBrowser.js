import React from 'react';
import axios from 'axios';

export default class MovieBrowser extends React.Component {
    state = {
        title : []
    }
    componentDidMount(e){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b265a169ff1b9a5a938891de07d65b29&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1')
        .then( response => {
            let title = response.data.results;
            this.setState({title :title});
        })
    }

    render() {
        console.log(this.state.title)
        return (
            <div className="main">
            {this.state.title.map(title => 
                <div className="film-wrapper" key={title.title}>
                    <img className="" src={"https://image.tmdb.org/t/p/w300" + title.backdrop_path
} />
                    <div className="film__text">
                        <h2 className="film__title">{title.title}</h2>
                        <p>{title.overview}</p>
                    </div>
                    
                </div>
            )}

            </div>
        )
    }
}
