// import React from "react";
// import { Image } from "react-native";
// import { MessageIcon, ReceivedIcon, SendIcon } from "../../../../../assets/svg";
// import CommonStyles from "../../../../common/styles/CommonStyles";
// import { hp } from "../../../../common/util/LayoutUtil";
// import { Text, View } from "../../../../components/Themed";
// import Colors from "../../../../constants/Colors";
// import useColorScheme from "../../../../hooks/useColorScheme";

// export default function TransactionListItem({ item }: any) {
//   const colorScheme = useColorScheme();

//   return (
//     <>
//       <Text
//         style={{ marginLeft: hp(20), marginBottom: hp(10), marginTop: hp(10) }}>
//         {item.year}
//       </Text>
//       <View
//         style={[
//           CommonStyles.transactionContainer,
//           {
//             alignItems: "flex-start",
//             alignSelf: "stretch",
//           },
//         ]}>
//         <Image
//           style={{ borderRadius: 50, width: 36, height: 36 }}
//           source={item.displayPicture}
//         />

//         <View style={{ display: "flex", marginRight: "auto", marginLeft: 20 }}>
//           <Text
//             lightColor={Colors.light.mainText}
//             darkColor={Colors.dark.mainText}
//             style={{
//               fontFamily: "Euclid-Circular-A-Medium",
//               fontSize: 14,
//             }}>
//             {item.name}
//           </Text>
//           <View
//             style={[
//               CommonStyles.row,
//               {
//                 marginTop: 3,
//                 marginBottom: 8,
//                 alignSelf: "flex-start",
//               },
//             ]}>
//             {item.transferType === "incoming" ? (
//               <ReceivedIcon />
//             ) : item.transferType === "transfer" ? (
//               <SendIcon iconColor={Colors.light.error} />
//             ) : null}
//             <Text
//               lightColor={Colors.light.mainText}
//               darkColor={Colors.dark.mainText}
//               style={{
//                 marginLeft: 3,
//                 fontSize: 12,
//                 fontFamily: "Euclid-Circular-A",
//               }}>
//               {item.transferTitle}
//             </Text>
//           </View>

//           {item.transferMessage ? (
//             <View style={[CommonStyles.row, { alignSelf: "flex-start" }]}>
//               <MessageIcon color={Colors[colorScheme].text} size={12} />
//               <Text
//                 lightColor={Colors.light.mainText}
//                 darkColor={Colors.dark.mainText}
//                 style={{
//                   marginLeft: 3,
//                   fontSize: 10,
//                   fontFamily: "Euclid-Circular-A-Light",
//                 }}>
//                 {item.transferMessage}
//               </Text>
//             </View>
//           ) : null}
//         </View>

//         <View
//           style={{
//             display: "flex",
//           }}>
//           <Text
//             style={{
//               fontFamily: "Euclid-Circular-A-Semi-Bold",
//               fontSize: 14,
//               color:
//                 item.transferType === "incoming"
//                   ? Colors.general.green
//                   : item.transferType === "send"
//                   ? Colors.general.green
//                   : Colors.general.red,
//             }}>
//             {"\u20A6"} {item.amount}
//           </Text>
//           <Text
//             lightColor={Colors.light.mainText}
//             darkColor={Colors.dark.mainText}
//             style={{
//               fontSize: 10,
//               marginTop: 3,
//               fontFamily: "Euclid-Circular-A-Light",
//               alignSelf: "flex-end",
//             }}>
//             {item.date}
//           </Text>
//         </View>
//       </View>
//     </>
//   );
// }

// import { FlatList } from "react-native";
// import { SendIcon } from "../../../../../assets/svg";
// import { Text, View } from "../../../../components/Themed";
// import Colors from "../../../../constants/Colors";
// import useColorScheme from "../../../../hooks/useColorScheme";
// import TransactionListItem from "./TransactionHistroy";
// import * as Images from "../../../../../assets/images";
// import { hp } from "../../../../common/util/LayoutUtil";

