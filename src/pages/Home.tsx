import React from "react";


const Home = (props: {name: string}) => {
    

    return(
        <div>
            <br /><br /><br /><br />
            {props.name ? 'Hi ' + props.name : 'You are not logged in'}
        </div>
    )
}

export default Home;