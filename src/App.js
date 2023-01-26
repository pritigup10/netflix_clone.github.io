import React from "react";
function App(props){
    return(
        <div>
            <div><a href={props.link}><img src={props.imgsrc}/></a></div>
            <div>
                <span>{props.title}</span>
                <h3>{props.sname}</h3>
                <a href={props.link}>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    );
}
export default App;