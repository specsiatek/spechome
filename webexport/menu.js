import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Menu extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="39da4d16-b9e5-4f6d-9c19-d07a3dc42f59" style={styles.menu}>
        <View data-layer="40c7bfb3-6787-49a4-8afc-9e9ef342f524" style={styles.menu_close}>
            <Svg data-layer="2572ab30-ad76-4b99-9de7-d5765ee6c369" style={styles.menu_close_line3} preserveAspectRatio="none" viewBox="-1.4141845703125 -1.414215087890625 75.828369140625 75.82843017578125" fill="transparent"><SvgPath d="M 0 73 L 73 0"  /></Svg>
            <Svg data-layer="fa9f847b-da3f-4a78-b0c9-b673276e4766" style={styles.menu_close_line4} preserveAspectRatio="none" viewBox="-1.4141845703125 -1.414215087890625 75.828369140625 75.82843017578125" fill="transparent"><SvgPath d="M 73 73 L 0 0"  /></Svg>
        </View>
        <View data-layer="6125ae3a-d99e-4804-b963-2c91da7ea97f" style={styles.menu_faq1e8d7800}>
            <View data-layer="07e4838c-0b99-433e-9ee8-18a4f535eaa9" style={styles.menu_faq1e8d7800_rectangle11de9e347e}></View>
            <View data-layer="b5216ac1-fdbf-4b79-9134-1cb9309cb1ba" style={styles.menu_faq1e8d7800_rectangle10e0adfe31}></View>
            <View data-layer="00c72f45-b94d-4a63-9ee9-b2576fe347a6" style={styles.menu_faq1e8d7800_rectangle96239aaf7}></View>
            <Text data-layer="06337ce4-4c44-4cf5-8517-67d9e142b543" style={styles.menu_faq1e8d7800_faq}>FAQ</Text>
        </View>
        <View data-layer="efc8d0ee-eb69-492d-91f5-f599040fd01e" style={styles.menu_infobb67ed7d}>
            <View data-layer="29e8fded-5dcc-4ddc-9e92-68f0f85ce830" style={styles.menu_infobb67ed7d_rectangle1189632862}></View>
            <View data-layer="b915cce4-9ca4-403a-9051-89951616113d" style={styles.menu_infobb67ed7d_rectangle10ba7fb3fd}></View>
            <View data-layer="ef4acf9a-e2c1-41c7-bebf-587de98de0a3" style={styles.menu_infobb67ed7d_rectangle985b63bbe}></View>
            <Text data-layer="b9564cd4-e5f9-40ea-a632-b54f9e1bd8f2" style={styles.menu_infobb67ed7d_info}>Info</Text>
        </View>
        <View data-layer="3f08f0a4-5c0c-4107-bb93-24974a7b696b" style={styles.menu_design4fd22e1f}>
            <View data-layer="06739d4c-6569-44cb-8b31-ebc96b68e88d" style={styles.menu_design4fd22e1f_rectangle114fec366e}></View>
            <View data-layer="5dd59aef-3d22-459f-a2b7-f938732886d1" style={styles.menu_design4fd22e1f_rectangle10ffa98758}></View>
            <View data-layer="0f96e2dc-391f-4a1e-a19e-99107e4f4137" style={styles.menu_design4fd22e1f_rectangle9475be0a0}></View>
            <Text data-layer="fad00edb-f49c-41b1-b607-509c5a8f4819" style={styles.menu_design4fd22e1f_design}>Design</Text>
        </View>
        <View data-layer="5db7bf10-7a38-441a-8e0f-d90966418bf5" style={styles.menu_kontakt49b4f570}>
            <View data-layer="4e9d09bf-bddc-49ef-9e6e-195f9c75c636" style={styles.menu_kontakt49b4f570_rectangle11}></View>
            <View data-layer="01b78992-a1b5-4786-8749-6833f526ee4a" style={styles.menu_kontakt49b4f570_rectangle10}></View>
            <View data-layer="675e8b40-faf7-4f09-a4c4-8e742fd2b335" style={styles.menu_kontakt49b4f570_rectangle9}></View>
            <Text data-layer="2576bba1-4ebf-4d00-beab-05219c60ed10" style={styles.menu_kontakt49b4f570_kontakt}>Kontakt</Text>
        </View>
        <View data-layer="e8052e24-b208-4bfa-a7d9-be5962c7b95a" style={styles.menu_stopka}>
            <View data-layer="cbcef933-2e36-4caf-92ca-a302be0b3410" style={styles.menu_stopka_rectangle8}></View>
            <Text data-layer="87e5a783-e860-413e-b205-e873c922f26f" style={styles.menu_stopka_copywright}>Copywright</Text>
        </View>
    </ScrollView>
    );
  }
}

