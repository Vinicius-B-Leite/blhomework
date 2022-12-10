import DocumentPicker from 'react-native-document-picker'

export async function pickImage(setState) {
    DocumentPicker.pick({
        allowMultiSelection: false,
        type: 'image/*',
        copyTo: 'documentDirectory'
    }).then(data => {
        setState(data[0])
    })
}