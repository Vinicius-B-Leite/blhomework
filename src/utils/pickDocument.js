import DocumentPicker from 'react-native-document-picker'

export async function pickDocument({setState, type, multiSelection, onSucess}) {
    DocumentPicker.pick({
        allowMultiSelection: multiSelection || false,
        type: type,
        copyTo: 'documentDirectory'
    }).then(data => {
        if (setState){
            setState(data)
        }

        if(onSucess){
            onSucess(data)
        }
    })
}