import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Dimensions, Image } from 'react-native'
import Header from '../../Components/Header'
import { Icon, Rating, } from "react-native-elements";
import Colors from '../../Utils/Colors';
const { width, height } = Dimensions.get("window");
import { KidsDrssFlatList, IconsFlatList, AmritSweetsFlatList } from '../../Services/MyJSON';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            star: 5,
            orientation: ''
        }
    }

    componentDidMount() {
        this.getOrientation();

        //this is for second time
        Dimensions.addEventListener('change', () => {
            this.getOrientation();
        });
    }

    getOrientation = () => {
        if (this.refs.rootView) {
            if (Dimensions.get('window').width < Dimensions.get('window').height) {
                this.setState({ orientation: 'portrait' });
            }
            else {
                this.setState({ orientation: 'landscape' });
            }
        }
    }


    renderKidsDrssFlatListItem = ({ item }) => {
        return (
            <View ref="rootView" style={styles.cardContainer}>
                <View style={styles.KidsContainer}>
                    <Image style={styles.kidsImage}
                        source={item.img} resizeMode='cover'
                    />
                </View>
                <View style={styles.KidsTitleContainer}>
                    <View style={styles.KidsTitleView}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardTitle}>{item.rp}</Text>
                    </View>

                </View>
            </View>

        )
    }



    renderIconsItem = ({ item, index }) => {
        return (
            <View style={styles.IconView}>
                <Icon
                    raised
                    name={item.name}
                    type={item.type}
                    color={Colors.IconColor}
                    onPress={() => console.log(item)} />
                <Text style={{}}>{item.title}</Text>

            </View>
        )
    }



    renderAmritSweetsItem = ({ item, index }) => {
        const { orientation } = this.state
        return (
            <View ref="rootView" style={styles.AmritView}>
                <View style={{ flex: 1, }}>
                    <View ref="rootView" style={{ flex: 6.5, }}>
                        <Image ref="rootView"
                            style={{
                                padding: orientation == 'portrait' ? 0 : height / 15,
                                height: orientation == 'portrait' ? height / 8 : '100%', width: '100%',
                            }}
                            source={item.img}
                            resizeMode='cover'
                        />
                    </View>
                    <View ref="rootView"
                        style={{
                            flex: 3.5, justifyContent: 'center', alignItems: 'center',
                            padding: orientation == 'portrait' ? height / 60 : height / 25,
                        }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ fontSize: height / 45 }}>{item.title}</Text>
                            <View style={styles.AmritLocView}>
                                <Icon
                                    name="location"
                                    type="evilicon"
                                    size={height / 50}
                                    color={Colors.IconColor}
                                    underlayColor='transparent'
                                />

                                <Text style={{ fontSize: height / 68, color: "lightgrey" }}>{item.km}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Rating imageSize={10} readonly startingValue={5} />
                            </View>

                        </View>

                    </View>

                </View>

            </View>
        )
    }

    goToSearchScreen() {
        this.props.navigation.navigate('Search')
    }

    render() {
        const { orientation } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White, }}>
                <View style={{ flex: 1, }}>

                    <View ref="rootView" style={{ flex: orientation == 'portrait' ? 1.2 : 2, }}>
                        <Header onPress={() => this.goToSearchScreen()}
                            //ref="rootView"
                            orientation={orientation == 'portrait' ? "p" : "l"}
                        />
                    </View>

                    <View ref="rootView" style={{ flex: orientation == 'portrait' ? 8.8 : 8, }}>
                        <View style={{ flex: 1, }}>
                            <View ref="rootView" style={styles.KidsDressView}>

                                <FlatList
                                    data={KidsDrssFlatList}
                                    style={{ width: "95%" }}
                                    horizontal
                                    renderItem={this.renderKidsDrssFlatListItem}
                                    keyExtractor={(item, index) => String(index)}
                                />
                            </View>
                            <View ref="rootView" style={{ flex: orientation == 'portrait' ? 2 : 3, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <View style={{ flex: 1, width: '95%', }}>
                                    <FlatList
                                        data={IconsFlatList}
                                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                                        keyExtractor={(item, index) => String(index)}
                                        horizontal
                                        renderItem={this.renderIconsItem}
                                    />

                                </View>
                            </View>
                            <View ref="rootView" style={{ flex: orientation == 'portrait' ? 6.5 : 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View ref="rootView" style={{ flex: 1, width: '95%', alignItems: orientation == 'portrait' ? 'center' : 'flex-start' }}>
                                    <FlatList
                                        ref="rootView"
                                        data={AmritSweetsFlatList}
                                        extraData={this.state}
                                        horizontal={orientation == 'portrait' ? false : true}
                                        keyExtractor={(item, index) => String(index)}
                                        numColumns={orientation == 'portrait' ? 2 : 0}
                                        key={(orientation == 'portrait' ? 'h' : 'v')}
                                        renderItem={this.renderAmritSweetsItem}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>

                            </View>


                        </View>
                    </View>


                </View>
            </SafeAreaView>
        )
    }

}

export default HomeScreen



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    KidsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    kidsImage: {
        height: '100%',
        width: '100%',
        borderRadius: 24,
        flex: 1
    },
    KidsTitleContainer: {
        position: 'absolute',
        bottom: 0,
        height: height / 20,
        width: height / 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    KidsTitleView: {
        flex: 1,
        width: '85%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    cardContainer: {
        backgroundColor: Colors.GLabel,
        width: height / 3,
        borderRadius: 24,
        marginRight: width / 50
    },
    cardTitle: {
        color: 'white',
        fontSize: height / 41,
        fontWeight: 'bold'
    },
    IconView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    AmritView: {
        backgroundColor: Colors.White,
        margin: height / 80,
        elevation: 8,
    },
    AmritLocView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: height / 150
    },
    KidsDressView: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    text:
    {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    }
});