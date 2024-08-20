import React from 'react'
import IsUser from '../components/Header/IsUser'
import IsAdmin from "../components/Header/IsAdmin"
import IsClient from "../components/Header/IsClient"
import Card from '../components/Card'
import { posts } from '../mock/posts'

const LayoutMain = () => {
  return (
    <div>
       <IsAdmin />
       <main className='mt-12 px-10 text-2xl font-semibold'>
        <h1>
          Popular Posts
        </h1>
          <article className='flex flex-wrap space-x-3 mt-5 w-5/6 justify-center space-y-2 mx-auto'>
            {
              posts.map((post) => {
                return (
                  <Card key={post.id} title={post.title} body={post.body}/>
                )
              })
            }
          </article>
       </main>
    </div>
  )
}

export default LayoutMain