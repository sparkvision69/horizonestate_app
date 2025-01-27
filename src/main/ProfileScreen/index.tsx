import { AntDesign, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const icons = {
  rightArrow: require("../../../assets/icons/right-arrow.png"),
  bell: require("../../../assets/icons/bell.png"),
  edit: require("../../../assets/icons/edit.png"),
  star: require("../../../assets/icons/star.png"),
  wallet: require("../../../assets/icons/wallet.png"),
  logout: require("../../../assets/icons/logout.png"),
};

const menuItems = [
  { title: 'Settings', icon: <Ionicons name="settings-outline" size={24} color="#4A90E2" /> },
  { title: 'Notifications', icon: <Ionicons name="notifications-outline" size={24} color="#4A90E2" /> },
  { title: 'Projects', icon: <MaterialIcons name="work-outline" size={24} color="#4A90E2" /> },
  { title: 'Privacy Policy', icon: <FontAwesome5 name="user-shield" size={24} color="#4A90E2" /> },
];

const ProfilePage = ({ navigation }:any) => {
  return (
    <ScrollView style={styles.container}>
        
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require('../../../assets/profile.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Image source={icons.edit} style={styles.iconSmall} />
          </TouchableOpacity>
          <Text style={styles.userName}>Mahesh bhatiya</Text>
          <Text style={styles.userEmail}>mahesh@gmail.com</Text>
          
          <View style={styles.userStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>250</Text>
              <Text style={styles.statLabel}>Propertys</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>30</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actionRow}>
        {[{ icon: icons.bell, label: "Alerts" }, { icon: icons.wallet, label: "Wallet" }, { icon: icons.star, label: "My Property" }].map((item, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <View style={styles.actionIconWrapper}>
              <Image source={item.icon} style={styles.actionIcon} />
            </View>
            <Text style={styles.actionLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.socialLinks}>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome5 name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome5 name="twitter" size={24} color="#00acee" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome5 name="instagram" size={24} color="#e4405f" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, index !== menuItems.length - 1 && styles.menuItemBorder]}
            onPress={() => console.log(item.title)}
          >
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.logoutContainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={() => {
        AsyncStorage.removeItem("userid")
        navigation.navigate('Landing')
      }}>
        <AntDesign name="logout" size={24} color="white" style={styles.iconMedium} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#6A5ACD",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerContent: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    borderWidth: 4,
    borderColor: "#FFF",
  },
  editButton: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 15,
  },
  userName: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    color: "#E0E0E0",
    fontSize: 14,
    marginTop: 5,
  },
  userStats: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  statItem: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  statValue: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#E0E0E0",
    fontSize: 12,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  actionButton: {
    alignItems: "center",
  },
  actionIconWrapper: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
  actionIcon: {
    width: 30,
    height: 30,
  },
  actionLabel: {
    marginTop: 5,
    color: "#555",
    fontSize: 12,
  },
  menuList: {
    marginTop: 20,
    padding: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  menuItemBorder: {
  },
  iconContainer: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  socialLinks: {
    padding: 10,
  },
  socialLinksTitle: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
  socialIcons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
  },
  socialIcon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    padding: 10,
  },
  logoutContainer: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6347",
    color: 'white',
    padding: 15,
    borderRadius: 30,
  },
  logoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  iconSmall: {
    width: 16,
    height: 16,
  },
  iconMedium: {
    width: 24,
    height: 24,
  },
});

export default ProfilePage;
