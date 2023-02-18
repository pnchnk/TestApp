import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    post:{
      marginBottom:60,
    },
    profileInfo:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:'5%'
    },
    userImage:{
        width:50,
        height:50,
        resizeMode:'cover',
        borderRadius:50,
        marginRight:10,
    },
    text:{
        fontWeight:'bold',
    },
    });

export default styles