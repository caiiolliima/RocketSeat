// let currentText = "tokens"+"[ambiente"+1+"]"

// for (let currentText = 0; currentText < array.length; currentText++) {
//   const element = array[currentText];
// }

// console.log(currentText)

let currentText = "tokens[ambiente1]";
const limite = 1005; 

for (let i = 1; i <= limite; i++) {
  currentText += "tokens[ambiente" + i + "]";
}

console.log(currentText);

var input = {
   
  setup: function(){
      
  // Read stored values from global tokens and populate them in the input fields. 
  CF.getJoin(CF.GlobalTokensJoin, function(tokens) {
    for (let i = 1; i <= limite; i++) {
      currentText += `tokens[ambiente${i}]`;
    }

    var currentText1 = tokens["[ambiente1]"];

    // now do something with these variables
    CF.setJoin("s1001", currentText1);
    CF.setJoin("s1002", currentText2);
    CF.setJoin("s1003", currentText3);
    CF.setJoin("s1004", currentText4);
    CF.setJoin("s1005", currentText5);
    CF.setJoin("s1006", currentText6);
    CF.setJoin("s1007", currentText7);
    CF.setJoin("s1008", currentText8);
    CF.setJoin("s1009", currentText9);
    CF.setJoin("s1010", currentText10);
    CF.setJoin("s1011", currentText11);
    CF.setJoin("s1012", currentText12);
    CF.setJoin("s1013", currentText13);
    CF.setJoin("s1014", currentText14);
    CF.setJoin("s1015", currentText15);
    CF.setJoin("s1016", currentText16);
    CF.setJoin("s1017", currentText17);
    CF.setJoin("s1018", currentText18);
    CF.setJoin("s1019", currentText19);
    CF.setJoin("s1020", currentText20);
    CF.setJoin("s1021", currentText21);
    CF.setJoin("s1022", currentText22);
    CF.setJoin("s1023", currentText23);
    CF.setJoin("s1024", currentText24);
    CF.setJoin("s1025", currentText25);
    CF.setJoin("s1026", currentText26);
    CF.setJoin("s1027", currentText27);
    CF.setJoin("s1028", currentText28);
    CF.setJoin("s1029", currentText29);
    CF.setJoin("s1030", currentText30);
    CF.setJoin("s1031", currentText31);
    CF.setJoin("s1032", currentText32);
    CF.setJoin("s1033", currentText33);
    CF.setJoin("s1034", currentText34);
    CF.setJoin("s1035", currentText35);
    CF.setJoin("s1036", currentText36);
    CF.setJoin("s1037", currentText37);
    CF.setJoin("s1038", currentText38);
    CF.setJoin("s1039", currentText39);
    CF.setJoin("s1040", currentText40);
    CF.setJoin("s1041", currentText41);
    CF.setJoin("s1042", currentText42);
    CF.setJoin("s1043", currentText43);
    CF.setJoin("s1044", currentText44);
    CF.setJoin("s1045", currentText45);
    CF.setJoin("s1046", currentText46);
    CF.setJoin("s1047", currentText47);
    CF.setJoin("s1048", currentText48);
    CF.setJoin("s1049", currentText49);
    CF.setJoin("s1050", currentText50);
    CF.setJoin("s1051", currentText51);
    CF.setJoin("s1052", currentText52);
    CF.setJoin("s1053", currentText53);
    CF.setJoin("s1054", currentText54);
    CF.setJoin("s1055", currentText55);
    CF.setJoin("s1056", currentText56);
    CF.setJoin("s1057", currentText57);
    CF.setJoin("s1058", currentText58);
    CF.setJoin("s1059", currentText59);
    CF.setJoin("s1060", currentText60);
    CF.setJoin("s1061", currentText61);
    CF.setJoin("s1062", currentText62);
    CF.setJoin("s1063", currentText63);
    CF.setJoin("s1064", currentText64);
    CF.setJoin("s1065", currentText65);
    CF.setJoin("s1066", currentText66);
    CF.setJoin("s1067", currentText67);
    CF.setJoin("s1068", currentText68);
    CF.setJoin("s1069", currentText69);
    CF.setJoin("s1070", currentText70);
    CF.setJoin("s1071", currentText71);
    CF.setJoin("s1072", currentText72);
    CF.setJoin("s1073", currentText73);
    CF.setJoin("s1074", currentText74);
    CF.setJoin("s1075", currentText75);
    CF.setJoin("s1076", currentText76);
    CF.setJoin("s1077", currentText77);
    CF.setJoin("s1078", currentText78);
    CF.setJoin("s1079", currentText79);
    CF.setJoin("s1080", currentText80);
    CF.setJoin("s1081", currentText81);
    CF.setJoin("s1082", currentText82);
    CF.setJoin("s1083", currentText83);
    CF.setJoin("s1084", currentText84);
    CF.setJoin("s1085", currentText85);
    CF.setJoin("s1086", currentText86);
    CF.setJoin("s1087", currentText87);
    CF.setJoin("s1088", currentText88);
    CF.setJoin("s1089", currentText89);
    CF.setJoin("s1090", currentText90);
    CF.setJoin("s1091", currentText91);
    CF.setJoin("s1092", currentText92);
    CF.setJoin("s1093", currentText93);
    CF.setJoin("s1094", currentText94);
    CF.setJoin("s1095", currentText95);
    CF.setJoin("s1096", currentText96);
    CF.setJoin("s1097", currentText97);
    CF.setJoin("s1098", currentText98);
    CF.setJoin("s1099", currentText99);
    CF.setJoin("s1100", currentText100);
    CF.setJoin("s1101", currentText101);
    CF.setJoin("s1102", currentText102);
    CF.setJoin("s1103", currentText103);
    CF.setJoin("s1104", currentText104);
    CF.setJoin("s1105", currentText105);
    CF.setJoin("s1106", currentText106);
    CF.setJoin("s1107", currentText107);
    CF.setJoin("s1108", currentText108);
    CF.setJoin("s1109", currentText109);
    CF.setJoin("s1110", currentText110);
    CF.setJoin("s1111", currentText111);
    CF.setJoin("s1112", currentText112);
    CF.setJoin("s1113", currentText113);
    CF.setJoin("s1114", currentText114);
    CF.setJoin("s1115", currentText115);
    CF.setJoin("s1116", currentText116);
    CF.setJoin("s1117", currentText117);
    CF.setJoin("s1118", currentText118);
    CF.setJoin("s1119", currentText119);
    CF.setJoin("s1120", currentText120);
    CF.setJoin("s1121", currentText121);
    CF.setJoin("s1122", currentText122);
    CF.setJoin("s1123", currentText123);
    CF.setJoin("s1124", currentText124);
    CF.setJoin("s1125", currentText125);
    CF.setJoin("s1126", currentText126);
    CF.setJoin("s1127", currentText127);
    CF.setJoin("s1128", currentText128);
    CF.setJoin("s1129", currentText129);
    CF.setJoin("s1130", currentText130);
    CF.setJoin("s1131", currentText131);
    CF.setJoin("s1132", currentText132);
    CF.setJoin("s1133", currentText133);
    CF.setJoin("s1134", currentText134);
    CF.setJoin("s1135", currentText135);

  });
  
  // Watch all the input fields for changes
  CF.watch(CF.InputFieldEditedEvent, "s1001", function(value) {
    CF.setToken(CF.GlobalTokensJoin,"[ambiente1]",value);
  });
  
  CF.watch(CF.InputFieldEditedEvent, "s1002", function(value) {
    CF.setToken(CF.GlobalTokensJoin,"[ambiente2]",value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1003", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente3]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1004", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente4]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1005", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente5]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1006", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente6]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1007", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente7]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1008", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente8]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1009", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente9]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1010", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente10]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1011", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente11]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1012", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente12]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1013", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente13]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1014", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente14]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1015", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente15]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1016", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente16]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1017", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente17]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1036", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente36]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1019", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente19]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1020", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente20]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1021", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente21]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1022", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente22]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1023", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente23]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1024", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente24]", value);
  });
  
  CF.watch(CF.InputFieldEditedEvent, "s1025", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente25]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1026", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente26]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1027", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente27]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1028", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente28]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1029", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente29]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1030", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente30]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1031", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente31]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1032", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente32]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1033", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente33]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1034", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente34]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1035", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente35]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1036", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente36]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1037", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente37]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1038", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente38]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1039", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente39]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1040", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente40]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1041", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente41]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1042", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente42]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1043", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente43]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1044", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente44]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1045", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente45]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1046", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente46]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1047", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente47]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1048", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente48]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1049", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente49]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1050", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente50]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1051", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente51]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1052", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente52]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1053", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente53]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1054", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente54]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1055", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente55]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1056", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente56]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1057", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente57]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1058", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente58]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1059", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente59]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1060", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente60]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1061", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente61]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1062", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente62]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1063", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente63]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1064", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente64]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1065", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente65]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1066", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente66]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1067", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente67]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1068", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente68]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1069", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente69]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1070", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente70]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1071", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente71]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1072", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente72]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1073", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente73]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1074", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente74]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1075", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente75]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1076", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente76]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1077", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente77]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1078", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente78]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1079", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente79]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1080", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente80]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1081", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente81]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1082", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente82]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1083", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente83]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1084", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente84]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1085", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente85]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1086", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente86]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1088", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente88]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1089", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente89]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1090", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente90]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1091", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente91]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1092", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente92]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1093", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente93]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1094", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente94]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1095", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente95]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1096", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente96]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1097", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente97]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1098", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente98]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1099", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente99]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1100", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente100]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1101", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente101]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1102", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente102]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1103", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente103]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1104", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente104]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1105", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente105]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1106", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente106]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1107", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente107]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1108", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente108]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1109", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente109]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1110", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente110]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1111", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente111]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1112", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente112]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1113", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente113]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1114", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente114]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1115", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente115]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1116", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente116]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1117", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente117]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1118", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente118]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1119", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente119]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1120", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente120]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1121", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente121]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1122", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente122]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1123", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente123]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1124", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente124]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1125", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente125]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1126", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente126]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1127", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente127]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1128", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente128]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1129", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente129]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1130", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente130]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1131", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente131]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1132", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente132]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1133", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente133]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1134", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente134]", value);
  });

  CF.watch(CF.InputFieldEditedEvent, "s1135", function (value) {
    CF.setToken(CF.GlobalTokensJoin, "[ambiente135]", value);
  });

},
};

// At load time, the code below is executed. This is a good occasion to add our module to the modules list.
CF.modules.push({
  name: "Change Text",      // the name of the module (mostly for display purposes)
  setup: input.setup,  					// the setup function to call
  object: input,       					// the object to which the setup function belongs ("this")
  version: 0.74                		// An optional module version number that is displayed in the Remote Debugger
});