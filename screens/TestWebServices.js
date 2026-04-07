import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base';
import { getDocumentTypesServices,getAllPostsService, createPostService,updatePostService, getByUserIdService, getAllPostService1,createPostService1, updatePostService1} from '../services/TestServices';


export const TestWebServices = () => {

  //FUNCION PARA CONSUMIR EL SERVICIO DE RECUPERAR POSTS
  const getAllPost=()=>{
          getAllPostsService();
        };
  //FUNCION PARA CONSUMIR EL SERVICIO DE CREAR UN POST NUEVO
  const createPost=()=>{
          createPostService();
  };
  //FUNCION PARA CONSUMIR EL SERVICIO DE ACTUALIZAR UN POST
  const updatePost=()=>{
    updatePostService();
  };
  //FUNCION PARA CONSUMIR EL SERVICIO DE FILTRAR POSTS POR USUARIO
  const getByUserId=()=>{
    getByUserIdService();
  };
  //====================================================
  //===================================================
  //FUNCION PARA CONSUMIR SERVICIO DE RECUPERAR POST
  const getAllPost1=()=>{
    getAllPostService1();
  };
    //FUNCION PARA CONSUMIR SERVICIO DE RECUPERAR POST
  const createPost1=()=>{
    createPostService1();
  };
    //FUNCION PARA CONSUMIR SERVICIO DE RECUPERAR POST
  const updatePost1=()=>{
    updatePostService1();
  };
  //FUNCION PARA CONSUMIR SERVICIO RECUPERAR POST DE TIPOS DE DOCUMENTOS DE INVENTARIOS
  const getDocumentTypes=()=>{
    getDocumentTypesServices();
  };

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <Text style={styles.textContainer}>Coder Edwin Cusin</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPost}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
        <Button
        title="Actualizar Post"
        onPress={updatePost}
      />
        <Button
        title="Filtrar"
        onPress={getByUserId}
      />
          <Button
        title="XXX => GET"
        onPress={getAllPost1}
      />

      <Button
        title="YYY => POST"
        onPress={createPost1}
      />

      <Button
        title="ZZZ => PUT"
        onPress={updatePost1}
      />
      
      <Button
        title="TIPOS DE DOCUMENTOS  => GET"
        onPress={getDocumentTypes}
      />
      
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});