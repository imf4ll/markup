import { useState, useEffect } from 'react';
import { Container, ImgContainer } from './styles';
import Dialog from '../../components/DialogModal';

import Add from '../../assets/add.svg';
import Open from '../../assets/open.svg';

export default ({ saved, handleNew, handleOpen }: MenuProps) => {
    const [ dialogOpen, setDialogOpen ] = useState<boolean>(false);
    const [ choose, setChoose ] = useState<ChooseObject>();
    const [ func, setFunc ] = useState<string>();
 
    useEffect(() => {
        if (choose !== undefined) {
            if (!choose.choose) { return }

            if (choose.function === 'open') {
                handleOpen?.();

            } else {
                handleNew?.();

            }
        }

    }, [ choose ]);

    const handleClick = (func: string) => {
        if (!saved) {
            setDialogOpen(true);

            setFunc(func);
        
        } else {
            if (func === 'new') {
                handleNew?.();

            } else if (func === 'open') {
                handleOpen?.();

            }
        }
    }

    return (
        <>
            { dialogOpen && <Dialog choose={ setChoose } func={ func } dialogModal={ setDialogOpen } /> }
            <Container>
                <div className="buttons">
                    <ImgContainer>
                        <img
                            src={ Add }
                            title="New"
                            onClick={ () => handleClick('new') }
                        />
                    </ImgContainer>
                    <ImgContainer>
                        <img
                            src={ Open }
                            title="Open"
                            onClick={ () => handleClick('open') }
                        />
                    </ImgContainer>
                </div>
            </Container>
        </>
    );
}
