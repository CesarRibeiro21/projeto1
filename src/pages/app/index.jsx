
import './index.scss';

import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="Header">
     
    <img className='freiS' src="assets/images/image 1.png" />
      <h1>FreiReact </h1>
    <br />
      <ul>
        <li>
          <Link to= '/contato'>Ir para Contato</Link>
        </li>
      </ul>
    </div>
  );
}


