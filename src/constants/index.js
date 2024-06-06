import {
	astro,
	css,
	docker,
	email,
	express,
	flutter,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	qwik,
	react,
	redux,
	sass,
	tailwindcss,
	threejs,
	typescript,
	vite,
	webpack,
} from '../assets/icons';
import {
	ai_3d_tshirts,
	currency_list,
	dcreative,
	doctoratwork,
	e_commerce,
	eventlify,
	freelance,
	game_2048,
	portfolio_3d,
	space_invaders,
} from '../assets/images';

const githubUser = import.meta.env.VITE_APP_GITHUB_USER;
const linkedinUser = import.meta.env.VITE_APP_LINKEDIN_USER;

export const skills = [
	{
		imageUrl: javascript,
		name: 'JavaScript',
		type: 'Frontend',
	},
	{
		imageUrl: typescript,
		name: 'TypeScript',
		type: 'Frontend',
	},
	{
		imageUrl: react,
		name: 'React',
		type: 'Frontend',
	},
	{
		imageUrl: redux,
		name: 'Redux',
		type: 'State Management',
	},
	{
		imageUrl: flutter,
		name: 'Flutter',
		type: 'Frontend',
	},
	{
		imageUrl: astro,
		name: 'Astro',
		type: 'Frontend',
	},
	{
		imageUrl: qwik,
		name: 'Qwik',
		type: 'Frontend',
	},
	{
		imageUrl: threejs,
		name: 'ThreeJS',
		type: 'Frontend',
	},
	{
		imageUrl: motion,
		name: 'Motion',
		type: 'Frontend',
	},
	{
		imageUrl: express,
		name: 'Express',
		type: 'Backend',
	},
	{
		imageUrl: nextjs,
		name: 'Next.js',
		type: 'Frontend',
	},
	{
		imageUrl: nodejs,
		name: 'Node.js',
		type: 'Backend',
	},
	{
		imageUrl: mongodb,
		name: 'MongoDB',
		type: 'Database',
	},
	{
		imageUrl: vite,
		name: 'Vite',
		type: 'Bundler',
	},
	{
		imageUrl: webpack,
		name: 'Webpack',
		type: 'Bundler',
	},
	{
		imageUrl: docker,
		name: 'Docker',
		type: 'Environment',
	},
	{
		imageUrl: mui,
		name: 'Material-UI',
		type: 'Frontend',
	},
	{
		imageUrl: tailwindcss,
		name: 'Tailwind CSS',
		type: 'Frontend',
	},
	{
		imageUrl: html,
		name: 'HTML',
		type: 'Frontend',
	},
	{
		imageUrl: css,
		name: 'CSS',
		type: 'Frontend',
	},
	{
		imageUrl: sass,
		name: 'Sass',
		type: 'Frontend',
	},
	{
		imageUrl: git,
		name: 'Git',
		type: 'Version Control',
	},
	{
		imageUrl: github,
		name: 'GitHub',
		type: 'Version Control',
	},
];

