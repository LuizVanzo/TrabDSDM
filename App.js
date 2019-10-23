import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<View style={imgLoja.container}>
				<Image resizeMode="contain" style={img.stretch} source={require("./assets/turbina.jpg")} />
			</View>
			<View style={cento.container}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Turbo-Inas</Text>
					<Text style={{ fontSize: 10 }}>Turbinas Hidrelétricas</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title="Adquirir" onPress={() => Alert.alert("Esta função ainda não foi implementada!")} /></View>
			</View>
			<View style={sobre.container}>
				<View style={{ flex:1 }}></View>
				<Text style={{ flex:10, justifyContent: 'center' }} >Turbinas Novas e Recondicionada com Garantia a Melhor Qualidade pelo Menor Preço. socorro mecânico. Atendimento Personalizado. parcelamos em 6x s juros.</Text>
				<View style={{ flex:1 }}></View>
			</View>
		</View>
	);
}

const img = StyleSheet.create({
	stretch: {
		width: 470,
		height: 470,
		flex: 1
	}
});
const imgLoja = StyleSheet.create({
	container: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const cento = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const sobre = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
	},
});