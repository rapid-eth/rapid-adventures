export default [
	{
		label: 'Dashboard',
		to: '/dashboard',
		image: (
			<Atom.Image
				src="https://image.flaticon.com/icons/svg/1673/1673641.svg"
				sx={{mr: 3}}
			/>
		),
	},
	{
		label: 'Profile',
		to: '/dashboard/profile',
		image: (
			<Atom.Image
				src="https://image.flaticon.com/icons/png/512/1673/1673624.png"
				sx={{mr: 3}}
			/>
		),
		children: [
			{
				label: 'Admin',
				to: '/dashboard/profile/admin',
			},
		],
	},
	{
		label: 'Earn',
		to: '/dashboard/earn',
		image: (
			<Atom.Image
				src="https://image.flaticon.com/icons/png/512/1673/1673612.png"
				sx={{mr: 3}}
			/>
		),
	},
	{
		label: 'Give',
		to: '/dashboard/give',
		image: (
			<Atom.Image
				src="https://image.flaticon.com/icons/png/512/1673/1673599.png"
				sx={{mr: 3}}
			/>
		),
	},
	{
		label: 'Guide',
		to: '/dashboard/guide',
		image: (
			<Atom.Image
				src="https://image.flaticon.com/icons/png/512/1673/1673600.png"
				sx={{mr: 3}}
			/>
		),
	},
	{
		label: 'Settings',
		to: '/dashboard/settings',
		image: (
			<Atom.Image
				src="https://image.flaticon.com/icons/png/512/1673/1673604.png"
				sx={{mr: 3}}
			/>
		),
	},
];
