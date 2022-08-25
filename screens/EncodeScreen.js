import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {connect} from 'react-redux';
import { addItemHistory } from '../action/action';

const mapStateToProps = (state) => {
  return {
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHistory: (text) => dispatch(addItemHistory(text))
  }
}

function EncodeScreenToConnect({history, addHistory}) {
    const [text, setText] = useState("https://");

    const handleTextListContent = () => {
      addHistory(text)
    };

  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent:'center', height: '100%'}}>
          <QRCode
              value={history.length > 0 ? history[history.length -1] : "health app"}
              size={300}
              bgColor='#000000'
              fgColor='#000000'
          />
        </View>

        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
        />
            {text == "https://" ? 
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} >
                    <Text>Générer</Text>
                </TouchableOpacity>
            </View>
                : 
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => {handleTextListContent()}} style={styles.btn} >
                    <Text>Générer</Text>
                </TouchableOpacity>
            </View>
            }
    </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    container:{
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#f1f1f1',
        padding: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        fontSize: 40, 
        borderWidth: 1, 
        padding: 5, 
        width: 100, 
        backgroundColor:'#d620ab', 
        justifyContent: 'center', 
        alignItems:'center', 
        borderRadius: 15,
        marginBottom:"20%"
    }

  });

  const EncodeScreen = connect(mapStateToProps, mapDispatchToProps)(EncodeScreenToConnect);
  export default EncodeScreen;