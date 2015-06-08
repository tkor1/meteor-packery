Package.describe({
	name: 'tkor1:meteor-packery',
	summary: 'Plug & play package of Masonry',
	version: '0.0.1',
	git: 'https://github.com/tkor1/meteor-packery'
});

Package.onUse(function (api) {
	api.versionsFrom('0.9.0');

	api.use('jquery', 'client');

	api.addFiles('lib/dist/packery.pkgd.js', 'client');
});
