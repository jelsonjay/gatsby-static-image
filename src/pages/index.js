import * as React from 'react';
import * as styles from './styles.module.css';
import { StaticImage } from 'gatsby-plugin-image';
// markup

const IndexPage = () => {
	return (
		<div className={styles.container}>
			<h1>Gatsby Static image</h1>
			<StaticImage
				className={styles.avatar}
				alt='Avatar'
				style={{ position: 'absolute' }}
				src='https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg'
				//src='images/fast-furios.jpg'
			/>
		</div>
	);
};

export default IndexPage;
