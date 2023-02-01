import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../themes/appTheme'
let listado:any = [];
export const BoxComponent = () => {
    const [turno, setTurno] = useState('X');
    

    const pulsar = (identificador: number) => {

        switch (identificador) {
            case 1:
                listado[0]=turno;
                Alert.alert('Entraste en el 1'+listado[0]);
            break;
            case 2:
                listado[1]=turno;
            break;
            case 3:
                listado[2]=turno;
            break;
            case 4:
                listado[3]=turno;
            break;
            case 5:
                listado[4]=turno;
            break;
            case 6:
                listado[5]=turno;
            break;
            case 7:
                listado[6]=turno;
            break;
            case 8:
                listado[7]=turno;
            break;
            case 9:
                listado[8]=turno;
            break;
        
            default:
                Alert.alert('ERROR DESCONOCIDO');
            break;
        }

        (turno=='X')? setTurno('O') : setTurno('X');
    }

  return (
    <View style={styles.conteiner}>
        <View style={styles.subContainer}>
            <TouchableOpacity onPress={() => pulsar(1)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[0]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pulsar(2)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[1]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pulsar(3)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[2]}</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
            <TouchableOpacity onPress={() => pulsar(4)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[3]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pulsar(5)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[4]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pulsar(6)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[5]}</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
            <TouchableOpacity onPress={() => pulsar(7)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[6]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pulsar(8)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[7]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pulsar(9)}>
                <View style={styles.box}>
                    <Text style={styles.txt}>{listado[8]}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}
