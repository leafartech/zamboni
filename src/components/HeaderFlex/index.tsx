interface HeaderFlexProps { }

export default function HeaderFlex() {
    return (
        <header className="relative w-full flex justify-center h-screen">
            <div className="w-full max-w-7xl flex flex-col-reverse sm:grid sm:grid-cols-2 gap-2 items-center px-4 sm:px-0">
                <div className="flex flex-col gap-2 sm:gap-4">
                    <img src="./images/logo.png" alt="" className="w-52 mb-2" />
                    <h1 className="text-5xl font-bold text-white">A forma mais inteligente para <span className="text-my">estudar e absorver</span> os conteúdos de direito.</h1>
                    <p className="text-zinc-200 text-lg"> Construa <strong>a base que você precisa para ser aprovado</strong> em provas de <strong>concurso público, OAB</strong> ou até mesmo para tirar <strong>notas máximas</strong> nas provas da graduação.</p>
                    <a href="" className="py-3 bg-my max-w-sm text-center text-sm rounded-md text-white font-bold uppercase my-shadow">Começar agora</a>
                </div>
                <img src="./images/bg.webp" alt="" className="absolute right-0 bottom-0 max-h-screen" />
            </div>
        </header>
    )
}