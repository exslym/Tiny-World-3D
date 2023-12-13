import {
	astro,
	car,
	contact,
	css,
	docker,
	estate,
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
	pricewise,
	qwik,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	threejs,
	typescript,
	vite,
	webpack,
} from '../assets/icons';
import { doctoratwork, freelance } from '../assets/images';

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
		iconUrl: contact,
		link: '/contact',
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: 'https://github.com/YourGitHubUsername',
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: 'https://www.linkedin.com/in/YourLinkedInUsername',
	},
];

export const projects = [
	{
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'Amazon Price Tracker',
		description:
			'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
		link: 'https://github.com/adrianhajdin/pricewise',
	},
	{
		iconUrl: threads,
		theme: 'btn-back-green',
		name: 'Full Stack Threads Clone',
		description:
			'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: 'https://github.com/adrianhajdin/threads',
	},
	{
		iconUrl: car,
		theme: 'btn-back-blue',
		name: 'Car Finding App',
		description:
			'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
		link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
	},
	{
		iconUrl: snapgram,
		theme: 'btn-back-pink',
		name: 'Full Stack Instagram Clone',
		description:
			'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
		link: 'https://github.com/adrianhajdin/social_media_app',
	},
	{
		iconUrl: estate,
		theme: 'btn-back-black',
		name: 'Real-Estate Application',
		description:
			'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
		link: 'https://github.com/adrianhajdin/projects_realestate',
	},
	{
		iconUrl: summiz,
		theme: 'btn-back-yellow',
		name: 'AI Summarizer Application',
		description:
			'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
		link: 'https://github.com/adrianhajdin/project_ai_summarizer',
	},
];
