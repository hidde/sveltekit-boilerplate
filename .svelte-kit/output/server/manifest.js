export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","styles.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"start-949e852e.js","js":["start-949e852e.js","chunks/vendor-c28e2ea2.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => import('./entries/endpoints/index.js'),
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
