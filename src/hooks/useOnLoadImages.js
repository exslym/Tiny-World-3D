import { useEffect, useState } from 'react';

const useOnLoadImages = (ref, deps) => {
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);

	function waitForLoad(img) {
		return new Promise((resolve, reject) => {
			if (img.complete) {
				return resolve();
			}

			img.onload = () => resolve();
			img.onerror = () => reject();
		});
	}

	const allDeps = [ref.current];
	if (deps?.length) allDeps.push(...deps);

	useEffect(() => {
		if (!ref?.current) return;
		setError(false);
		setLoading(true);

		const promises = [...ref.current.querySelectorAll('img')].map(it => waitForLoad(it));

		if (!promises.length) {
			setLoading(false);
			return;
		}

		Promise.all(promises)
			.catch(err => {
				console.error(err);
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, allDeps);

	return [isLoading, isError];
};

export default useOnLoadImages;
