import { ReactNode } from "react"

interface CheckProps {
    children: ReactNode
    size?: boolean
}

export default function Check({ children, size }: CheckProps) {
    return (
        <div className="w-full max-w-md flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className={`${size ? 'w-6 h-6' : 'w-12 h-12 -translate-y-1'}`} viewBox="0 0 32 32" fill="none">
                <path d="M10.1069 17.4349L12.4845 20.7016C12.8838 21.2504 13.7022 21.2504 14.1015 20.7016L21.8123 10.1072" stroke="#FF941C" stroke-width="3" stroke-linecap="round" />
                <rect x="1.5" y="1.5" width="29" height="29" rx="2.5" stroke="#FF941C" stroke-width="3" />
            </svg>
            <p className="text-zinc-200 text-lg">{children}</p>
        </div>
    )
}