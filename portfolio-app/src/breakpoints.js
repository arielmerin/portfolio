const _size = {
	xs: '320px',
	sm: '768px',
	lg: '1200px',
}
const device = {
	xs: `(min-width: ${_size.xs})`,
	sm: `(min-width: ${_size.sm})`,
	lg: `(min-width: ${_size.lg})`
}

const breakpoint = {device}
export default breakpoint;