import React, { Suspense, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { experiences, skills } from '../constants';
import useOnLoadImages from '../hooks/useOnLoadImages';

const About = () => {
	const wrapperRef = useRef(null);
	const imagesLoaded = useOnLoadImages(wrapperRef);

	return (
		<section className='max-container !pb-4'>
			<h1 className='head-text mt-2'>
				Hey! I'm <span className='blue-gradient_text font-semibold drop-shadow'>Andrés</span>
			</h1>
			<div className='mt-5 flex flex-col gap-3 text-slate-500 text-xl font-semibold'>
				<p>
					Experienced and&nbsp;results&#8209;driven Frontend Developer with 5&nbsp;years
					of&nbsp;expertise in&nbsp;JavaScript, TypeScript, and&nbsp;advanced libraries like React,
					NextJS, and&nbsp;ThreeJS.
					<br />
					Known for&nbsp;delivering interactive and&nbsp;user&#8209;focused solutions, I&nbsp;have
					a&nbsp;strong track record of&nbsp;enhancing user engagement and&nbsp;optimizing frontend
					performance.
					<br />
					I&nbsp;am passionate about leveraging the&nbsp;latest technologies to&nbsp;create dynamic
					digital experiences.
					<br />
					With a&nbsp;strong eye for&nbsp;detail and&nbsp;a&nbsp;commitment to&nbsp;quality,
					I&nbsp;thrive on&nbsp;crafting visually appealing and&nbsp;highly functional web solutions
					that meet both business and&nbsp;user needs.
				</p>
			</div>
			<div className='py-8 flex flex-col'>
				<h3 className='subhead-text'>My skills</h3>
				<div className='mt-12 flex flex-wrap gap-10'>
					{skills.map(skill => (
						<div className='block-container w-[4.78rem] h-[4.78rem]' key={skill.name}>
							<div className='btn-front-alt  bg-white rounded-xl shadow-md shadow-slate-200 flex justify-center items-center relative'>
								{/* {!imagesLoaded ? (
									<p className='absolute -z-1 leading-[0.5] w-max animate-spin opacity-30 text-2xl'>
										&#9696;
									</p>
								) : (
									<img
										src={skill.imageUrl}
										alt={skill.name}
										className='absolute z-1 w-1/2 h-1/2 object-contain'
										onLoad={console.log('Logo loaded!')}
									/>
								)} */}
								<img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='py-8'>
				<h3 className='subhead-text'>Work Experience</h3>
				<div className='mt-5 flex flex-col gap-3 text-slate-500 text-xl font-semibold'>
					<p>
						Throughout all my work, I've been leveling up my skills and teaming up with smart
						people. Here's the rundown:
					</p>
				</div>

				<div className='mt-5 flex'>
					<VerticalTimeline className='!w-full'>
						{experiences.map((experience, index) => (
							<VerticalTimelineElement
								key={experience.company_name}
								date={experience.date}
								iconStyle={{ background: experience.iconBg }}
								icon={
									<div className='flex justify-center items-center w-full h-full'>
										<img
											src={experience.icon}
											alt={experience.company_name}
											className='w-[60%] h-[60%] object-contain'
										/>
									</div>
								}
								contentStyle={{
									borderBottom: '6px',
									borderStyle: 'solid',
									borderBottomColor: experience.borderBottom,
									boxShadow: '0px 12px 20px -8px #E2E8F0',
								}}
							>
								<div>
									<h3 className='text-black text-xl font-poppins font-semibold'>
										{experience.title}
									</h3>
									<p className='text-black-500 font-medium !text-lg' style={{ margin: 0 }}>
										{experience.company_name}
									</p>
								</div>

								<ul className='my-5 mb-1 list-disc ml-5 space-y-2'>
									{experience.points.map((point, index) => (
										<li
											key={`experience-point-${index}`}
											className='text-black-500/50 font-normal pl-1 text-lg leading-tight'
										>
											{point}
										</li>
									))}
								</ul>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</div>

			<hr className=' border-slate-200' />

			<CTA />

			<hr className='sm:mt-16 mt-8 border-slate-200' />
			<div className='mt-4 sm:py-4 py-2 flex justify-center items-center gap-8 w-full '>
				<Footer />
			</div>
		</section>
	);
};

export default About;
