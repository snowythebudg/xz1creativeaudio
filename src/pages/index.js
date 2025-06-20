import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Strong, Icon, Span, List, Button, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdCloudUpload, MdRefresh } from "react-icons/md";
import { IoMdSettings, IoIosCheckmark } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				XZ1 Mastering Enterprises - Top tier mastering at competitive prices
			</title>
			<meta name={"description"} content={"XZ1 Mastering Enterprises is your place to go for affordable music mastering. We offer mastering in a multitude of formats and have addons that cater to everyone's needs."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/67e33fe29335410018cb77d9/images/XZ1%20REDESIGN%20TAKE%20II.png?v=2025-06-19T23:15:31.624Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			sm-padding="8px 0 8px 0"
			quarkly-title="Header-6"
			padding="24px 0px 24px 0px"
			color="#ffffff"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				width="100%"
				padding="0px 24px 0px 24px"
			/>
			<Text text-align="left" font="28px --fontFamily-googleMichroma" color="#00e3ff" padding="0px 0px 0px \\">
				XZ1 Mastering Enterprises
			</Text>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0 40px 0" background="url(https://images.unsplash.com/photo-1636215096587-21982fbf5843?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="360px" padding="50px 80px 80px 50px" background="#000000" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--light"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About us
				</Text>
				<Text as="h2" font="--headline3" margin="0 0 12px 0" color="#ffffff">
					What is XZ1 Mastering Enterprises
				</Text>
				<Text font="--base" color="#ffffff">
					XZ1 Mastering Enterprises (formerly XZ1 Creative Audio Industries) offers top-tier music mixing and mastering services designed to elevate the sound of every project. With a team of experienced mastering engineers and state-of-the-art technology, XZ1 specializes in crafting polished, professional tracks that meet the highest industry standards. Whether working with independent artists or established labels, XZ1 is dedicated to perfecting every detail, ensuring that each song is sonically rich, balanced, and ready for distribution across all platforms. The division’s passion for audio precision and commitment to artistic vision make it a trusted partner in the world of music production.{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="60px 0 60px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="#000000"
			quarkly-title="Advantages/Features-6"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 48px 0px"
				lg-justify-content="center"
			>
				<Text as="p" font="--base" color="#00e3ff" margin="0px 0px 8px 0px">
					<Strong>
						Why choose us?
					</Strong>
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					lg-text-align="center"
				>
					Why XZ1 Mastering Enterprises is better then competitors or AI audio services
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--light"
					width="50%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					lg-text-align="center"
					lg-width="100%"
				>
					There are multiple reasons resorting to XZ1 Mastering Enterprises for your audio mastering needs is better than using competitors or AI audio services.
				</Text>
			</Box>
			<List
				margin="40px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				as="ul"
				sm-margin="24px 0 0 0"
				list-style-type="none"
				font="normal normal 18px/150% sans-serif"
				display="grid"
				flex-direction="column"
				grid-gap="24px 32px"
				lg-margin="32px 0px 0px 0px"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="md"
						icon={MdCloudUpload}
						size="20px"
						margin="5px 0 0 0"
						color="#00e3ff"
					/>
					<Text padding="0" margin="0" color="--light">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Competitive pricing.{" "}
							<Span
								font-weight="300"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								At XZ1 Mastering Enterprises. We strive to provide the best pricing in the market. You can view our Pricing page to see all of our offers!
							</Span>
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="md"
						icon={MdRefresh}
						size="20px"
						color="#00e3ff"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Multiple takes.{" "}
							<Span
								font-weight="300"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								All services include 1 free retake per track with extra retakes costing $2.99
							</Span>
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="md"
						icon={MdRefresh}
						size="20px"
						color="#00e3ff"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							No robots involved.{" "}
							<Span
								font-weight="300"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								All mastering is done by a human in Adobe Audition to ensure that the quality of your mastered audio is to our highest standard.
							</Span>
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="io"
						icon={IoMdSettings}
						size="20px"
						color="#00e3ff"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light" font="18px/27px --fontFamily-sans">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Quick turnaround times.{" "}
							<Span font-weight="300">
								We deliver your mastered/mixed audio back to you within 1-2 days, sometimes within hours for singles while EP's and albums will take no more than 4 days!
								<br />
							</Span>
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="io"
						icon={IoMdSettings}
						size="20px"
						margin="5px 0 0 0"
						color="#00e3ff"
					/>
					<Text padding="0" margin="0" color="--light" font="18px/27px --fontFamily-sans">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Tons of addons.{" "}
							<Span
								font-weight="300"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								We offer a multitude of addons to enhance your mastered audio
								<br />
							</Span>
						</Span>
					</Text>
				</Box>
			</List>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				Place a one-off order
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				To place a REGULAR one off mastering order with XZ1 Mastering Enterprises (subscriptions can be purchased below). You can order through music distribution platform Tunearo or you can order through us directly. To place an order with Tunearo, please follow the steps in their mastering portal. To order directly through XZ1 Mastering Enterprises, click below to view our pricelist and send an email to artistservices@xz1recordings.ca with what you want. If we sign off on your order, you can send us your files. We'll do our magic, and then we'll send 30 second previews of each track to ensure that it's good with you. After that, we'll send you an invoice with everything you need to pay. You have 7 days to pay. Extended payment policies available in the price list below.
			</Text>
			<Button
				font="--lead"
				margin="20px"
				background="radial-gradient(circle at center,#00e3ff 0%,transparent 100%) 0 0 no-repeat"
				type="link"
				href="https://files.xz1recordings.ca/documents/label/mastering/XZ1MASTERINGPRICELIST0619.pdf"
				target="_blank"
			>
				<Strong>
					View price list
				</Strong>
			</Button>
		</Section>
		<Section
			padding="120px 0 0 0"
			background="#00e3ff linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 9.5%,rgba(0,0,0,1) 100%) 0% 0% /cover repeat scroll padding-box"
			lg-margin="0 0 0 0"
			lg-padding="80px 0 80px 0"
			quarkly-title="Price-8"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				justify-content="flex-start"
				max-width="none"
				min-width="none"
				width="100%"
			/>
			<Box
				min-width="300px"
				max-width="1280px"
				display="flex"
				flex-direction="column"
				align-items="center"
				justify-content="flex-start"
				lg-padding="0px 20px 0px 20px"
			>
				<Text
					margin="0px 0px 20px 0px"
					font="--lead"
					color="#ffffff"
					lg-margin="0px 0px 20px 0px"
					text-align="center"
				>
					Buy a subscription pass
				</Text>
				<Text
					margin="0px 0px 20px 0px"
					font="normal 600 46px/1.2 --fontFamily-googleMichroma"
					text-align="center"
					md-margin="0px 0px 50px 0px"
					align-self="center"
					color="--light"
					sm-margin="0px 0px 30px 0px"
				>
					XZ1 All Access Mastering
				</Text>
				<Text
					margin="0px 0px 70px 0px"
					text-align="center"
					font="normal 400 20px/1.5 --fontFamily-googleRobotoCondensed"
					width="600px"
					align-self="center"
					md-width="100%"
					color="#ffffff"
					md-margin="0px 0px 60px 0px"
					sm-margin="0px 0px 40px 0px"
				>
					All plans come with unlimited mastering and any format for mastered audio
				</Text>
				<Box
					display="flex"
					margin="0px 120px -180px 120px"
					md-flex-direction="column"
					border-width="1px"
					grid-template-columns="repeat(2, 1fr)"
					lg-align-items="stretch"
					lg-display="flex"
					lg-flex-direction="row"
					lg-grid-gap="36px"
					lg-justify-content="flex-start"
					lg-margin="0px 120px -250px 120px"
					lg-width="100%"
					sm-margin="0px 0px -250px 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						padding="40px 40px 40px 40px"
						border-width="1px"
						border-style="solid"
						border-color="#bec3ca"
						border-radius="15px"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						background="#000000"
						md-margin="0px 0px 0px 0px"
						position="relative"
						z-index="2"
						margin="0px 15px 0px 0px"
						box-shadow="--l"
						sm-margin="0px 0px 0px 0px"
						sm-padding="30px 25px 30px 25px"
						lg-margin="0px 0px 0px 0px"
					>
						<Box min-width="100px" min-height="100px">
							<Text
								margin="0px 0px 8px 0px"
								font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
								color="#00e3ff"
								lg-margin="0px 0px 20px 0px"
								sm-margin="0px 0px 10px 0px"
							>
								XZ1 All Access (Monthly)
							</Text>
							<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-googleMichroma" color="#00e3ff">
								<Span
									font="normal 700 46px/1.2 --fontFamily-sans"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
									color="#ffffff"
								>
									C$6.79
								</Span>
								{" "}/ month
							</Text>
							<Text margin="0px 0px 20px 0px" font="normal 400 17px/1.5 --fontFamily-sansHelvetica" color="#ffffff" sm-margin="0px 0px 18px 0px">
								Unlimited mastering with monthly payments. Includes 1 free retake per track and masters in any format of your choosing{"\n\n"}
							</Text>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Unlimited mastering
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Unlimited retakes
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0px 0px 0 0px"
							>
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Custom format
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0px 0px 35px 0px"
								sm-margin="0px 0px 22px 0px"
							>
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									No free addons and credited releases
								</Text>
							</Box>
						</Box>
						<Button
							background="radial-gradient(circle at center,#00e3ff 0%,transparent 100%) 0 0 no-repeat"
							color="--light"
							border-color="--color-light"
							border-radius="4px"
							font="normal 400 17px/1.5 --fontFamily-sansHelvetica"
							type="link"
							text-align="center"
							href="https://buy.stripe.com/9B68wQ74O5FdeWec4ta7C0c"
							target="_blank"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Purchase this plan
							</Strong>
						</Button>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="40px 40px 40px 40px"
						border-width="1px"
						border-style="solid"
						border-color="#bec3ca"
						border-radius="15px"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						background="#000000"
						position="relative"
						z-index="2"
						margin="0px 0px 0px 15px"
						box-shadow="--l"
						md-margin="0px 0px 0px 0"
						sm-padding="30px 25px 30px 25px"
						lg-margin="0px 0px 0px 0px"
					>
						<Box min-width="100px" min-height="100px">
							<Text
								margin="0px 0px 8px 0px"
								font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
								color="#00e3ff"
								lg-margin="0px 0px 20px 0px"
								sm-margin="0px 0px 10px 0px"
							>
								XZ1 All Access (Annual)
							</Text>
							<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-googleMichroma" color="#00e3ff">
								<Span
									font="normal 700 46px/1.2 --fontFamily-sans"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
									color="#ffffff"
								>
									C$43.59
								</Span>
								/ year
							</Text>
							<Text margin="0px 0px 20px 0px" font="normal 400 17px/1.5 --fontFamily-sansHelvetica" color="#ffffff" sm-margin="0px 0px 18px 0px">
								Unlimited mastering with lower priced yearly payments. Includes unlimited retakes and masters in any format of your choosing{"\n\n"}
							</Text>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Unlimited mastering
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Unlimited retakes
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0px 0px 0 0px"
							>
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Custom format
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0px 0px 0 0px"
							>
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Free addons and uncredited releases
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0px 0px 35px 0px"
								sm-margin="0px 0px 22px 0px"
							>
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#00e3ff"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 400 18px/1.2 --fontFamily-sansHelvetica" color="#ffffff">
									Discounted yearly billing
								</Text>
							</Box>
						</Box>
						<Button
							background="radial-gradient(circle at center,#00e3ff 0%,transparent 100%) 0 0 no-repeat"
							color="#ffffff"
							border-color="--color-light"
							border-radius="4px"
							font="normal 400 17px/1.5 --fontFamily-sansHelvetica"
							type="link"
							text-align="center"
							href="https://buy.stripe.com/7sYbJ20Gq5Fd4hA0lLa7C0b"
							target="_blank"
						>
							<Strong>
								Purchase this plan
							</Strong>
						</Button>
					</Box>
				</Box>
			</Box>
			<Box
				width="100%"
				background="#000000"
				padding="250px 0px 120px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
				justify-content="flex-start"
				lg-padding="250px 20px 120px 20px"
			>
				<Box
					min-width="280px"
					min-height="10px"
					margin="0px 140px 0px 140px"
					display="flex"
					justify-content="space-between"
					align-items="center"
					padding="25px 25px 25px 25px"
					border-width="1px"
					border-style="solid"
					border-color="#bec3ca"
					border-radius="15px"
					lg-margin="40px 0 0px 0"
					sm-flex-direction="column"
					md-flex-direction="column"
					md-align-items="stretch"
					max-width="1280px"
				>
					<Box
						min-width="10px"
						min-height="10px"
						width="70%"
						sm-width="100%"
						sm-text-align="center"
						md-flex-direction="column"
					>
						<Text margin="0px 0px 10px 0px" font="normal 600 22px/1.2 --fontFamily-sans" color="#00e3ff">
							Custom plans
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="normal 400 17px/1.5 --fontFamily-sansHelvetica"
							color="#ffffff"
							padding="0px 70px 0px 0px"
							md-padding="0px 0px 0px 0px"
							md-margin="0px 0px 20px 0px"
						>
							Contact our team today to learn more about pricing and/or to create a custom plan built for you or your company!
						</Text>
					</Box>
					<Button
						color="#00e3ff"
						border-color="#00e3ff"
						border-radius="4px"
						font="normal 400 17px/1.5 --fontFamily-sansHelvetica"
						background="rgba(155, 108, 252, 0)"
						border-width="1px"
						border-style="solid"
						type="link"
						href="mailto:artistservices@xz1recordings.ca"
					>
						Send an email
					</Button>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				Manage payments
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				To manage your subscription pass, change your billing information, or view your payment history. Click the button below to access the XZ1 Payment Manager.
			</Text>
			<Button
				font="--lead"
				margin="20px"
				type="link"
				href="https://billing.stripe.com/p/login/aFa3cw74O4B9bK22tTa7C00"
				background="radial-gradient(ellipse at center,#00e3ff 0%,transparent 100%) 0 0 no-repeat"
			>
				<Strong>
					To XZ1 Payment Manager
				</Strong>
			</Button>
		</Section>
		<Section background="#000000" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="#00e3ff"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Contact XZ1 MASTERING ENTERPRISES
						</Text>
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0" color="#ffffff">
							Send us a message!
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xgvylvzz" completeText="Thank you! We will get back to you ASAP" errorMessage="Your message did not go through. Please try again">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Name
									</Text>
									<Input width="100%" name="name" type="text" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button background="radial-gradient(circle at center,#00e3ff 0%,transparent 100%) 0 0 no-repeat">
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
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