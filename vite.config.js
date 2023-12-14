import react from '@vitejs/plugin-react';
import Path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

const DEFAULT_OPTIONS = {
	test: /\.(svg|png|jpe?g|tiff|gif|webp|avif)$/i,
	exclude: undefined,
	include: undefined,
	excludePublic: ['./public/**/*'],
	includePublic: false,
	logStats: true,
	svg: {
		multipass: true,
		plugins: [
			{
				name: 'preset-default',
				params: {
					overrides: {
						cleanupNumericValues: false,
						removeViewBox: false,
					},
					cleanupIDs: {
						minify: false,
						remove: false,
					},
					convertPathData: false,
				},
			},
			'sortAttrs',
			{
				name: 'addAttributesToSVGElement',
				params: {
					attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
				},
			},
		],
	},
	png: {
		quality: 100,
		palette: true,
	},
	jpeg: {
		quality: 95,
	},
	jpg: {
		quality: 95,
	},
	tiff: {
		quality: 100,
	},
	gif: {},
	webp: {
		lossless: true,
	},
	avif: {
		lossless: true,
	},
};

export default defineConfig({
	root: Path.resolve(__dirname, './src'),
	publicDir: '../public',
	base: './',

	build: {
		emptyOutDir: true,
		outDir: Path.resolve(__dirname, './build'),
		rollupOptions: {
			output: {
				assetFileNames: assetInfo => {
					let info = assetInfo.name.split('.');
					let extType = info[info.length - 1];

					if (/svg|png|jpe?g|tiff|gif|webp|avif|bmp|ico/i.test(extType)) {
						extType = 'images';
					} else if (/eot|otf|ttf|fnt|woff|woff2/.test(extType)) {
						extType = 'fonts';
					} else if (/mp3/.test(extType)) {
						extType = 'media';
					} else if (/glb/.test(extType)) {
						extType = 'glb';
					} else if (/css/.test(extType)) {
						extType = 'css';
					}
					return `assets/${extType}/[name]-[hash][extname]`;
				},

				entryFileNames: 'assets/js/[name]-[hash].js',
				chunkFileNames: 'assets/js/[name]-[hash].js',
			},
		},
	},
	css: {
		devSourcemap: true,
	},
	plugins: [react(), ViteAliases(), ViteImageOptimizer(DEFAULT_OPTIONS)],
	assetsInclude: ['**/*.glb'],
	server: {
		hmr: true,
		port: 3000,
		host: '0.0.0.0',
	},
});
