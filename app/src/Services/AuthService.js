
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode }  from "jwt-decode";

export async function SalvarJWT(jwtData) {
    await AsyncStorage.setItem("@jwt", jwtData);
}

export async function ChecarLoginUsuario() {
    const token = await AsyncStorage.getItem("@jwt");
    if (!token) {
        return false;
    }

    const userData = jwtDecode(token);
    const actualDate = Date.parse(new Date()) / 1000;

    if (actualDate > userData.exp) {
        //usuario expirado
        await AsyncStorage.removeItem("@jwt");
        return false;
    }

    return true;
}

export async function HeaderRequisicao() {
    const usuarioLogado = await ChecarLoginUsuario();

    if (usuarioLogado == false) {
        Navegar('Login')
    }

    const token = await AsyncStorage.getItem("@jwt");
    return new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
    });
}
