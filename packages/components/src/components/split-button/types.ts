import { Generic } from '@a11y-ui/core';

import { StencilUnknown } from '../../components';
import { PropAlternativeButtonLinkRole } from '../../types/props/alternative-button-link-role';
import { ButtonCallbacksPropType } from '../../types/props/button-callbacks';
import { PropButtonVariant } from '../../types/props/button-variant';
import { PropIcon } from '../../types/props/icon';
import { PropLabel } from '../../types/props/label';
import { PropTooltipAlign } from '../../types/props/tooltip-align';

type RequiredProps = PropLabel;
type OptionalProps = {
	on?: ButtonCallbacksPropType<StencilUnknown>;
	showDropdown: boolean;
} & PropAlternativeButtonLinkRole &
	PropIcon &
	PropTooltipAlign &
	PropButtonVariant;

type RequiredStates = {
	showDropdown: boolean;
};
type OptionalStates = NonNullable<unknown>;

type RequiredWatchers = RequiredStates;
type OptionalWatchers = OptionalStates;

export type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export type API = Generic.Element.Component &
	Generic.Element.Members<RequiredProps, OptionalProps> &
	Generic.Element.Watchers<RequiredWatchers, OptionalWatchers> & {
		readonly state: Generic.Element.Members<RequiredStates, OptionalStates>;
	};
