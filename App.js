// import React from 'react';
// import { Animated, Easing, View, Text, Image } from 'react-native';
// import LottieView from 'lottie-react-native';

// export default class BasicExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       progress: new Animated.Value(0),
//     };
//   }

//   componentDidMount() {
//     Animated.timing(this.state.progress, {
//       toValue: 1,
//       duration: 5000,
//       easing: Easing.linear,
//       useNativeDriver: true
//     }).start();
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: "#6E1975" }}>
//         <Image
//           style={{
//             position: "absolute",
//             width: 162,
//             height: 24,
//             left: 130,
//             top: 50,
            
//           }}
//           source={require('./logo1.png')}
//           resizeMode="cover"
//         />
//         <LottieView source={require('./comfort.json')} progress={this.state.progress} />
//         <View style={{ justifyContent: "center", alignSelf: "center", flex: 1, marginTop: "80%" }}>
//           <Text style={{ color: "white", alignSelf: "center" }}>We are here to serve</Text>
//           <Text style={{ color: "white", marginTop: 10, alignSelf: "center", marginHorizontal: 30 }}>Care Solace is here as an added layer of support for you and your immediate family to connect you with the right mental health resources in a time of need.</Text>
//         </View>
//       </View>
//     );
//   }
// }
import React from 'react';
import {  Animated, Easing, View, Text, Image,StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native';
const slides = [
  {
    key: 1,
    title: 'Care Solace',
    text: 'Description.\nSay something cool',
    image: require('./anim.json'),
    backgroundColor: '#6E1975',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./comfort.json'),
    backgroundColor: '#6E1975',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./anim.json'),
    backgroundColor: '#6E1975',
  }
];
 
export default class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    showRealApp: false,
    progress: new Animated.Value(0),
    dataSlides: slides
  }
}
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Image source={item.image} /> */}
        <LottieView source={item.image} progress={this.state.progress} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  callOnchange = () =>{
    this.componentDidMount()
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} onSlideChange={this.callOnchange}/>;
    }
  }
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6E1975',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});