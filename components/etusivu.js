import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import kuvadata from '../assets/data/kuvadata';
import {SafeAreaView} from 'react-native-safe-area-context';
import logo from '../assets/images/KISLAlogo.jpg';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

{/* Ladataan entypo */}
Entypo.loadFont();

{/* Etusivun määrittelyä */}
const Etusivu = ({navigation}) => {

  {/* Kuvaosuuden määrittelyä, myöhemmin tulee lisää kuvista */}
  const kuvaosuus = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.kuvaSisalto,
          {
            marginLeft: item.id === 'kuva-1' ? 15 : 0,
          },
        ]}
        imageStyle={styles.kuvaSisaltoImage}>
        <Text style={styles.kuvaSisaltoTeksti}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      {/* rullausominaisuus */}
      <SafeAreaView>
          <View style={styles.menuValit}>
          
       

        {/* Oikeen yläkulman logo */} 
            <Image source={logo} style={styles.logoImage} />
          </View>
        </SafeAreaView>
      <ScrollView>
        {/* Yläosa */}
        

        
        {/* Uutiset */}
        <View style={styles.kuvaValit}>
          <Text style={styles.kuvaOtsikko}>Uutiset</Text>
          <View style={styles.kuvaSisaltoValit}>
            <Text style={styles.uutisetOtsikko}>Pikkujoulut Bronxissa 4.12.2021 alkaen 17.00. Yksityistilaisuus</Text>
          </View>
        </View>

        {/* Kuvat */}
        <View style={styles.kuvaValit}>
          <Text style={styles.kuvaOtsikko}>Kuvat</Text>
          <View style={styles.kuvaSisaltoValit}>
            <FlatList
              data={kuvadata}
              renderItem={kuvaosuus}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
};


{/* Tyylit */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.black,
    backgroundColor: colors.black,
  },
 
  logoImage: {
    top: 5,
    left: 230,
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  kuvaValit: {
    marginTop: 50,
    paddingLeft: 20,
  },
  kuvaOtsikko: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  uutisetOtsikko: {
  marginHorizontal: 20,
  fontFamily: 'Lato',
  fontSize: 14,
  color: colors.white,
},
  kuvaSisaltoValit: {
    paddingVertical: 5,
  },
  kuvaSisalto: {
    width: 250,
    height: 250,
    justifyContent: 'flex-end',
    marginRight: 10,
    paddingBottom: 5,
  },
  kuvaSisaltoImage: {
    borderRadius: 25,
  },
  kuvaSisaltoTeksti: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default Etusivu;