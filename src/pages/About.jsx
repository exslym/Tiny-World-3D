import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { experiences, skills } from '../constants';

const About = () => {
	return (
		<section className='max-container !pb-4'>
			<h1 className='head-text mt-2'>
				Hey! I'm <span className='blue-gradient_text font-semibold drop-shadow'>Andrei</span>
			</h1>
			<div className='mt-5 flex flex-col gap-3 text-slate-500 text-xl font-semibold'>
				<p>
					Frontend Developer with experience in TypeScript, JavaScript, Dart and expertise in
					frameworks like React, Astro, Qwik, ThreeJS and Flutter.
				</p>
			</div>
			<div className='py-8 flex flex-col'>
				<h3 className='subhead-text'>My skills</h3>
				<div className='mt-16 flex flex-wrap gap-12'>
					{skills.map(skill => (
						<div className='block-container w-20 h-20' key={skill.name}>
							<div className='btn-back rounded-xl' />
							<div className='btn-front rounded-xl flex justify-center items-center'>
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
									boxShadow: 'none',
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
