import Toast from 'react-native-toast-message';

export function SuccessMessage(title, message){
    Toast.show({
        type: 'success',
        text1: title,
        text2: message,
        topOffset: 120,
    });
}

export function ErrorMessage(title, message){
    Toast.show({
        type: 'error',
        text1: title,
        text2: message,
        topOffset: 120,
    });
}