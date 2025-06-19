import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Strong, Link } from "@quarkly/widgets";
import Footer325 from "./Footer325";
const defaultProps = {};
const overrides = {
	"br": {
		"kind": "br",
		"props": {}
	},
	"strong": {
		"kind": "Strong",
		"props": {
			"overflow-wrap": "normal",
			"word-break": "normal",
			"white-space": "normal",
			"text-indent": "0",
			"text-overflow": "clip",
			"hyphens": "manual",
			"user-select": "auto",
			"pointer-events": "auto",
			"data-propinfo-id": "68548b52faf53f1a9ab13281",
			"children": <Link href="mailto:artistservices@xz1recordings.ca" color="#00e3ff">
				artistservices@xz1recordings.ca
			</Link>
		}
	}
};

const Footer0619 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer325 {...rest}>
		<Override slot="text1">
			XZ1 Mastering Enterprises is the best way to get your music mastered and mixed, all at competitve prices.
		</Override>
		<Override slot="text6" color="#00e3ff" width="100%">
			© 2025 XZ1 Mastering Enterprises (formerly XZ1 Creative Audio Industries), a division of XZ1 Recording Ventures
		</Override>
		<Override slot="text4" color="#00e3ff">
			HOURS
		</Override>
		<Override slot="text5" color="#00e3ff" />
		<Override slot="text2" color="#00e3ff" />
		<Override slot="text" color="#00e3ff" />
		<Override slot="text3">
			E-mail
			<br {...override("br")} />
			<Strong {...override("strong")} />
		</Override>
		{children}
	</Footer325>;
};

Object.assign(Footer0619, { ...Footer325,
	defaultProps,
	overrides
});
export default Footer0619;