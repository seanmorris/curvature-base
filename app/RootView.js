import { View  } from 'curvature/base/View';

export class RootView extends View
{
	constructor(args = {})
	{
		super(args);

		this.routes = {
			'': false
		};

		this.args.content = 'Hello, world!';

		this.template = `
			<span>[[content]]</span>
		`;
	}
}
