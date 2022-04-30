declare module '*.svg';

interface ContainerProps {
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface DialogModalProps {
    choose?: Function;
    func?: string;
    dialogModal?: Function;
}

interface MenuProps {
    handleNew?: Function;
    handleOpen?: Function;
    saved?: boolean;
}

interface ChooseObject {
    choose?: boolean;
    function?: string;
}
