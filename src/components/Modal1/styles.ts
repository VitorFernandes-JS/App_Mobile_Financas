import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

interface IViewButtonProps {
  left?: number,
  top?: number
}

export const styles = StyleSheet.create({
    viewModal: {
        width: 150,
        height: 140,
        backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 20,
        top: 300,
        left: 115,
        margin: 20,
        shadowColor: '#1a1a1a',
        shadowOpacity: 0.4,
        shadowRadius: 10
    },
    interrogation: {
        color: 'white',
        left: 4,
        top: -0.8,
        fontSize: 11
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        top: -3.2
    },
    line: {
        width: 150,
        height: 1.5,
        backgroundColor: (theme.colors.google)
    },
    modalSubtitle: {
        fontSize: 13,
        textAlign: 'center',
        top: 8.5
    },
    closeModalIcon: {
        left: 62,
        top: -8
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