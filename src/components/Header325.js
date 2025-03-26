import React from "react";
import { useOverrides, Override, SocialMedia } from "@quarkly/components";
import { Text, LinkBox, Box, Icon, Span, Link, Section } from "@quarkly/widgets";
import QuarklycommunityKitMenu from "./QuarklycommunityKitMenu";
import QuarklycommunityKitMobileSidePanel from "./QuarklycommunityKitMobileSidePanel";
import { FiMenu } from "react-icons/fi";
import { GiFairyWings } from "react-icons/gi";
const defaultProps = {
	"sm-padding": "8px 0 8px 0",
	"quarkly-title": "Header-3",
	"background": "#ffffff"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "flex-start",
			"flex-direction": "row",
			"width": "30%",
			"sm-width": "50%",
			"sm-align-items": "center",
			"sm-flex-direction": "row",
			"sm-justify-content": "flex-start",
			"md-width": "50%",
			"lg-width": "70%",
			"md-justify-content": "flex-start"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"flex-direction": "row",
			"href": "/index",
			"display": "flex",
			"grid-gap": "12px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 0px 0",
			"text-align": "left",
			"font": "--lead",
			"sm-margin": "0px 0 0px 0",
			"display": "block",
			"color": "#000000",
			"children": "XZ1 Creative Audio Industries"
		}
	},
	"quarklycommunityKitMobileSidePanel": {
		"kind": "QuarklycommunityKitMobileSidePanel",
		"props": {
			"menuPosition": "full",
			"breakpoint": "lg",
			"width": "70%",
			"sm-width": "50%",
			"md-width": "50%",
			"lg-width": "30%"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride": {
		"kind": "Override",
		"props": {
			"slot": "Children",
			"md-display": "flex"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"lg-background": "#ffffff",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Button Text",
			"font": "normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"sm-font": "normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-margin": "0px 2px 0px 0px",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon :closed",
			"category": "fi",
			"icon": FiMenu,
			"size": "32px",
			"padding": "5px 7px 5px 7px",
			"border-radius": "50px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon",
			"width": "28px",
			"height": "28px",
			"category": "fi",
			"icon": FiMenu,
			"color": "--dark",
			"size": "24px",
			"lg-width": "32px",
			"lg-height": "32px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Cross",
			"lg-width": "32px",
			"lg-height": "32px",
			"size": "32px",
			"top": "24px",
			"right": "24px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"align-items": "center",
			"lg-justify-content": "center",
			"lg-align-items": "flex-start",
			"justify-content": "flex-end",
			"display": "flex",
			"lg-flex-direction": "column",
			"lg-margin": "0px auto 0px auto",
			"lg-min-width": "300px",
			"lg-max-width": "1280px",
			"lg-width": "90%",
			"lg-padding": "24px 0px 48px 0px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "none",
			"lg-width": "100%",
			"lg-margin": "0px 0px 24px 0px",
			"lg-display": "flex",
			"lg-padding": "12px 0px 12px 0px"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"flex-direction": "row",
			"href": "/index",
			"display": "flex",
			"grid-gap": "12px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "gi",
			"icon": GiFairyWings,
			"color": "#6d32ec",
			"size": "37px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 0px 0",
			"text-align": "left",
			"font": "--lead",
			"sm-margin": "0px 0 0px 0",
			"display": "block",
			"children": "Company"
		}
	},
	"quarklycommunityKitMenu": {
		"kind": "QuarklycommunityKitMenu",
		"props": {
			"display": "flex",
			"filterMode": "exclude",
			"filterPages": "/index",
			"grid-gap": "8px",
			"lg-flex-direction": "column",
			"lg-padding": "6px 0px 6px 0px",
			"lg-margin": "0px 0px 24px 0px",
			"align-items": "center",
			"flex-wrap": "wrap",
			"overflow-x": "visible",
			"overflow-y": "visible",
			"lg-align-items": "flex-start",
			"color": "#ffffff"
		}
	},
	"quarklycommunityKitMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "--darkL2",
			"hover-color": "--primary",
			"font": "600 16px sans-serif",
			"text-decoration-line": "initial",
			"transition": "color 0.1s ease 0s",
			"lg-font": "--lead"
		}
	},
	"quarklycommunityKitMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-active",
			"border-width": 0
		}
	},
	"quarklycommunityKitMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px 8px 6px 8px"
		}
	},
	"quarklycommunityKitMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"cursor": "default",
			"color": "--primary"
		}
	},
	"quarklycommunityKitMenuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-about"
		}
	},
	"quarklycommunityKitMenuOverride5": {
		"kind": "Override",
		"props": {
			"slot": "link-pricing",
			"color": "--darkL2",
			"children": <Span font-weight="normal">
				Pricing
			</Span>
		}
	},
	"quarklycommunityKitMenuOverride6": {
		"kind": "Override",
		"props": {
			"slot": "link-contact",
			"color": "--darkL2",
			"children": <Span font-weight="normal">
				Contact
			</Span>
		}
	},
	"quarklycommunityKitMenuOverride7": {
		"kind": "Override",
		"props": {
			"slot": "item-contact",
			"color": "#ffffff"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"display": "none",
			"lg-width": "100%",
			"lg-flex-direction": "column",
			"lg-align-items": "flex-start",
			"lg-display": "flex",
			"justify-content": "space-around",
			"align-items": "center",
			"flex-wrap": "wrap",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"font": "--lead",
			"padding": "10px 0px 10px 0px",
			"margin": "0px 0px 6px 0px",
			"href": "tel:12345678",
			"text-decoration-line": "initial",
			"color": "--dark",
			"lg-margin": "0px 0px 24px 0px",
			"children": "+1(234)567-89-00"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"instagram": "https://instagram.com/instagram",
			"margin": "0px 0px 0px 0px",
			"facebook": "https://www.facebook.com/quarklyapp/",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"lg-display": "flex",
			"lg-grid-gap": "12px"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link-twitter",
			"margin": "0px 0px 0px 5px",
			"children": <div />
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"border-radius": "50%",
			"background": "transparent",
			"hover-color": "--light",
			"display": "flex",
			"margin": "0 5px 0 5px",
			"padding": "5x 5px 5px 5px",
			"width": "32px",
			"height": "32px",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"socialMediaOverride2": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"size": "32px",
			"border-radius": "50px",
			"color": "--darkL2"
		}
	},
	"socialMediaOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-facebook",
			"margin": "0px 5px 0px 0px",
			"children": <div />
		}
	}
};

