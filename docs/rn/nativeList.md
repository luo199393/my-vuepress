### FlatList上拉下滑

>FlatList
``` js
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator, RefreshControl} from "react-native";

class listItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      pagernum: 1,
      totalPage: 1,
      pagersize: 15,
      loaded: false,
      refreshing: false
    };
    this.fetchData = this.fetchData.bind(this);
  }

  // 列表api
  async fetchData(type) {
    // 列表http请求  
    ... 

    if(type == 'refresh'){
      this.setState({
        dataList: datas.orders,
        loaded: true
      });
    }else {
      this.setState({
        dataList: this.state.dataList.concat(datas.orders),
        loaded: true
      });
    }
  }
  // 下拉刷新
  async onRefresh() {
    this.setState({
      refreshing: true,
      pagernum: 1
    })
    await this.fetchData('refresh')
    this.setState({
      refreshing: false
    })
  }
  // 上拉加载
  async onEndReached() {
    if(this.state.pagernum == this.state.totalPage) {
      return;
    }
    this.setState({
      refreshing: true,
      pagernum: ++this.state.pagernum
    })
    await this.fetchData('reached');
    this.setState({
      refreshing: false
    })
  }

  render() {
    if (this.state.loaded) {
      return (
        <View>
          <FlatList
            data={this.state.dataList}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold= {0.1} 
            onEndReached = {this.onEndReached.bind(this)} 
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
          />
        </View>
      );
    }else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )s
    }
  }
  renderItem({ item }) {
    return (
      <View style={{ paddingTop: 15 }}>
        <Text>{item}</Text>
      </View>
    );
  }
}
export default listItem;