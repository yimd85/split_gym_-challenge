import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ActivityIndicator, View, FlatList } from 'react-native';
import { Header, Card, ListItem } from 'react-native-elements';
import { fetchDrinks } from './actions/DrinkActions';

class Main extends Component {

    componentDidMount(){
        this.props.fetchDrinks();
    }
      
    render() {
        const { drinks } = this.props.drinks;
        return (      
            <View>
                <Header  
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ 
                        text: 'SplitGym - Coding Challenge', 
                        style: { color: '#fff' } 
                    }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                {
                    drinks === undefined 
                    ? 
                    <ActivityIndicator 
                        size="large" 
                        color="#0000ff" 
                        style={{marginTop: "10%"}}
                    />
                    :
                    <FlatList
                        data={drinks.drinks}
                        keyExtractor={({}, index) => index.toString()}
                        renderItem={ () => 
                            <Card title="Random Drinks">
                                {
                                    drinks.drinks.map((u, i) => {
                                    return (
                                        <ListItem
                                            key={i}
                                            roundAvatar
                                            title={u.strDrink}
                                            leftAvatar={{ source: { uri: u.strDrinkThumb } }}
                                        />
                                    );
                                    })
                                }
                            </Card>
                        }
                    />
                }
            </View>  
        );
  }
}

mapStateToProps = (state) => {
    return { 
        drinks: state.drinks 
    }
}

export default connect(mapStateToProps, { fetchDrinks })(Main);
