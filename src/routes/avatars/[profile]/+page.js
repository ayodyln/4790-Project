export function load({ params }) {
	//! When accessing data from parameters for dynamic routing. It is key to use
	//! Dot Notation to access the data point for this page.
	//! Since the dynamic route folder is [profile], you must point at the exact data point.
	console.log(params);
	const avatarName = params.profile;
	return { avatarName };
}
