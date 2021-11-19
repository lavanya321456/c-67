import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config'
import firebase from 'firebase'
export default class HomeScreen extends React.Component {
  constructor()
  {
    super()
    this.state={
      redstatus:true,
      greenstatus:true,
      bluestatus:true,
      yellowstatus:true,
    }
  }
  goToBuzzerScreen = (buzzercolor) => {
    var teamref=db.ref('teams/'+buzzercolor)
    teamref.update({
    enabled:false
    })
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  
  componentDidMount()
  {
   var teamsref=db.ref("teams")
   teamsref.on("value",data=>{
     var teamdetails=data.val()
     this.setState({
       redstatus:teamdetails.red.enabled,
       greenstatus:teamdetails.green.enabled,
       yellowstatus:teamdetails.yellow.enabled,
       bluestatus:teamdetails.blue.enabled,
       })
   })
  }

  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          disabled={!this.state.redstatus}
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled={!this.state.greenstatus}
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.goToBuzzerScreen('green');
          }}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled={!this.state.bluestatus}
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
        disabled={!this.state.yellowstatus}
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
