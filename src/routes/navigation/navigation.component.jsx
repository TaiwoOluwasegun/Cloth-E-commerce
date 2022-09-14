
import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Nav = () => {
    return (
        <> 
        <div className="navigation">

            <Link className="logo-container" to='/'>
                <div className="logo">
              <CrwnLogo className='logo'/>
                </div>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                <Link className="nav-link" to='/auth'>
                    Signin
                </Link>
            </div>
        </div>
        <Outlet/>
        </>
    )
}

export default Nav