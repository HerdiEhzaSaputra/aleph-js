import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { CardComponent } from './additions/card/card.ts';
import { buttonStyles } from './components/button.ts';
import { badgeStyles } from './components/badge.ts';
import { inputStyles } from './components/input.ts';
import { progressStyles } from './components/progress.ts';
import { sliderStyles } from './components/slider.ts';
import { textareaStyles } from './components/textarea.ts';
import { switchStyles } from './components/switch.ts';
import { linkStyles } from './components/link.ts';
import { globalStyles } from './styles.ts';

export default extendTheme({
	globalStyles,
	badgeStyles, // badge styles
	buttonStyles, // button styles
	linkStyles, // link styles
	progressStyles, // progress styles
	sliderStyles, // slider styles
	inputStyles, // input styles
	textareaStyles, // textarea styles
	switchStyles, // switch styles
	CardComponent, // card component
	fonts: {
		heading: `'xezar app font', sans-serif`,
	}
});

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}
