import { Generic } from '@a11y-ui/core';

import { watchString, WatchStringOptions } from '../../utils/prop.validators';

/* types */
export type HrefPropType = string;

/**
 * This property is used for a link from a reference to the target URL.
 */
export type PropHref = {
	href: HrefPropType;
};

export type HrefProp = Generic.Element.Members<PropHref, unknown>;

/* validator */
export const validateHref = (component: Generic.Element.Component, value?: HrefPropType, options: WatchStringOptions = {}): void => {
	watchString(component, '_href', value, options);
};
