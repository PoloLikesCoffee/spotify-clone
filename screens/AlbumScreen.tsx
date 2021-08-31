import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import { API, graphqlOperation } from '@aws-amplify/api';
import { getAlbum } from '../src/graphql/queries';

const AlbumScreen = () => {
	const route = useRoute();
	const albumId = route.params.id;

	const [album, setAlbum] = useState(null);

	useEffect(() => {
		const fetchAlbumDetails = async () => {
			try {
				const data = await API.graphql(
					graphqlOperation(getAlbum, { id: albumId })
				);
				setAlbum(data.data.getAlbum);
			} catch (error) {
				console.log(error);
			}
		};

		fetchAlbumDetails();
	}, []);

	if (!album) {
		return <Text>Loading...</Text>;
	}

	return (
		<View>
			<FlatList
				data={album.songs.items}
				renderItem={({ item }) => <SongListItem song={item} />}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => <AlbumHeader album={album} />}
			/>
		</View>
	);
};

export default AlbumScreen;
