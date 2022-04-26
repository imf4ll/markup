import { MouseEventHandler } from 'react';
import { Container } from './styles';

interface MenuProps {
    handleNew?: MouseEventHandler<HTMLInputElement>;
    handleOpen?: MouseEventHandler<HTMLInputElement>;
}

export default ({ handleNew, handleOpen }: MenuProps) => {

    return (
        <Container>
            <div className="buttons">
                <input type="button" value="New" onClick={ handleNew } />
                <input type="button" value="Open" onClick={ handleOpen } />    
            </div>
        </Container>
    );
}