Menu.propTypes = {

}

Menu.defaultProps = {

}


const styles = StyleSheet.create({
  "menu": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(236, 232, 225, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 896,
    "left": 0,
    "top": 0
  },
  "menu_close": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 73,
    "height": 73,
    "left": 308.5,
    "top": 35.5
  },
  "menu_close_line3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 75.83,
    "height": 75.83,
    "left": -1.41,
    "top": -1.41
  },
  "menu_close_line4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 75.83,
    "height": 75.83,
    "left": -1.41,
    "top": -1.41
  },
  "menu_faq1e8d7800": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 152,
    "left": 44,
    "top": 99
  },
  "menu_faq1e8d7800_rectangle11de9e347e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 70, 85, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 63,
    "top": 51
  },
  "menu_faq1e8d7800_rectangle10e0adfe31": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(236, 232, 225, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 0,
    "top": 0
  },
  "menu_faq1e8d7800_rectangle96239aaf7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(15, 25, 35, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 44,
    "top": 32
  },
  "menu_faq1e8d7800_faq": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 70, 85, 1)",
    "fontSize": 54,
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "DIN Next LT Pro",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 89,
    "height": 65,
    "left": 119,
    "top": 50
  },
  "menu_infobb67ed7d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 152,
    "left": 44,
    "top": 282
  },
  "menu_infobb67ed7d_rectangle1189632862": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 70, 85, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 63,
    "top": 51
  },
  "menu_infobb67ed7d_rectangle10ba7fb3fd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(236, 232, 225, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 0,
    "top": 0
  },
  "menu_infobb67ed7d_rectangle985b63bbe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(15, 25, 35, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 44,
    "top": 32
  },
  "menu_infobb67ed7d_info": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 70, 85, 1)",
    "fontSize": 54,
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "DIN Next LT Pro",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 86,
    "height": 65,
    "left": 120,
    "top": 47
  },
  "menu_design4fd22e1f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 152,
    "left": 44,
    "top": 467
  },
  "menu_design4fd22e1f_rectangle114fec366e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 70, 85, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 63,
    "top": 51
  },
  "menu_design4fd22e1f_rectangle10ffa98758": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(236, 232, 225, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 0,
    "top": 0
  },
  "menu_design4fd22e1f_rectangle9475be0a0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(15, 25, 35, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 44,
    "top": 32
  },
  "menu_design4fd22e1f_design": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 70, 85, 1)",
    "fontSize": 54,
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "DIN Next LT Pro",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 154,
    "height": 65,
    "left": 76,
    "top": 52
  },
  "menu_kontakt49b4f570": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 301,
    "height": 152,
    "left": 44,
    "top": 657
  },
  "menu_kontakt49b4f570_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 70, 85, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 63,
    "top": 51
  },
  "menu_kontakt49b4f570_rectangle10": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(236, 232, 225, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 0,
    "top": 0
  },
  "menu_kontakt49b4f570_rectangle9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(15, 25, 35, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 238,
    "height": 101,
    "left": 44,
    "top": 32
  },
  "menu_kontakt49b4f570_kontakt": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 70, 85, 1)",
    "fontSize": 54,
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "DIN Next LT Pro",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 174,
    "height": 65,
    "left": 76,
    "top": 55
  },
  "menu_stopka": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 87,
    "left": 0,
    "top": 809
  },
  "menu_stopka_rectangle8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(15, 25, 35, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 414,
    "height": 87,
    "left": 0,
    "top": 0
  },
  "menu_stopka_copywright": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 70, 85, 1)",
    "fontSize": 42,
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "DIN Next LT Pro",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 200,
    "height": 51,
    "left": 107,
    "top": 18
  }
});