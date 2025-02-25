import { Generic } from '@a11y-ui/core';

import { PropLabel } from '../../types/props/label';
import { PropOpen } from '../../types/props/open';

type RequiredProps = NonNullable<unknown>;
type OptionalProps = {
	/**
	 * @deprecated Use label.
	 */
	summary: string;
} & PropOpen &
	PropLabel; // TODO v2: PropLabel will become required
export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

type RequiredStates = RequiredProps;
type OptionalStates = OptionalProps;

export type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export type API = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
