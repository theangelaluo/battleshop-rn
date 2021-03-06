import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  subheader: {
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#575757',
  },
  opponent: {
    paddingRight: 18,
    paddingLeft: 18,
    fontSize: 25,
    color: 'black'
  },
  titleFont:{
    color: "white",
    fontSize: 36,
    fontWeight: 'bold'
  },
  titleFontNotBold:{
    color: "white",
    fontSize: 35,
  },
  H2Font:{
    color: "white",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  H2FontBlackUnbold:{
    color: "black",
    fontSize: 24,
  },
  H3Font:{
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9564F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
//  paddingVertical: '10%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: "center"
},
itemButton: {
  width: 300,
  height: 125,
  margin: '3%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F2C57D',
  //marginTop: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 1,
  elevation: 1,
  shadowColor:'#202020',
  shadowRadius: 1,
  shadowOffset: {width: 2, height: 2},
  borderColor: "transparent",
  borderWidth: 0,
  borderRadius: 5
 },
  button: {
//alignSelf: 'stretch',
    padding: 10,
    margin: 10
  },
  yellowContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: '85%',
    height: '55%',
    backgroundColor: '#f3c677',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flex: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '95%',
    textAlign: 'center',
    fontSize: 20
  },
  textBoxSurroundings: {
    flex: 0,
    backgroundColor: '#f3c677',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '80%',
    fontSize: 30,
  },
  buttonShadow: {
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    shadowColor:'#202020',
    shadowRadius: 1,
    shadowOffset: {width: 2, height: 2},
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black'
  },
  progressBar:{
    bottom: 15,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export {styles}
