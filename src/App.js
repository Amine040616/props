
import './App.css';
import Profil from './profile/Profil';


const dataProfil={
  fullName:'Xavier Cussó',
  bio:'Led by Creative Director and Designer Xavier Cussó, we help our clients stand out by combining first-class designand out of the box creativity with solid brand understanding, thoughtful UX, tasteful animation, technical innovation and optimal performance.We are an independent small team of Senior professionals with a powerful network that allows us to quickly scale hiring talent on demand.',
  profession:'Serveur de données',
  whatToDo:'javascript:alert("My Name is Xavier Cussó")'
}

function App() {


  return (
    <div className="App">
      <Profil alpha={dataProfil}/>
    </div>
  );
}

export default App;
