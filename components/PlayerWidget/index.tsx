import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Song } from '../../types';

const song = {
	id: '1',
	imageUri: 'https://source.unsplash.com/collection/190725/',
	title: 'Chicken Rice',
	artist: 'Hamada',
};

const PlayerWidget = () => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: song.imageUri }} style={styles.image} />
			<View style={styles.rightContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.title}>{song.title}</Text>
					<Text style={styles.artist}>{song.artist}</Text>
				</View>
				<View style={styles.iconsContainer}>
					<AntDesign name="hearto" size={30} color={'white'} />
					<FontAwesome name="play" size={30} color={'white'} />
				</View>
			</View>
		</View>
	);
};

export default PlayerWidget;
