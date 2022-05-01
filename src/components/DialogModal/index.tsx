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
            <section>
                <span>⚠️</span>
                <h1>Current file is unsaved, are you sure?</h1>
                <input type="button" value="Yes" onClick={ () => handleChoose(true) } />
                <input type="button" value="No" onClick={ () => handleChoose(false) } />
            </section>
        </Container>
    );
}