const Header325 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
		<Box {...override("box")}>
			<LinkBox {...override("linkBox")}>
				<Text {...override("text")} />
			</LinkBox>
		</Box>
		<QuarklycommunityKitMobileSidePanel {...override("quarklycommunityKitMobileSidePanel")}>
			<Override {...override("quarklycommunityKitMobileSidePanelOverride")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride1")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride2")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride3")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride4")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride5")} />
			<Box {...override("box1")}>
				<Box {...override("box2")}>
					<LinkBox {...override("linkBox1")}>
						<Icon {...override("icon")} />
						<Text {...override("text1")} />
					</LinkBox>
				</Box>
				<QuarklycommunityKitMenu {...override("quarklycommunityKitMenu")}>
					<Override {...override("quarklycommunityKitMenuOverride")} />
					<Override {...override("quarklycommunityKitMenuOverride1")} />
					<Override {...override("quarklycommunityKitMenuOverride2")} />
					<Override {...override("quarklycommunityKitMenuOverride3")} />
					<Override {...override("quarklycommunityKitMenuOverride4")} />
					<Override {...override("quarklycommunityKitMenuOverride5")} />
					<Override {...override("quarklycommunityKitMenuOverride6")} />
					<Override {...override("quarklycommunityKitMenuOverride7")} />
				</QuarklycommunityKitMenu>
				<Box {...override("box3")}>
					<Link {...override("link")} />
					<SocialMedia {...override("socialMedia")}>
						<Override {...override("socialMediaOverride")} />
						<Override {...override("socialMediaOverride1")} />
						<Override {...override("socialMediaOverride2")} />
						<Override {...override("socialMediaOverride3")} />
					</SocialMedia>
				</Box>
			</Box>
		</QuarklycommunityKitMobileSidePanel>
		{children}
	</Section>;
};

Object.assign(Header325, { ...Section,
	defaultProps,
	overrides
});
export default Header325;