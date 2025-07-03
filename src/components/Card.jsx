import profilePic from '../assets/team1.jpg'

function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Picture"></img>
            <h2 className='card-title'> Raphael Ndolo </h2>
            <p className='card-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere ea eum sunt neque magni qui quae numquam, beatae nostrum quidem esse harum nobis adipisci ut ipsam veritatis quos hic! </p>
        </div>
    );
}

export default Card;