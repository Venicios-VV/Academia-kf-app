import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "Jurema",
    cargo: "Aluna"
  },
  {
    id: 2,
    nome: "Jubileu",
    cargo: "Personal"
  },
]

export default function Index() {
  return (
    <View style =
      style={style.container}

    >
      {
      usuarios.map(item => (
        <Text style = {{fontSize: 20}}>{item.nome}</Text>
      ))
      }
    </View>
  );
}
const style = StyleSheet.create ({
 
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  }
  itemLista: {
    widht: '100%',
    padding: 10,
    marginBottom: 2,
    backgroundColor: "blue"
  },

  textoLista:{
    fontSize: 20
  }
})