import react from '@vitejs/plugin-react';
import Path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

export default defineConfig({
	root: Path.resolve(__dirname, './src'),
	publicDir: '../public',
	build: {
		emptyOutDir: true,
	},
	css: {
		devSourcemap: true,
	},
	plugins: [react()],
	assetsInclude: ['**/*.glb'],
	server: {
		hmr: true,
		port: 3000,
		host: '0.0.0.0',
	},
});

// const pickedKeys = [
// 	'VITE_APP_EMAILJS_SERVICE_ID',
// 	'VITE_APP_EMAILJS_TEMPLATE_ID',
// 	'VITE_APP_EMAILJS_PUBLIC_KEY',
// 	'VITE_APP_EMAILJS_TO_EMAIL',
// 	'VITE_APP_EMAILJS_TO_NAME',
// ];

// export default defineConfig(({ mode }) => {
// 	const process = Node.Process;
// 	const env = loadEnv(mode, process.cwd(), '');
// 	const processEnv = {};
// 	pickedKeys.forEach(key => (processEnv[key] = env[key]));

// 	return {
// 		define: {
// 			'process.env': processEnv,
// 		},
// 		root: Path.resolve(__dirname, './src'),
// 		publicDir: '../public',
// 		build: {
// 			emptyOutDir: true,
// 		},
// 		css: {
// 			devSourcemap: true,
// 		},
// 		plugins: [react(), ViteAliases()],
// 		assetsInclude: ['**/*.glb'],
// 		server: {
// 			hmr: true,
// 			port: 3000,
// 			host: '0.0.0.0',
// 		},
// 	};
// });
