import { type ComponentPropsWithoutRef } from "react";

export function H1(props: ComponentPropsWithoutRef<"h1">) {
	return <h1 className="font-serif" {...props} />;
}

export function H2(props: ComponentPropsWithoutRef<"h2">) {
	return <h2 {...props} />;
}

export function H3(props: ComponentPropsWithoutRef<"h3">) {
	return <h3 {...props} />;
}

export function H4(props: ComponentPropsWithoutRef<"h4">) {
	return <h4 {...props} />;
}

export function H5(props: ComponentPropsWithoutRef<"h5">) {
	return <h5 {...props} />;
}

export function H6(props: ComponentPropsWithoutRef<"h6">) {
	return <h6 {...props} />;
}