import React, { useState } from 'react'
import { Alert } from 'react-native';

export const useGato = () => {
    let listado:any = [];
    const [turno, setTurno] = useState('X');
    const [btn, setBtn] = useState(false);
    let bandera=true;

    const validar = () => {
        if(listado[0]=='X' && listado[1]=='X' && listado[2]=='X' || listado[0]=='O' && listado[1]=='O' && listado[2]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[3]=='X' && listado[4]=='X' && listado[5]=='X' || listado[3]=='O' && listado[4]=='O' && listado[5]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[6]=='X' && listado[7]=='X' && listado[8]=='X' || listado[6]=='O' && listado[7]=='O' && listado[8]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[0]=='X' && listado[4]=='X' && listado[8]=='X' || listado[0]=='O' && listado[4]=='O' && listado[8]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[2]=='X' && listado[4]=='X' && listado[6]=='X' || listado[2]=='O' && listado[4]=='O' && listado[6]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[0]=='X' && listado[3]=='X' && listado[6]=='X' || listado[0]=='O' && listado[3]=='O' && listado[6]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[1]=='X' && listado[4]=='X' && listado[7]=='X' || listado[1]=='O' && listado[4]=='O' && listado[7]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[2]=='X' && listado[5]=='X' && listado[8]=='X' || listado[2]=='O' && listado[5]=='O' && listado[8]=='O'){
            Alert.alert('Ganador con turno: '+turno);
            setBtn(true);
        }else if(listado[0]!=null && listado[1]!=null && listado[2]!=null && listado[3]!=null && listado[4]!=null && listado[5]!=null && listado[6]!=null && listado[7]!=null && listado[8]!=null){
            Alert.alert('NADIE GANO!!');
            setBtn(true);
        }
    }

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
        validar();

    }

    const again = () => {
        for (let index = 0; index < listado.length; index++) {
            listado[index] = null;
        }
        setBtn(false);
        setTurno('X');
    }

    return {
        turno: turno,
        btn: btn,
        pulsar: pulsar,
        again: again,
        listado: listado[0],
    }

}
