import { GetServerSideProps } from "next"

export default function Teste({ data }){
  return (
    <>
    <ul>
      {data.map(repos => (
        <li key={repos.id}>{repos.name}</li>
      ))}
    </ul>
    </>
  )
}


// Não é uma boa prática fazer uma chamada a rotas no GetServerSideProps.
// O que foi feito no componente Home que seria o mais "correto".
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/JoaoPaulo-creator/repos')
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}