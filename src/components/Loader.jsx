import { Html } from '@react-three/drei';

const Loader = () => {
	return (
		<Html style={{ transform: 'translate(-50%, 0)' }}>
			<div className='flex justify-center items-center'>
				<div className='w-20 h-20 border-2 border-opacity-50 border-slate-300 border-t-blue-500 rounded-full animate-spin' />
			</div>
		</Html>
	);
};

export default Loader;
