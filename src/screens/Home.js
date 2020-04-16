import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withTheme, Title, Text } from 'react-native-paper';
import Icon from '../components/Icons';
import { PASS_REQUEST, PASS_FRAME2 } from '../constants/routeNames';

const menu = [
  {
    color: (opacity = 1) => `rgba(156, 201, 46, ${opacity})`,
    title: 'Umwirondoro wawe',
    route: null,
    iconProps: { name: 'user-cog', type: 'font-awesome5' },
  },
  {
    color: (opacity = 1) => `rgba(24, 64, 133, ${opacity})`,
    title: 'Saba uruhushya',
    route: PASS_REQUEST,
    iconProps: { name: 'send-o', type: 'font-awesome' },
  },
  {
    color: (opacity = 1) => `rgba(201, 109, 4, ${opacity})`,
    title: 'Irinde korona virusi',
    route: null,
    iconProps: { name: 'info', type: 'entypo' },
  },
];

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  description: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  menuWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  menu: {
    justifyContent: 'space-evenly',
    marginTop: 20,
    alignItems: 'center',
    width: 150,
    padding: 10,
    borderRadius: 10,
  },
  menuText: {
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Home = ({ userData: { user } = {}, theme, navigation }) => {
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <Title style={[styles.title, { color: colors.disabled }]}>
        Murakaza neza,
        <Text style={{ color: colors.primary }}>{`\t\t${user.name}`}</Text>
      </Title>
      <Text style={[styles.description, { color: colors.disabled }]}>
        Kugira ngo utangire gukoresha iri koranabuhanga, wahitamo igikorwa kimwe
        mu byerekanishijwe ibimenyetso bikurikira
      </Text>
      <View style={styles.menuWrapper}>
        {menu.map((m, i) => (
          <TouchableOpacity
            key={Number(i)}
            activeOpacity={0.8}
            onPress={() => m.route && navigation.navigate(m.route)}
            style={[
              styles.menu,
              {
                height: i + 1 === menu.length ? 150 : 200,
                backgroundColor: m.color(0.1),
              },
            ]}>
            <Icon {...m.iconProps} color={m.color()} size={40} />
            <Text style={[styles.menuText, { color: colors.disabled }]}>
              {m.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const mapStateToProps = ({ userData }) => ({ userData });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Home));
