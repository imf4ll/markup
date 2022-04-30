import { Container } from './style';

export default ({ choose, func, dialogModal }: DialogModalProps) => {
    const handleChoose = (choosed: boolean) => {
        choose?.({
            choose: choosed,
            function: func,
        })

        dialogModal?.(false);
    }

    return (
        <Container>
            <h1>Are you sure you want to create a new file?</h1>
            <input type="button" value="Yes" onClick={ () => handleChoose(true) } />
            <input type="button" value="No" onClick={ () => handleChoose(false) } />
        </Container>
    );
}
