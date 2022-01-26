import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Context from '../context/Context';
import { signIn, signUp } from "../firebase";
export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("signUp");
    const {
        theme : { colors },
    } = useContext(Context);

    async function handlePress() {
        if (mode === "signUp") {
          await signUp(email, password);
        }
        if (mode === "signIn") {
          await signIn(email, password);
        }
      }

    return (
        <View 
            style = {{
                justifyContent: "center", 
                alignItems: "center", 
                flex: 1,
                backgroundColor: '#5352ee',
            }}
        >
            <Text 
                style={{
                    color: colors.white, 
                    fontWeight: "bold", 
                    fontSize:30, 
                    marginBottom: 0,
                    fontFamily: 'Roboto'
                    }}>
                Welcome to EduLearn
            </Text>

            <Image 
                source={require('../assets/welcome-img.png')}
                style={{ width: 240, height: 200}} 
                resizeMode="cover"
            />
            <View style={{marginTop: 20}}>
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor= '#8E8E8E'
                    value={email}
                    onChangeText={setEmail} 
                    style={{
                        // borderBottomColor: colors.white, 
                        // borderBottomColor: '#282534',
                        // borderBottomWidth: 2, 
                        borderRadius: 0,
                        backgroundColor: "white",
                        width: 227,
                    }}
                />
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor='#8E8E8E'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                    style={{
                        // borderBottomColor: colors.white,
                        // borderBottomColor: '#282534',
                        // borderBottomWidth: 2, 
                        borderRadius: 0,
                        backgroundColor: "white",
                        width: 200,
                        width: 227,
                        marginTop: 20,
                    }}
                />
                <View style={{ marginTop: 30 }}>
                    <Button
                        title={mode === "signUp" ? "Sign Up" : "Sign In"}
                        disabled={!password || !email}
                        color={colors.secondary}
                        onPress={handlePress}
                    />
                </View>
                <TouchableOpacity
                    style={{ marginTop: 18 }}
                    onPress={() =>
                        mode === "signUp" ? setMode("signIn") : setMode("signUp")
                    }
                >
          <Text style={{ color: colors.white }}>
            {mode === "signUp"
              ? "Already have an account ? Sign In"
              : "Don't have an account ? Sign Up"}
          </Text>
        </TouchableOpacity>
        
        </View>
        </View>
    );
} 