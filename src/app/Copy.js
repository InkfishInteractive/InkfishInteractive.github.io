'use strict';

function Copy(text)
{
	this.brand = "Inkfish";
	this.tagline = "Inkfish is a creative design studio specializing in foos and baz.";
	this.taglineAlt = "Inkfish is a New England based design and development studio producing beautifully crafted websites and native apps for tech startups and large companies.";
	this.address = [
		"471 N Main St",
		"Norwich, CT 06360"
	];
	this.phone = "+1 (347) 746-8454";
	this.email = "hello@inkfish.ink";
	this.imprinted = "Designed and developed in New England";
	this.legal = "&copy; 2016 Inkfish. All Rights Reserved";
	this.social = [
	{
		title: 'twitter',
		link: '//twitter.com'
	},
	{
		title: 'facebook',
		link: '//facebook.com'
	},
	{
		title: 'google+',
		link: '//plus.google.com'
	}];
	this.services = [
	{
		title: "Web Design & Development New England",
		link: "web-design"
	},
	{
		title: "Mobile App Design & Development New England",
		link: "mobile-design"
	},
	{
		title: "Digital Marketing Agency New England",
		link: "digital-marketing"
	}];
	this.sections = {
		design:
		{
			title: "Design",
			body: "Inkfish can help design your journey. Together, we can create a place for your business to grow on the web. We'll design a plan that fits your needs and help you arrive at your destination - a comprehensive and user-friendly experience for your customers.",
			graphic: "//placehold.it/50x50"
		},
		create:
		{
			title: "Create",
			body: "Inkfish can create an effective web presence for your business, which will help guide customers to you by delivering an intuitive experience. We can provide a unique experience for your customers and help you stand out above the crowd.",
			graphic: "//placehold.it/35x35"
		},
		mobilize:
		{
			title: "Mobilize",
			body: "Inkfish can tame mobile tech with apps designed to your needs. We can give you the power to connect with customers and grow your business through social media.",
			graphic: "//placehold.it/30x30"
		},
		workTogether:
		{
			title: "Work together",
			body: "blurb about how great it is working together",
			graphic: "//placehold.it/100x100"
		},
		newBusiness:
		{
			title: "New business",
			graphic: "//placehold.it/200x200"
		}
	};
	this.samples = [
	{
		title: "Sample 1",
		cutline: "This is a 1 sample of work",
		graphic: "//placehold.it/200x200"
	},
	{
		title: "Sample 2",
		cutline: "This is a 2 sample of work",
		graphic: "//placehold.it/200x200"
	},
	{
		title: "Sample 3",
		cutline: "This is a 3 sample of work",
		graphic: "//placehold.it/200x200"
	},
	{
		title: "Sample 4",
		cutline: "This is a 4 sample of work",
		graphic: "//placehold.it/200x200"
	},
	{
		title: "Sample 5",
		cutline: "This is a 5 sample of work",
		graphic: "//placehold.it/200x200"
	},
	{
		title: "Sample 6",
		cutline: "This is a 6 sample of work",
		graphic: "//placehold.it/200x200"
	}];
}
