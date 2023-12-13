import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className='header'>
			<NavLink
				to='/'
				className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'
			>
				<p className='blue-gradient_text text-lg'>eXs</p>
			</NavLink>
			<nav className='flex text-lg lg:gap-7 gap-4 font-semibold'>
				<NavLink
					to='/about'
					className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-slate-700')}
				>
					About
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-slate-700')}
				>
					Projects
				</NavLink>
				<NavLink
					to='/contact'
					className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-slate-700')}
				>
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
