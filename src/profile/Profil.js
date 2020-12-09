import React from 'react';
import PropTypes from 'prop-types'
import "./profil.css";

function Profil(props){
    const {
        fullName,
        bio,
        profession,
        whatToDo
    }=props.alpha;

    return (
        <div className="imago" style={{display:'flex', flexDirection:'row', padding: '40px'}}>
            <img src="gobblerIcon.svg" alt="quotes" style={{height: "20vmin", position:'absolute', zIndex:"10", marginLeft:'230px'}} />
            <a alt="Not my photo" href={whatToDo} style={{ textDecoration: 'none'}}>
                <img style={{borderRadius: '50%', boxShadow:'20px 20px 60px rgba(0, 0, 0, 0.199)'}} src="johnDoe.jpg" alt="C'est pas ma photo" />
                <figcaption style={{fontSize:'12pt', fontWeight:'700', color:'red', textTransform: 'uppercase'}}>C'est pas ma photo</figcaption>
            </a>
            <div className="allTxt" style={{marginLeft:'100px'}}>
                <h3 style={{fontSize:'40pt'}}>{fullName}</h3>
                <p>{bio}</p>
                <h4 style={{textAlign:"right", fontSize:'20px', color:'grey'}}>{profession}</h4>
            </div>
        </div>
    )
}

Profil.defaultProps = {
    fullName: "Abdoussalam REACT JS" };

Profil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    
    whatToDo: PropTypes.func.isRequired
};


export default Profil;