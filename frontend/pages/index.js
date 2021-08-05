import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({ users }) {
  users = users.map(user => {
    return (
    <div className={styles.divUser} key={user.email}>
      <h1><span className={styles.sticker}>Full name:</span> {user.name + ' ' + user.lastname}</h1>
      <h3><span className={styles.sticker}>Email:</span> {user.email}</h3>
    </div>
    )
  })
  
  return (
    <div className={styles.container}>
      {users}
    </div>
  )
}

export async function getStaticProps () {
  try {
    const users = await axios.get('http://localhost:8000/')
    if (!users) {
      return {
        props: {
          users: []
        }
      }
    }

    return {
      props: {
        users: users.data.users
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        users: []
      }
    }
  }
}