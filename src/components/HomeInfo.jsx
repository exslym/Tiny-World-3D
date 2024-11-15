import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, textSecond, link, btnText }) => (
	<div className='info-box'>
		<p className='font-medium sm:text-xl text-center w-5/6'>{text}</p>
		<p className='font-medium sm:text-xl text-center w-5/6'>{textSecond}</p>
		<Link to={link} className='neo-brutalism-white neo-btn'>
			{btnText}
			<img src={arrow} className='w-4 h-4 object-contain' />
		</Link>
	</div>
);

const renderContent = {
	1: (
		<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
			Hi, I am <span className='font-semibold'>Andrés</span>
			<br />A Frontend Developer
		</h1>
	),
	2: (
		<InfoBox
			text='Worked with many companies and picked up many skills along the way'
			link='/about'
			btnText='Learn more'
		/>
	),
	3: (
		<InfoBox
			text='Led multiple projects to succes over the years.'
			textSecond='Curious about the impact?'
			link='/projects'
			btnText='Take a look at my projects'
		/>
	),
	4: (
		<InfoBox
			text='Need a project done or looking for a dev?'
			textSecond="I'm just a few keystrokes away"
			link='/contact'
			btnText='Contact me'
		/>
	),
};

const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null;
};

export default HomeInfo;
