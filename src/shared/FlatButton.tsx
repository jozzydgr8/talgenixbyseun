
import {JSX} from 'react'
type buttonProps = {
    title?:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void),
    className?:string,
    disabled?:boolean
    icon?: JSX.Element,
    children?:JSX.Element
    htmlType?: "button" | "submit" | "reset"


}
export const FlatButton = ({children, title, onClick,className,disabled, icon, htmlType}:buttonProps)=>{
    return(
        <button onClick={onClick} className={className} disabled={disabled} type={htmlType}>
            {title} {children} {icon}
        </button>
    )
}