// const recentTransactions = [
//   {
//     id: 1,
//     displayPicture: Images.Aleemz,
//     name: "Aleemz Abubakar",
//     transferTitle: "Incoming Transfer",
//     amount: "150,000.00",
//     date: "04:26",
//     transferType: "send",
//     year: "9 June 2022",
//   },
//   {
//     id: 2,
//     displayPicture: Images.Chess,
//     name: "Round-Up",
//     transferTitle: "Chess in Slums",
//     amount: "15,000.00",
//     date: "04:26",
//     year: "15 June 2022",
//   },
//   {
//     id: 3,
//     displayPicture: Images.Aleemz,
//     name: "Adewale Adetokunbo",
//     transferTitle: "Outgoing Transfer",
//     amount: "15,000.00",
//     date: "04:26",
//     year: "20 June 2022",
//   },
//   {
//     id: 4,
//     displayPicture: Images.Aleemz,
//     name: "Adewale Adetokunbo",
//     transferTitle: "Outgoing Transfer",
//     amount: "15,000.00",
//     date: "04:26",
//   },
//   {
//     id: 5,
//     displayPicture: Images.AccessBank,
//     name: "Access Bank (140...)",
//     transferType: "outgoing",
//     transferTitle: "Withdrawal",
//     amount: "15,000.00",
//     date: "04:26",
//   },

//   {
//     id: 6,
//     displayPicture: Images.Aleemz,
//     name: "Adewale Adetokunbo",
//     transferTitle: "Outgoing Transfer",
//     amount: "15,000.00",
//     date: "04:26",
//   },

//   {
//     id: 7,
//     displayPicture: Images.Aleemz,
//     name: "Adewale Adeyesufu",
//     transferType: "incoming",
//     transferTitle: "Incoming Transfer",
//     transferMessage: "Chop life my gee ❤️",
//     amount: "28,000.00",
//     date: "4 July 2022 04:26",
//   },

//   {
//     id: 8,
//     displayPicture: Images.UbaBank,
//     name: "Adewale Adeyesufu",
//     transferType: "transfer",
//     transferTitle: "Transfer to Bank",
//     amount: "328,000.00",
//     date: "4 July 2022 04:26",
//   },

//   {
//     id: 9,
//     displayPicture: Images.Aleemz,
//     name: "Adewale Adeyesufu",
//     transferType: "incoming",
//     transferTitle: "Incoming Transfer",
//     amount: "28,000.00",
//     date: "4 July 2022 04:26",
//   },

//   {
//     id: 10,
//     displayPicture: Images.Swift,
//     name: "Swift Networks",
//     transferType: "transfer",
//     transferTitle: "Internet Payment",
//     amount: "328,000.00",
//     date: "4 July 2022 04:26",
//   },
// ];

// export default function RecentTransactions() {
//   const colorScheme = useColorScheme();

//   return (
//     <View style={{ display: "flex", marginTop: hp(15) }}>
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       />
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item) => item.id.toString()}
//         data={recentTransactions}
//         contentContainerStyle={{ paddingBottom: 250 }}
//         ItemSeparatorComponent={() => {
//           return <View />;
//         }}
//         renderItem={({ item }) => <TransactionListItem item={item} />}
//       />
//     </View>
//   );
// }

// import React from "react";
// import { TouchableOpacity } from "react-native";
// import { View, Text } from "../../../components/Themed";
// import { DownLoadIcon } from "../../../../assets/svg";
// import SpacerWrapper from "../../../common/util/SpacerWrapper";
// import CommonStyles from "../../../common/styles/CommonStyles";
// import { RootTabScreenProps } from "../../../../types";
// import BackButton from "../../../components/buttons/BackButton";
// import RecentTransactions from "./components/RecentTransactions";

// const TransactionHistory = ({ navigation }: RootTabScreenProps<"Vault">) => {
//   return (
//     <SpacerWrapper>
//       <View style={CommonStyles.vaultcontainer}>
//         <View style={[CommonStyles.transContainer]}>
//           <BackButton
//             onPress={() => navigation.goBack()}
//             style={{ marginTop: 7 }}
//           />
//           <Text style={CommonStyles.transHistory}>Transaction History</Text>
//           <TouchableOpacity style={{ alignItems: "center" }}>
//             <DownLoadIcon />
//             <Text style={CommonStyles.download}>Download</Text>
//           </TouchableOpacity>
//         </View>
//         <RecentTransactions />
//       </View>
//     </SpacerWrapper>
//   );
// };

// export default TransactionHistory;
