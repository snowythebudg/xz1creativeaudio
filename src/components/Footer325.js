import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box, Strong, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "90px 0 30px 0",
	"md-padding": "60px 0 30px 0",
	"quarkly-title": "Footer-15",
	"background": "#000000"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"margin": "0px 0px 50px 0px",
			"grid-template-columns": "repeat(4, 1fr)",
			"grid-gap": "36px 34px",
			"lg-grid-template-columns": "repeat(3, 1fr)",
			"lg-flex-wrap": "wrap"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"padding": "0px 50px 0px 0",
			"md-width": "90%",
			"sm-margin": "40px 0px 0px 0",
			"sm-width": "100%",
			"sm-padding": "0px 0px 0px 0",
			"margin": "0px 0 0px 0px",
			"lg-width": "100%",
			"lg-padding": "0px 0 0px 0"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 18px/1.5 --fontFamily-sans",
			"letter-spacing": "1px",
			"color": "#ff00ac",
			"children": "ABOUT US"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0 0px",
			"font": "normal 300 16px/1.5 --fontFamily-sansTrebuchet",
			"color": "#ffffff",
			"lg-max-width": "640px",
			"children": "XZ1 Creative Audio Industries is the best way to get your music mastered and mixed, all at competitve prices."
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"margin": "0px 0 0px 0px",
			"width": "25%",
			"padding": "0px 0 0px 0px",
			"lg-width": "30%",
			"md-width": "45%",
			"sm-width": "100%"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 18px/1.5 --fontFamily-sans",
			"letter-spacing": "1px",
			"color": "#ff00ac",
			"children": "CONTACT INFO"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 5px 0px",
			"font": "normal 300 16px/1.5 --fontFamily-sansTrebuchet",
			"color": "#ffffff",
			"children": <>
				E-mail
				<br />
				<Link href="#" color="#ff00ac">
					<Strong>
						artistservices@xz1recordings.ca
					</Strong>
				</Link>
			</>
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"margin": "0px 0 0px 0px",
			"width": "25%",
			"lg-width": "30%",
			"md-width": "45%",
			"sm-width": "100%"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 18px/1.5 --fontFamily-sans",
			"letter-spacing": "1px",
			"color": "#ff00ac",
			"children": "ADDRESS"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "tel:+9877654321223",
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"font": "normal 300 16px/1.5 --fontFamily-sansTrebuchet",
			"display": "block",
			"margin": "0px 0px 15px 0px",
			"children": <>
				Mon to Fri (10 am – 6 pm)
				<br />
				Sat (12 pm – 6 pm){" "}
			</>
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"margin": "0px 0 0px 0",
			"width": "25%",
			"lg-width": "30%",
			"md-width": "100%",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "flex-start"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 18px/1.5 --fontFamily-sans",
			"letter-spacing": "1px",
			"color": "#ff00ac",
			"children": "SOCIAL MEDIA"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://instagram.com/xz1recventures",
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"margin": "0px 0px 5px 0px",
			"display": "inline-block",
			"font": "normal 300 16px/1.5 --fontFamily-sansTrebuchet",
			"hover-color": "--primary",
			"children": "Instagram"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://x.com/xz1recs",
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"margin": "0px 0px 5px 0px",
			"font": "normal 300 16px/1.5 --fontFamily-sansTrebuchet",
			"display": "inline-block",
			"hover-color": "--primary",
			"children": "X"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "space-between",
			"md-align-items": "flex-start",
			"md-flex-direction": "column"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "#ffff",
			"md-margin": "0px 0px 0 0px",
			"width": "30%",
			"md-width": "100%",
			"margin": "0 0px 0 0px",
			"children": "© 2025 XZ1 Creative Audio Industries (XZ1CAI), a division of BluWave Digital Entertainment (offered by XZ1 Recordings)"
		}
	}
};

const Footer325 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
				<Text {...override("text1")} />
			</Box>
			<Box {...override("box2")}>
				<Text {...override("text2")} />
				<Text {...override("text3")} />
			</Box>
			<Box {...override("box3")}>
				<Text {...override("text4")} />
				<Link {...override("link")} />
			</Box>
			<Box {...override("box4")}>
				<Text {...override("text5")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
			</Box>
		</Box>
		<Box {...override("box5")}>
			<Text {...override("text6")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer325, { ...Section,
	defaultProps,
	overrides
});
export default Footer325;