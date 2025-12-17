
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,

	turbopack: {
		rules: {
			'*.svg': {
				loaders: [{
					loader: '@svgr/webpack',
					options: {
						expandProps: 'end',
						svgo: true,
						titleProp: true,
						ref: true,
					}
				}],
				as: '*.js',

			},
		},
	},
};

export default nextConfig;
