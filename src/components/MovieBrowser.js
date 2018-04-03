import React from 'react';
import { BrowserRouter, Route, Switch,} from 'react-router-dom';
import Header from './Header'
import axios from 'axios';

export default class MovieBrowser extends React.Component {
    state = {
        title : []
    }
    
    componentDidMount(e){
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=e303177ca8412d17986e325b2b00a147&language=en-UK&query='+ search +'&page=2&include_adult=false')
        .then( response => {
            let title = response.data.results;
            this.setState({title :title});
        })
    }

    render() {
        console.log(this.state.title)
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/" exact={true}/>
                            <Route path="/Movie"/>
                        </Switch>
                    </div>
                    <div className="main">
                    {this.state.title.map(title => 
                        <div className="film-wrapper" key={title.title}>
                            <img className="" src={"https://image.tmdb.org/t/p/w300" + title.backdrop_path} />
                            <div className="film__text">
                                <h2 className="film__title">{title.title}</h2>
                                <p>{title.overview}</p>
                            </div>
                            
                        </div>
                    )}
                    </div>
                </div>
            </BrowserRouter>
            
        )
    }
}
