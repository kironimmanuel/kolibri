import { Generic } from '@a11y-ui/core';
import { KoliBriButtonCallbacks, LinkTarget } from './button-link';
import { Stringified } from './common';
import { KoliBriIconProp } from './icon';
import { Label } from './props/label';

/**
 * This types specifies the props of a link or button in navigations.
 * We will support a mixin of link and button inside a navigation.
 * Not all possible props of a link or button are relevant and supported.
 */

// do not inherit RequiredLinkProps
type RequiredButtonProps = Label & {
	on: KoliBriButtonCallbacks<unknown>; // actually no value is relevant
};
type RequiredLinkProps = Label & {
	href: string;
};
type RequiredTextProps = Label;
// do not inherit OptionalLinkProps
type OptionalButtonOrLinkOrTextProps = {
	active: boolean;
	icon: Stringified<KoliBriIconProp>;
	// tabIndex: number; // possible, but sensible ?!
	// tooltipAlign: Alignment; // possible, but sensible ?!
	target: LinkTarget;
	targetDescription: string;
};
type OptionalButtonProps = OptionalButtonOrLinkOrTextProps & {
	disabled: boolean;
};
export type ButtonProps = Generic.Element.Members<RequiredButtonProps, OptionalButtonProps>;
export type LinkProps = Generic.Element.Members<RequiredLinkProps, OptionalButtonOrLinkOrTextProps>;
export type TextProps = Generic.Element.Members<RequiredTextProps, OptionalButtonOrLinkOrTextProps>;
export type ButtonOrLinkOrTextProps = ButtonProps | LinkProps | TextProps;

type OptionalButtonOrLinkOrTextWithChildrenProps = OptionalButtonOrLinkOrTextProps & {
	children: ButtonOrLinkOrTextWithChildrenProps[];
};
type OptionalButtonWithChildrenProps = OptionalButtonProps & {
	children: ButtonOrLinkOrTextWithChildrenProps[];
};
export type ButtonWithChildrenProps = Generic.Element.Members<RequiredButtonProps, OptionalButtonWithChildrenProps>;
export type LinkWithChildrenProps = Generic.Element.Members<RequiredLinkProps, OptionalButtonOrLinkOrTextWithChildrenProps>;
export type TextWithChildrenProps = Generic.Element.Members<RequiredTextProps, OptionalButtonOrLinkOrTextWithChildrenProps>;
export type ButtonOrLinkOrTextWithChildrenProps = ButtonWithChildrenProps | LinkWithChildrenProps | TextWithChildrenProps;
