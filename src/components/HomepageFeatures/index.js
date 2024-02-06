import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import unity from "./unity-white.png";

const FeatureList = [
	{
		title: "SISTEM MULTIMEDIA",
		// Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
		description: (
			<>
				Praktikum semester ganjil (Semester 1) yang dijalankan oleh prodi Teknik
				Informatika ITN Malang di Laboratorium GAMA, kalian akan mempelajari
				basic pembuatan poster, editing video sampai pembuatan media
				pembelajaran yang sederhana
			</>
		),
	},
	{
		title: "PENGOLAHAN CITRA DIGITAL",
		// Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",

		description: (
			<>
				Praktikum semester ganjil (Semester 3) yang dijalankan oleh prodi Teknik
				Informatika ITN Malang di Laboratorium GAMA, kalian akan mempelajari
				basic pengolahan citra dengan menggunakan <code>matlab</code>/{" "}
				<code>python</code>
			</>
		),
	},
	{
		title: "ANIMASI & GAME DEVELOPER",
		// img: require("@site/static/img/unity-logo.svg").default,
		img: unity,

		description: (
			<>
				Praktikum semester Genap (Semester 6) yang dijalankan oleh prodi Teknik
				Informatika ITN Malang di Laboratorium GAMA, kalian akan mempelajari
				pembuatan game 2D dengan menggunakan platform <code>Unity</code> dengan
				bahasa pemprograman <code>C#</code>
			</>
		),
	},
];

function Feature({ title, description, img }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				{/* <Svg className={styles.featureSvg} role="img" /> */}
				<img src={img} alt="" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
