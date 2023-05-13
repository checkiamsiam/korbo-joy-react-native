import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../constants/theme';
import { IconButton } from '@react-native-material/core';
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <>
      {props.main ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
            }}
          >
            <FeatherIcon name="menu" color={'#B9BCD3'} size={26} />
          </TouchableOpacity>
          <Text style={{ ...FONTS.h4, flex: 1, textAlign: 'center' }}>
            {props.title}
          </Text>
          <TouchableOpacity>
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
              source={IMAGES.user}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            {
              height: props.productId ? 60 : 50,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              borderBottomWidth: 1,
              borderColor: COLORS.borderColor,
            },
            props.transparent && {
              position: 'absolute',
              zIndex: 2,
              left: 0,
              right: 0,
              borderBottomWidth: 0,
            },
            props.borderNone && {
              borderBottomWidth: 0,
            },
          ]}
        >
          {props.leftIcon === 'back' && (
            <IconButton
              onPress={() =>
                props.backAction ? props.backAction() : navigation.goBack()
              }
              color={props.transparent ? '#fff' : '#4E4E4E'}
              icon={(props) => (
                <MaterialIcons name="arrow-back-ios" {...props} />
              )}
            />
          )}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                ...FONTS.h6,
                top: 1,
                textAlign: props.titleLeft ? 'left' : 'center',
              }}
            >
              {props.title}
            </Text>
            {props.productId && (
              <Text style={{ ...FONTS.font, textAlign: 'center' }}>
                {props.productId}
              </Text>
            )}
          </View>
          {props.rightIcon2 === 'search' && (
            <IconButton
              onPress={() => navigation.navigate('Search')}
              color={'#4E4E4E'}
              icon={(props) => <FeatherIcon name="search" {...props} />}
            />
          )}
          {props.rightIcon === 'more' && (
            <IconButton
              color={props.transparent ? '#fff' : '#4E4E4E'}
              icon={(props) => <MaterialIcons name="more-vert" {...props} />}
            />
          )}
          {props.rightIcon === 'grid' && (
            <View
              style={{
                flexDirection: 'row',
                marginLeft: -40,
              }}
            >
              <IconButton
                onPress={() => props.setItemView('list')}
                style={{ borderRadius: 0 }}
                color={props.itemView === 'list' ? COLORS.primary : '#4E4E4E'}
                icon={(props) => <FeatherIcon name="list" {...props} />}
              />
              <IconButton
                onPress={() => props.setItemView('grid')}
                style={{ borderRadius: 0 }}
                color={props.itemView === 'grid' ? COLORS.primary : '#4E4E4E'}
                icon={(props) => <FeatherIcon name="grid" {...props} />}
              />
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default Header;
