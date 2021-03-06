import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Song } from '../../types';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';
import { AppContext } from '../../AppContext';
import { API, graphqlOperation } from '@aws-amplify/api';
import { getSong } from '../../src/graphql/queries';

const PlayerWidget = () => {
	const [song, setSong] = useState(null);
	const [sound, setSound] = useState<Sound | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);
	const [duration, setDuration] = useState<number | null>(null);
	const [position, setPosition] = useState<number | null>(null);
	const { songId } = useContext(AppContext);

	useEffect(() => {
		const fetchSong = async () => {
			try {
				const data = await API.graphql(
					graphqlOperation(getSong, { id: songId })
				);
				setSong(data.data.getSong);
			} catch (error) {
				console.log(error);
			}
		};
		fetchSong();
	}, [songId]);

	const onPlaybackStatusUpdate = (status) => {
		setIsPlaying(status.isPlaying);
		setDuration(status.durationMillis);
		setPosition(status.positionMillis);
	};

	const playCurrentSong = async () => {
		if (sound) {
			await sound.unloadAsync();
		}

		const { sound: newSound } = await Sound.createAsync(
			{ uri: song.uri },
			{ shouldPlay: isPlaying },
			onPlaybackStatusUpdate
		);
		setSound(newSound);
	};

	useEffect(() => {
		if (song) {
			playCurrentSong();
		}
	}, [song]);

	const onPlayPausePress = async () => {
		if (!sound) {
			return;
		}

		if (isPlaying) {
			await sound.stopAsync();
		} else {
			await sound.playAsync();
		}
	};

	const getProgress = () => {
		if (sound === null || duration === null || position === null) {
			return 0;
		}

		return (position / duration) * 100;
	};

	if (!song) {
		return null;
	}

	return (
		<View style={styles.container}>
			<View style={[styles.progress, { width: `${getProgress()}%` }]} />
			<View style={styles.row}>
				<Image source={{ uri: song.imageUri }} style={styles.image} />
				<View style={styles.rightContainer}>
					<View style={styles.nameContainer}>
						<Text style={styles.title}>{song.title}</Text>
						<Text style={styles.artist}>{song.artist}</Text>
					</View>
					<View style={styles.iconsContainer}>
						<AntDesign name="hearto" size={30} color={'white'} />
						<TouchableOpacity onPress={onPlayPausePress}>
							<FontAwesome
								name={isPlaying ? 'pause' : 'play'}
								size={30}
								color={'white'}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PlayerWidget;
