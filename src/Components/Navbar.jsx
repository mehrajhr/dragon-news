
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
      const {user , logOut} = use(AuthContext);
      const handlSignOut = () =>{
        logOut()
        .then(() =>{
            alert('Sign Out');
        })
        .catch(error => console.log(error));
      }
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1>{user?.email}</h1>
            </div>
            <div className='flex gap-4 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-5'>
                <img src={userIcon} alt="" />
                {user? <button onClick={handlSignOut} className='btn btn-primary px-6'>LogOut</button> : <Link to='/auth/login'  className='btn btn-primary px-6'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;