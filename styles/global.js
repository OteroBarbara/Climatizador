import { StyleSheet } from 'react-native';
export const global = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    encabezado:{
        color: '#00C7C7',
        fontSize: 29
    },
    dispositivosDisponibles:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40
    },
    vincularDispositivos:{
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10
    },
    botonBottomContainer:{
        borderRadius: 30,
        backgroundColor: '#00C7C7',
        borderRadius: 30,
        width: 180,
        marginBottom: 20
    },
    botonBottom:{
        textAlign: 'center',
        color: '#fff',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 16
    },
    main:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    footer:{
        alignItems: 'center'
    },
    logo:{
        height:50,
        width: 240
    },
    botonBuscarContainer:{
        backgroundColor: '#E7E7E7',
        borderRadius: 30,
        paddingHorizontal: 10
    },
    botonBuscar:{
        fontWeight: 'bold',
        padding: 10
    },
    negrita:{
        fontWeight: 'bold'
    },
    containerCenter:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    botonRedWiFi:{
        paddingLeft: 16
    },
    botonGrisContainer:{
        backgroundColor: '#F6F6F6',
        padding: 20,
        margin: 10,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    fondoBlanco:{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    image:{
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    }
})