import React from 'react';
import { View, FlatList, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'
import Colors from '../../Utils/Colors'
import { Users } from '../../Services/MyJSON';


const { height, width } = Dimensions.get("window");



class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }




  renderItem = ({ item, index }) => {
    return (
      <ListItem
        Component={TouchableOpacity}
        title={item.name}
        onPress={() => this.handlePress(item, index)}
        leftAvatar={{
          source: { uri: item.avatar },
          size: height / 9
        }}
        avatarStyle={{ height: height / 2, width: width / 2, }}
        bottomDivider
        chevron
      />
    )
  }


  handlePress = (item, index) => {
    console.log('iiiii', item, 'in', index)
  }

  updateSearch = (value) => {
    this.setState({ search: value });
  }

  render() {
    const { search } = this.state
    let _users = Users;
    let search1 = this.state.search.trim().toLowerCase();

    if (search1.length > 0) {
      _users = _users.filter(function (user) {
        return user.name.toLowerCase().match(search1);
      });
    }


    return (
      <View style={{ flex: 1, }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(val) => this.updateSearch(val)}
          value={search}
          lightTheme
          containerStyle={styles.searchView}
          inputContainerStyle={{ backgroundColor: Colors.White }}
        />
        <FlatList
          data={_users}
          renderItem={this.renderItem}
          extraData={this.state}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    );
  }

}

export default SearchScreen



const styles = StyleSheet.create({
  searchView:
  {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.Black
  },

});