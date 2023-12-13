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
