import React from 'react';

const Alert = ({ type, text }) => {
	return (
		<div className='absolute lg:top-[128px] md:top-[130px] sm:top-[132px] top-[70px] left-0 right-0 flex justify-center items-center'>
			<div
				className={`${
					type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
				} p-3 text-indigo-100 leading-none lg:inline-flex lg:flex-row lg:gap-3 sm:w-auto w-[85%] rounded-xl flex flex-col items-center justify-center gap-1`}
				role='alert'
			>
				<p
					className={`${
						type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
					} flex rounded-lg uppercase px-2 py-1 font-semibold  text-xs text-center justify-center`}
				>
					{type === 'danger' ? 'Failed!' : 'Succes!'}
				</p>
				<p className='lg:text-left text-center'>{text}</p>
			</div>
		</div>
	);
};

export default Alert;
