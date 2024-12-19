export default interface Alert {
    title: string
    message: string
    buttonsOptions: object[] | [],
    cancelable: {cancelable: boolean},
}