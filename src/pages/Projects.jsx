import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { projects } from '../constants';

const Projects = () => {
	return (
		<section className='max-container !pb-4'>
			<h1 className='head-text mt-2'>
				My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
			</h1>
			<div className='mt-5 flex flex-col gap-3 text-slate-500 text-xl font-semibold'>
				<p>
					I've embarked on numerous projects throughout the years, but these are the ones I hold
					closest to my heart. Many of them are open-source, so if you come across something that
					piques your interest, feel free to explore the codebase and contribute your ideas for
					further enhancements. Your collaboration is highly valued!
				</p>
			</div>

			<div className='flex flex-wrap my-20 gap-16'>
				{projects.map(project => (
					<div className='lg:w-[400px] w-full' key={project.name}>
						<div className='block-container w-64 aspect-[1.5]'>
							<div className={`btn-back-alt rounded-[0.8rem] ${project.theme}`} />
							<div className='btn-front p-1 rounded-[0.8rem] flex justify-center items-center overflow-hidden'>
								<img
									src={project.preview}
									alt='Project Preview'
									className='w-full h-full rounded-[0.6rem] max-w-none'
								/>
							</div>
						</div>
						<div className='mt-7 flex flex-col'>
							<h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
							<p className='mt-2 text-slate-500'>{project.description}</p>
							<div className='mt-2 flex items-center gap-3 font-poppins'>
								<Link
									to={project.link1}
									target='_blank'
									rel='noopener noreferrer'
									className='font-medium text-slate-500 hover:text-blue-400 px-2 rounded-md border border-slate-500 hover:border-blue-400'
								>
									GitHub
								</Link>
								<Link
									to={project.link2}
									target='_blank'
									rel='noopener noreferrer'
									className='font-medium text-slate-500 hover:text-blue-400 px-2 rounded-md border border-slate-500 hover:border-blue-400'
								>
									Website
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			<hr className='border-slate-200' />

			<CTA />

			<hr className='sm:mt-16 mt-8 border-slate-200' />
			<div className='mt-4 sm:py-4 py-2 flex justify-center items-center gap-8 w-full '>
				<Footer />
			</div>
		</section>
	);
};

export default Projects;
