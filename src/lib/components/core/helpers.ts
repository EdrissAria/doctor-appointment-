export function cls(name, props, staticClasses) {
	let result = [name];
	for (let key in props) {
		if (props[key] == true) {
			result.push(name + '-' + key);
		} else if (props[key]) {
			result.push(name + '-' + key + '-' + props[key]);
		}
	}
	result.push(staticClasses);
	return result.join(' ');
}
