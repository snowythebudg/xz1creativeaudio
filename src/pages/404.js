import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsArrowLeftShort } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="150px 0 150px 0"
			min-height="100vh"
			lg-padding="90px 0 90px 0"
			quarkly-title="404-2"
			background="#000000 linear-gradient(-180deg,#00e3ff 0%,transparent 86.2%) 0 0 no-repeat"
		>
			<Override slot="SectionContent" max-width="1220px" justify-content="flex-start" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--dark">
					404
				</Text>
				<Text
					color="--dark"
					margin="8px 0px 16px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					letter-spacing="-0.025em"
					lg-margin="0px 0px 16px 0px"
				>
					Page not found
				</Text>
				<Text
					lg-width="80%"
					font="--lead"
					color="--dark"
					margin="0px 0px 36px 0px"
					text-align="center"
					lg-margin="0px 0px 24px 0px"
				>
					Sorry, we couldn’t find the page you’re looking for.
				</Text>
				<LinkBox
					flex-direction="row"
					padding="12px 8px 12px 8px"
					transition="--opacityOut"
					hover-opacity="0.7"
					lg-margin="0px 0px 20px 0px"
				>
					<Icon category="bs" icon={BsArrowLeftShort} size="24px" margin="4px 4px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="--lead" color="--dark">
						Back to home
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Components.Footer0619 />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"67e33fe29335410018cb77d7"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});