export const experiences = [
	{
		title: 'Frontend Developer',
		company_name: 'Doctor At Work',
		icon: doctoratwork,
		// iconBg: '#93A4B8',
		borderBottom: '#00c6ff',
		iconBg: 'linear-gradient(135deg, #00c6ff 20%, #0072ff 140%)',
		date: 'September 2020 - Present',
		points: [
			"Developed and maintained over 140 commercial websites, banners and emails with responsive design and cross-browser compatibility, as well as other visual materials as a part of clients' advertising campaigns",
			'Created dozens of mini-games, chat bots, quizzes and interactive educational sites with complex animated and interactive elements and detailings using JavaScript, TypeScript and frontend frameworks like React, Astro, Qwik, ThreeJS, etc.',
			"Adapted the code of third-party client projects made in React framework, revised for publication on own or the company's platforms.",
			'Collaborated with cross-functional teams including designers, project managers, and other developers to create high-quality products.',
			'Formed and structured development standards to automate routine tasks, carried out systematic code reviews, created needed templates, developed and implemented various plugins, etc.',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Freelance | Self-employed',
		icon: freelance,
		// iconBg: '#93A4B8',
		borderBottom: '#00c6ff',
		// iconBg: 'linear-gradient(135deg, #00c6ff 20%, #0072ff 140%)',
		iconBg: '#b7e8fc',
		date: 'January 2019 - September 2020',
		points: [
			'Developed and maintained over 20 websites using JavaScript, HTML5, CSS3, SASS/SCSS and other related technologies',
			'Implemented responsive adaptive design and ensured cross-browser compatibility.',
		],
	},
];

export const socialLinks = [
	{
		name: 'Contact',
		iconUrl: email,
		link: '/contact',
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: `https://github.com/${githubUser}/`,
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: `https://www.linkedin.com/in/${linkedinUser}/`,
	},
];

export const projects = [
	{
		preview: portfolio_3d,
		theme: 'btn-back-blue-violet',
		link1: 'https://github.com/exslym/My-Portfolio-3D/',
		link2: 'https://exslym.github.io/My-Portfolio-3D/',
		name: '3D Dev Portfolio',
		description:
			'An outstanding and impressive 3D Developer Portfolio website using React, 3D-graphics and animations with ThreeJS and Framer Motion, and TailwindCSS!',
	},
	{
		preview: ai_3d_tshirts,
		theme: 'btn-back-dark-blue',
		link1: 'https://github.com/exslym/3D-AI-Project/',
		link2: 'https://exslym.github.io/3D-AI-Project/',
		name: '3D T-Shirts AI Design',
		description:
			'A website project where you can make custom design t-shirts in 3D with the help of AI in real-time. You can also choose color or upload your own images to make your T-shirt truly unique.',
	},
	{
		preview: e_commerce,
		theme: 'btn-back-violet-yellow',
		link1: 'https://github.com/exslym/ecommerce/',
		link2: 'https://e-commerce-exs.payloadcms.app/',
		name: 'E-Commerce Tech Shop',
		description:
			'A tech-related e-commerce shop page that even guests can visit, allowing users to explore products, apply category filters, and see more products with pagination, which is key for performance in e-commerce projects.',
	},
	{
		preview: eventlify,
		theme: 'btn-back-dark-green',
		link1: 'https://github.com/exslym/eventlify/',
		link2: 'https://eventlify-exs.vercel.app/',
		name: 'Eventlify',
		description:
			'The events web application stands as a comprehensive, full-stack platform for managing events taking place globally. With this app you have the capability to purchase tickets for any event published there or even initiate and manage your own events.',
	},
	{
		preview: currency_list,
		theme: 'btn-back-blue-green',
		link1: 'https://github.com/exslym/Crypto-Coins-List/',
		link2: 'https://cryptocurrency-prices-exslym.vercel.app/',
		name: 'Cryptocurrency Prices',
		description:
			'A website version of mobile App created using the Flutter framework. The app provides real-time information about the prices of various cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and many others.',
	},
	{
		preview: dcreative,
		theme: 'btn-back-orange-light',
		link1: 'https://github.com/exslym/d-creative-studio/',
		link2: 'https://exslym.github.io/d-creative-studio/',
		name: 'D-Creative Studio',
		description:
			'An outstanding animate-on-scroll landing for Creative Studio - a team of innovative designers, developers, videographs and artists who specialize in crafting unique and engaging digital experiences for their clients.',
	},
	{
		preview: space_invaders,
		theme: 'btn-back-orange-lime',
		link1: 'https://github.com/exslym/Space-Invaders_GAME/',
		link2: 'https://exslym.github.io/Space-Invaders_GAME/',
		name: 'Space Invaders [Game]',
		description:
			'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
	},
	{
		preview: game_2048,
		theme: 'btn-back-gray-beige',
		link1: 'https://github.com/exslym/2048-Game/',
		link2: 'https://exslym.github.io/2048-Game/',
		name: '2048 [Game]',
		description:
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
	},
];
