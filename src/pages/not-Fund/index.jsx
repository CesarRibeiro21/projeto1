import './index.scss'
import { Link } from 'react-router-dom'

export default function Notfund(){
    
    return(
        <div className='page-not-Fund'>
            <Link to='/'>
                <i className='fa fa-arrow-left voltar'></i>
            </Link>
            <img src='/assets/images/not-fund.png'/>
        </div>
    )
}