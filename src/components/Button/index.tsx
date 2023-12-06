import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className="text-white bg-my py-3 w-full text-center max-w-xs text-sm rounded-md font-bold my-shadow uppercase">{children}</button>
    )
}