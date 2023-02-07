import { GetServerSideProps } from "next"
import { getUsers } from "../lib/users"

export default function Home({ users }) {

  return (
    <>

    <button type="button">
      <a href="/teste">TESTE</a>
    </button>

    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>

    {/* <h1>Hello world</h1> */}
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers()
  console.log(users.map(user => user.name))

  return {
    props: {
      users
    }
  }
}