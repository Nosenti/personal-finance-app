/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgo: true,
						svgoConfig: {
							plugins: [
								{
									name: 'removeAttrs',
									params: {
										attrs: '(fill|stroke)'
									}
								},
								{
									name: 'addAttributesToSVGElement',
									params: {
										attributes: [{ fill: 'currentColor' }]
									}
								}
							]
						}
					}
				}
			]
		});

		return config;
	}
};

export default nextConfig;
