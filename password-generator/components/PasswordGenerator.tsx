import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(8, "Password length must be at least 8 characters")
        .max(16, "Password length must not exceed 16 characters")
        .required("Password length is required"),
});

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePasswordString = (passwordLength: number) => {
        let passwordString = "";
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const digits = "0123456789";
        const specialChars = "!@#$%^&*()_+";

        if (lowerCase) {
            passwordString += lowercaseLetters;
        }

        if (upperCase) {
            passwordString += uppercaseLetters;
        }

        if (numbers) {
            passwordString += digits;
        }

        if (symbols) {
            passwordString += specialChars;
        }

        const generatedPassword = createPassword(
            passwordString,
            passwordLength,
        );
        setPassword(generatedPassword);
        setIsPasswordGenerated(true);
    };
    const createPassword = (characters: string, passwordLength: number) => {
        let result = "";
        for (let i = 0; i < passwordLength; i++) {
            const charIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(charIndex);
        }

        return result;
    };

    const resetPasswordState = () => {
        setPassword("");
        setIsPasswordGenerated(false);
        setLowerCase(true);
        setUpperCase(false);
        setNumbers(false);
        setSymbols(false);
    };

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Password Generator</Text>
                    <Formik
                        initialValues={{ passwordLength: "" }}
                        validationSchema={passwordSchema}
                        onSubmit={(values) => {
                            generatePasswordString(
                                parseInt(values.passwordLength),
                            );
                        }}
                    >
                        {({
                            errors,
                            values,
                            isValid,
                            handleChange,
                            handleSubmit,
                            resetForm,
                            touched,
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>
                                            Password Length
                                        </Text>
                                        {touched.passwordLength &&
                                            errors.passwordLength && (
                                                <Text style={styles.errorText}>
                                                    {errors.passwordLength}
                                                </Text>
                                            )}
                                    </View>
                                    <TextInput
                                        style={styles.inputStyle}
                                        value={values.passwordLength}
                                        onChangeText={handleChange(
                                            "passwordLength",
                                        )}
                                        placeholder="Password Length"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>
                                        Include Lowercase
                                    </Text>

                                    <BouncyCheckbox
                                        isChecked={lowerCase}
                                        onPress={() => setLowerCase(!lowerCase)}
                                        fillColor="#29AB87"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>
                                        Include Uppercase
                                    </Text>
                                    <BouncyCheckbox
                                        isChecked={upperCase}
                                        onPress={() => setUpperCase(!upperCase)}
                                        fillColor="#C9A0DC"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>
                                        Include Numbers
                                    </Text>
                                    <BouncyCheckbox
                                        isChecked={numbers}
                                        onPress={() => setNumbers(!numbers)}
                                        fillColor="#EF9A9A"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>
                                        Include Symbols
                                    </Text>
                                    <BouncyCheckbox
                                        isChecked={symbols}
                                        onPress={() => setSymbols(!symbols)}
                                        fillColor="#F8E9A1"
                                    />
                                </View>

                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        disabled={!isValid}
                                        style={styles.primaryBtn}
                                        onPress={() => {
                                            handleSubmit();
                                        }}
                                    >
                                        <Text style={styles.primaryBtnTxt}>
                                            Generate Password
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.secondaryBtn}
                                        onPress={() => {
                                            resetForm();
                                            resetPasswordState();
                                        }}
                                    >
                                        <Text style={styles.secondaryBtnTxt}>
                                            Reset
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                    {isPasswordGenerated ? (
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text style={styles.subTitle}>Result:</Text>
                            <Text style={styles.description}>
                                Long Press to copy
                            </Text>
                            <Text style={styles.generatedPassword} selectable>
                                {password}
                            </Text>
                        </View>
                    ) : null}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: "600",
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: "600",
        marginBottom: 2,
    },
    description: {
        color: "#758283",
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
        marginHorizontal: 5,
    },
    inputWrapper: {
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    inputColumn: {
        flexDirection: "column",
    },
    inputStyle: {
        padding: 8,
        width: "30%",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#16213e",
        
    },
    errorText: {
        fontSize: 12,
        color: "#ff0d10",
    },
    formActions: {
        flexDirection: "row",
        justifyContent: "center",
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: "#5DA3FA",
    },
    primaryBtnTxt: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700",
    },
    secondaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: "#CAD5E2",
    },
    secondaryBtnTxt: {
        textAlign: "center",
        marginVertical: 15,
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
        marginVertical: 20,
    },
    cardElevated: {
        backgroundColor: "#ffffff",
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 12,
        color: "#000",
    },
});
