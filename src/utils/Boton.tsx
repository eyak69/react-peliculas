
export default function Boton(props: botonProps) {
    return (
    <button 
        type = {props.type}
        disabled = {props.disabled}
        onClick = {props.onClick}
        className = {props.className}>
        {props.children}
    </button>);
}

interface botonProps {
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled: boolean;
    className: string;    
}


Boton.defaultProps = {
    type: "button",
    disabled: false,
    className: "btn btn-primary"
}
