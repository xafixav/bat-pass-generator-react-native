import Alert from "./interfaces/Alert";

export const correctAlert: Alert = {
    title: 'SENHA COPIADA',
    message: 'A senha tambem foi enviada para a aba salvos',
    buttonsOptions: [],
    cancelable: {cancelable: true},
}

export const wrongAlert: Alert = {
    title: 'GERE UMA SENHA PRIMEIRO',
    message: 'Antes de copiar, clique em GENERATE primeiro',
    buttonsOptions: [],
    cancelable: {cancelable: true},
}