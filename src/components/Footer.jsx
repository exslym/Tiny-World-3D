import { Link } from 'react-router-dom';

import { socialLinks } from '../constants';

const Footer = () => {
	return (
		<footer className='footer font-poppins'>
			{/* <hr className='border-slate-200' /> */}

			<div className='footer-container'>
				<div className='flex gap-8 justify-center items-center'>
					{socialLinks.map(link => (
						<Link key={link.name} to={link.link} target='_blank'>
							<img
								src={link.iconUrl}
								alt={link.name}
								className='sm:w-10 w-8 sm:h-10 h-8 object-contain'
							/>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
