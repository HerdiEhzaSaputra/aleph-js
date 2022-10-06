import { mode } from 'https://esm.sh/@chakra-ui/theme-tools@2.0.12';
const Card = {
	baseStyle: (props: any) => ({
		p: '20px',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		position: 'relative',
		borderRadius: '20px',
		minWidth: '0px',
		wordWrap: 'break-word',
		bg: mode('#ffffff', 'navy.800')(props),
		backgroundClip: 'border-box'
	})
};

export const CardComponent = {
	components: {
		Card
	}
};
