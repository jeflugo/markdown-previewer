import Post from './pages/Post'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'

function App() {
	const [posts, setPosts] = useState([])

	return (
		<div className='mx-auto w-[500px]'>
			<Routes>
				<Route path='/' element={<Home posts={posts} setPosts={setPosts} />} />
				{posts.length !== 0 &&
					posts.map((post, i) => (
						<Route
							key={i}
							path={`/posts/${i + 1}`}
							element={<Post post={post} />}
							user={i + 1}
						/>
					))}
			</Routes>
		</div>
	)
}

export default App
