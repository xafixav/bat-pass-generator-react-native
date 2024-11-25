import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        width: '100%',
    },
    pressableButton: {
        marginTop:5,
        marginBottom: 5,
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        paddingVertical: 12,
        paddingHorizontal:32,
        borderRadius:5,
        elevation:3,
        backgroundColor: 'black',
        color: 'white',
    },
    text:{
        fontSize: 16,
        lineHeight:21,
        fontWeight:'bold',
        letterSpacing: 0.25,
        color: '#E5BF3C'
      }
  });