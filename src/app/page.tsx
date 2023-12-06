import Button from "@/components/Button";
import Card from "@/components/Card";
import Check from "@/components/Check";
import HeaderFlex from "@/components/HeaderFlex";
import HeroFlex from "@/components/HeroFlex";
import Section from "@/components/Section";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="bg-bg1">
      <HeaderFlex />
      <div className="h-8 w-full bg-my"></div>
      <main className="sm:pt-24">
        <Section classNameS="sm:pb-24">
          <HeroFlex
            reverse={true}
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-4xl font-bold"><span className="text-my">Tudo</span> que você precisa em <span className="text-my">um só lugar</span></h2>
              <div className="flex flex-col gap-3 text-zinc-200">
                <p>A nossa assinatura foi construída para você se aprofundar em várias áreas do direito sem precisar adquirir vários cursos diferentes.</p>
                <p>Uma plataforma que ensina e deixa você pronto para ser aprovado em provas de concursos públicos, exame da OAB ou até mesmo para tirar notas máximas nas provas da graduação.</p>
                <p>Aqui você terá uma combinação poderosa de aulas gravadas e cursos fechados com atividades práticas.</p>
                <p>Chegou a hora de se preparar para conquistar seus objetivos!</p>
              </div>
            </div>
          </HeroFlex>
        </Section>
        <Section classNameS="sm:pb-24">
          <div className="h-[324px] w-[424px] bg-my absolute bottom-36 blur-3xl"></div>
          <div className="flex flex-col items-center z-10">
            <h2 className="text-white text-4xl font-bold text-center mb-6 max-w-xl">A melhor forma de você <span className="text-my">ganhar tempo</span> nos estudos</h2>
            <div className="max-w-4xl text-zinc-200 text-center font-medium flex flex-col gap-6">
              <div className="px-12 py-8 border border-my rounded-xl">
                <p>As aulas são separadas por temas dentro de cada disciplina. Desta maneira você pode estudar de forma direta o conteúdo que você quiser. </p>
              </div>
              <div className="px-12 py-8 border border-my rounded-xl">
                <p>Ou seja, você não perde tempo procurando o que precisa. Caso você não queira estudar todos os assuntos de uma disciplina, basta ir direto no tema que deseja. </p>
              </div>
            </div>
            <div className=" mt-6">
              <img src="./images/zambo.gif" alt="" className="sm:max-w-3xl rounded-xl" />
            </div>
          </div>
        </Section>
        <Section classNameS="parallax sm:py-24">
          <div className="flex flex-col gap-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M28.0001 26L13.0001 41C11.3401 42.66 8.66008 42.66 7.00008 41C6.6058 40.6062 6.29301 40.1386 6.0796 39.6238C5.86619 39.109 5.75635 38.5572 5.75635 38C5.75635 37.4428 5.86619 36.891 6.0796 36.3762C6.29301 35.8614 6.6058 35.3938 7.00008 35L22.0001 20" stroke="#FF941C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32 32L44 20" stroke="#FF941C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 16L28 4" stroke="#FF941C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 14L34 30" stroke="#FF941C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42 22L26 6" stroke="#FF941C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h2 className="text-white text-4xl font-bold text-center mb-6 max-w-xl">A <span className="text-my">Zamboflix</span> é para voce que:</h2>
            <div className="flex flex-wrap justify-center gap-12">
              <Check><strong>Está cursando direito</strong> e deseja aprimorar seus estudos para as provas da graduação.</Check>
              <Check><strong>É bacharel</strong> e quer fortalecer sua base nas mais diversas áreas do direito. </Check>
              <Check><strong>Deseja passar na OAB</strong> e quer contar com professores de alto nível para conquistar a sua “vermelhinha”.</Check>
              <Check><strong>Estuda para concursos públicos</strong> e quer otimizar seus estudos com conteúdos direcionados e de qualidade.</Check>
            </div>
            <Button>Eu quero fazer parte</Button>
          </div>
        </Section>
        <Section classNameS="sm:py-24">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-white text-4xl font-bold text-center mb-12 max-w-3xl">Uma <span className="text-my">plataforma comleta, dinâmica e pronta</span> para você se aprofundar nos estudos!</h2>
            <div className="flex flex-wrap justify-center text-center gap-8 max-w-4xl mt-8">
              <div className="-translate-y-12 flex flex-col gap-8">
                <Card text="+120 módulos" border={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L4 14L24 24L44 14L24 4Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 34L24 44L44 34" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 24L24 34L44 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Card>
                <Card text="+400 materiais complementares">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M12 28L14.9 22.2C15.2339 21.5373 15.7456 20.9806 16.3779 20.5921C17.0101 20.2035 17.7379 19.9985 18.48 20H40M40 20C40.6111 19.9989 41.2142 20.1379 41.7633 20.4062C42.3123 20.6745 42.7925 21.065 43.1671 21.5477C43.5418 22.0305 43.8008 22.5927 43.9244 23.1911C44.0479 23.7895 44.0328 24.4083 43.88 25L40.78 37C40.558 37.8598 40.0562 38.6213 39.3537 39.1644C38.6512 39.7076 37.788 40.0016 36.9 40H8C6.93913 40 5.92172 39.5786 5.17157 38.8284C4.42143 38.0783 4 37.0609 4 36V10C4 7.8 5.8 6 8 6H15.86C16.5188 6.00341 17.1666 6.1695 17.7458 6.48352C18.325 6.79754 18.8176 7.24976 19.18 7.8L20.82 10.2C21.1824 10.7502 21.675 11.2025 22.2542 11.5165C22.8334 11.8305 23.4812 11.9966 24.14 12H36C37.0609 12 38.0783 12.4214 38.8284 13.1716C39.5786 13.9217 40 14.9391 40 16V20Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Card>
              </div>
              <div className="flex flex-col gap-8">
                <Card text="+1.000 aulas gravadas">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 16L32 24L20 32V16Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Card>
                <Card text="+50 cursos" border={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M44 20V32M44 20L24 10L4 20L24 30L44 20Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 24V34C18 40 30 40 36 34V24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Card>
              </div>
            </div>
            <Button>Eu quero fazer parte</Button>
          </div>

        </Section>
        <Section classNameS="sm:py-24 bg-bg2">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-3 max-w-xl text-center">
              <h2 className="text-white text-4xl font-bold">O que você vai aprender</h2>
              <p className="text-zinc-300">Você decide o que quer aprender. Nós montamos uma trilha de estudos em várias áreas do direito para você:</p>
            </div>
            <div className="relative w-[796px] flex gap-12 py-8 justify-center">
              <div className="absolute top-0 h-[2px] w-[90%] bg-white"></div>
              <ul className="flex flex-col gap-6 w-1/2">
                <li><Check size={true}>Direito Constitucional </Check></li>
                <li><Check size={true}>Direito Processual Penal</Check></li>
                <li><Check size={true}>Legislação Penal Especial </Check></li>
                <li><Check size={true}>Execução Penal</Check></li>
                <li><Check size={true}>Direito Administrativo</Check></li>
                <li><Check size={true}>Direito do Consumidor </Check></li>
                <li><Check size={true}>Direito Previdenciário</Check></li>
              </ul>
              <div className="flex justify-end w-1/2">
                <ul className="flex flex-col gap-6">
                  <li><Check size={true}>Direito Disciplinar Militar</Check></li>
                  <li><Check size={true}>Direito Penal</Check></li>
                  <li><Check size={true}>Direito Civil</Check></li>
                  <li><Check size={true}>Direito Tributário</Check></li>
                  <li><Check size={true}>Direito Processual Civil</Check></li>
                  <li><Check size={true}>Direito do Consumidor</Check></li>
                </ul>
              </div>
              <div className="absolute bottom-0 h-[2px] w-[90%] bg-white"></div>
            </div>
            <Button>Eu quero fazer parte</Button>
          </div>

        </Section>
      </main>
    </div>
  )
}