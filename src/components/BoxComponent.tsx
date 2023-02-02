import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../themes/appTheme'
let listado:any = [];
export const BoxComponent = () => {

    const [turno, setTurno] = useState('X');
    let bandera=true;

    const pulsar = (identificador: number) => {
        
        switch (identificador) {
            case 1:
                (listado[0]=='' || listado[0]==null)? listado[0]=turno : bandera=false;
                // Alert.alert('Entraste en el 1'+listado[0]);
            break;
            case 2:
                (listado[1]=='' || listado[1]==null)? listado[1]=turno : bandera=false;
            break;
            case 3:
                (listado[2]=='' || listado[2]==null)? listado[2]=turno : bandera=false;
            break;
            case 4:
                (listado[3]=='' || listado[3]==null)? listado[3]=turno : bandera=false;
            break;
            case 5:
                (listado[4]=='' || listado[4]==null)? listado[4]=turno : bandera=false;
            break;
            case 6:
                (listado[5]=='' || listado[5]==null)? listado[5]=turno : bandera=false;
            break;
            case 7:
                (listado[6]=='' || listado[6]==null)? listado[6]=turno : bandera=false;
            break;
            case 8:
                (listado[7]=='' || listado[7]==null)? listado[7]=turno : bandera=false;
            break;
            case 9:
                (listado[8]=='' || listado[8]==null)? listado[8]=turno : bandera=false;
            break; 
        
            default:
                Alert.alert('ERROR DESCONOCIDO');
            break;
        }

        (turno=='X' && bandera==true)? setTurno('O') : null;
        (turno=='O' && bandera==true)? setTurno('X') : null;
        bandera=true;
    }

  return (
    <View style={styles.conteiner}>
        <View style={{alignItems: 'center'}}>
            <Text style={{color:'white', fontSize:35}}>Turno: {turno}</Text>
        </View>
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
