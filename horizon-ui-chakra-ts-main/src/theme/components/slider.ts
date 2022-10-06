import { mode } from 'https://esm.sh/@chakra-ui/theme-tools@2.0.12';
export const sliderStyles = {
	components: {
		RangeSlider: {
			variants: {
				main: (props: any) => ({
					thumb: {
						bg: mode('brand.500', 'brand.400')(props)
					}
				})
			}
		}
	}
};
