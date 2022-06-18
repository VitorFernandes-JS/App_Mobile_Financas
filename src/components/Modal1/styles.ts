import { StyleSheet} from 'react-native';

interface IViewButtonProps {
  left?: number,
  top?: number
}

export const styles = StyleSheet.create({
    viewModal: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 20,
        marginTop: 300,
        left: 115,
        margin: 20,
        shadowColor: '#1a1a1a',
        shadowOpacity: 0.4,
        shadowRadius: 10
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        top: -5
    },
    modalSubtitle: {
        fontSize: 13,
        textAlign: 'center',
        top: -1
    },
    closeModalIcon: {
        left: 62
    }
});

export const viewButtonStyles = ({ top, left }: IViewButtonProps) => StyleSheet.create({
    viewButton: {
        width: 13,
        height: 13,
        backgroundColor: '#1a1aff',
        borderRadius: 25,
        left,
        top
    }
})