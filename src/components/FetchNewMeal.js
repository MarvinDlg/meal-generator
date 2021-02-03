import React from "react";
import ReactPlayer from "react-player"
import "../App.css";

export default class FetchNewMeal extends React.Component {

    state = {
        loading: true,
        meal: null,
        tabType: 'general'
    };


    async componentDidMount() {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ meal: data.meals[0], loading: false});
    }

    toggleMe=(value)=>{
        this.setState({
            tabType: value
        })
    }

    render(){

        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.meal) {
            return <div>no meal</div>;
        }

        return (

            <div>
                <div id="heading">{this.state.meal.strMeal}</div>
                <br />
            <img id="image" src={this.state.meal.strMealThumb} width="500" height="500" />

            <br/>
                <button id="moreBtn" onClick={()=>this.toggleMe('content')}>More</button>
            
            <div>
                {
                    this.state.tabType==='content' && 
                        <div className="content1">
                        {/* <br />
                        <h2>Instruction</h2>
                        {this.state.meal.strInstructions}
                        <br />
                        <br /> */}
                        <h2>See The Video:</h2>
                        <div className="video-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url={this.state.meal.strYoutube} 
                                controls
                                muted
                                config={{
                                    youtube: {
                                        playersVars: { showInfo: 1 }
                                    }
                                }}
                            
                            />
                        </div>
                        </div>
                }
    </div>

    <div>
                {
                    this.state.tabType==='content' && 
                    <div className="content2">
                        <h2>Instruction:</h2>
                        {this.state.meal.strInstructions}
                    </div>

                }
    </div>
            </div>             
    );
        
    }

}