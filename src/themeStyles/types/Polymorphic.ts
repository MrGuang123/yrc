import React from 'react'

type ExtendedProps<_ExtendedProps = {}, OverrideProps = {}> = OverrideProps & Omit<_ExtendedProps, keyof OverrideProps>;

type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
    JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type ComponentProps<C extends React.ElementType> = {
    component?: C;
}

type InheritedProps<C extends React.ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = InheritedProps<
    C,
    Props & ComponentProps<C>
> & { ref?: PolymorphicRef<C> };