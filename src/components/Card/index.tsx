import { ReactNode } from "react"

interface CardProps {
    children: ReactNode
    text: string
    border?: boolean
}

export default function Card({ children, text, border }: CardProps) {
    return (
        <div className={`max-w-xs w-full py-8 px-8 rounded-xl bg-my/60 flex flex-col items-center gap-6 ${border && 'border border-white'}`}>
            {children}
            <h4 className="text-white text-lg tracking-wider uppercase font-bold">{text}</h4>
        </div>
    )
}