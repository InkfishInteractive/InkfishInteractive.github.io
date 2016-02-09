'use strict';

function Copy(text)
{
	this.brand = "Inkfish";
	this.tagline = "Inkfish is a creative design studio specializing in foos and baz.";
	this.taglineAlt = "Inkfish is a New England based design and development studio producing beautifully crafted websites and native apps for tech startups and large companies.";
	this.services = [
		"Web Design & Development New England",
		"Mobile App Design & Development New England",
		"Digital Marketing Agency New England"
	];
	this.highlights = [
	{
		title: "Design",
		cutline: "Inkfish can help design your journey. Together, we can create a place for your business to grow on the web. We'll design a plan that fits your needs and help you arrive at your destination - a comprehensive and user-friendly experience for your customers.",
		illustration: "//placehold.it/50x50"
	},
	{
		title: "Create",
		cutline: "Inkfish can create an effective web presence for your business, which will help guide customers to you by delivering an intuitive experience. We can provide a unique experience for your customers and help you stand out above the crowd.",
		illustration: "//placehold.it/35x35"
	},
	{
		title: "Mobilize",
		cutline: "Inkfish can tame mobile tech with apps designed to your needs. We can give you the power to connect with customers and grow your business through social media.",
		illustration: "//placehold.it/30x30"
	}];
	this.address = "471 N Main St<br>Norwich, CT 06360";
	this.phone = "+1 (347) 746-8454";
	this.email = "hello@inkfish.ink";
	this.imprinted = "Designed and developed in New England";
	this.legal = "&copy; 2016 Inkfish. All Rights Reserved";
}
