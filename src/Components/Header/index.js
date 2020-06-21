import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions, Platform, TextInput } from 'react-native';
import { Icon, Text, Image, Badge, Input } from "react-native-elements";
import Colors from '../../Utils/Colors'
let menu = require('../../assets/Icons/menu.png')
let sort = require('../../assets/Icons/sort.png')

const { height, width } = Dimensions.get('window')

class Header extends Component {

    render() {
        const { search, ref } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.menuView}>
                    <Image
                        source={menu}
                        style={styles.menuImage}
                        placeholderStyle={{ backgroundColor: 'transparent' }}
                        resizeMode='center'
                    />
                </View>

                <View style={styles.locViewCont}>
                    <View onStartShouldSetResponder={this.props.onPress} style={styles.locView}>
                        <Icon
                            name="location"
                            type="evilicon"
                            size={height / 40}
                            containerStyle={{ marginLeft: width / 70, }}
                            underlayColor='transparent'
                        />
                        <TextInput
                            value={search}
                            style={{
                                padding: 0,
                                margin: 0,
                                borderWidth: 0,
                                marginLeft: width / 70,
                                textAlignVertical: 'center',
                                width: search ? '79%' : '89%',
                                fontSize: height / 55,
                                height: '100%'
                            }}
                            onChangeText={(term) => { this.searchUpdated(term) }} placeholder={'Search By Location'} />
                    </View>

                </View>

                <View style={styles.sortCont}>

                    <View style={styles.sortContView}>

                        <Image source={sort} style={{ height: height / 26, width: height / 26, }}
                            placeholderStyle={{ backgroundColor: 'transparent' }}
                            resizeMode='center'
                        />

                    </View>

                    <View style={styles.BadgeViewCont}>

                        <Badge
                            //ref={ref}
                            status="error"
                            containerStyle={styles.BadgeView}
                        />

                        <Icon
                            type="evilicon"
                            name="bell"
                            size={height / 27}
                        />

                    </View>
                </View>

            </View>
        )
    }
}


export default Header;


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: 'row'
    },
    menuView:
    {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuImage:
    {
        height: height / 27,
        width: height / 27
    },
    locViewCont:
    {
        flex: 5.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    locView:
    {
        backgroundColor: Colors.GNoteDesc,
        flexDirection: 'row',
        height: height / 18,
        borderRadius: height / 5,
        alignItems: 'center',
    },
    sortCont:
    {
        flex: 2.5,
        flexDirection: 'row'
    },
    sortContView:
    {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: Colors.White
    },
    BadgeViewCont:
    {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BadgeView:
    {
        position: 'absolute',
        right: width / 30,
        bottom: height / 15,
    },


});