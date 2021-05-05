
export default function Boton(props: botonProps) {
    return (<button type={props.type} onClick={props.onClick} className='btn btn-primary'>{props.children}</button>);
}

interface botonProps {
    children?: React.ReactNode,
    onClick?(): void,
    type:'button' | 'submit'
}

Boton.defaulProps = {
    type: 'buttom'
}
