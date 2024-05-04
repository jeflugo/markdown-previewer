import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { useState } from 'react'
import Post from '../Post'

function Home({ posts, setPosts }) {
	const [postContent, setPostContent] = useState('')

	const handleChange = e => setPostContent(e.target.value)
	const handleSubmit = e => {
		e.preventDefault()

		setPosts(prevPosts => [
			...prevPosts,
			DOMPurify.sanitize(marked.parse(postContent)),
		])
	}
	return (
		<>
			<h1 className='text-center text-4xl'>Markdown poster</h1>
			<div>
				<form onSubmit={handleSubmit} className='mb-4'>
					<div className='mb-4 flex'>
						<textarea
							type='text'
							name='text'
							id='text'
							placeholder='what to post?'
							value={postContent}
							onChange={handleChange}
							className='h-[400px] w-1/2 border border-black px-2'
						/>
						<div className='h-[400px] w-1/2 border border-black px-2'>
							{postContent !== '' && (
								<div
									className='h-[400px] overflow-y-scroll'
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(marked.parse(postContent)),
									}}
								></div>
							)}
						</div>
					</div>
					<button
						type='submit'
						className='bg rounded-md bg-green-500 px-2 py-1 text-gray-100'
					>
						Post
					</button>
				</form>
				{posts.length !== 0 &&
					posts.map((post, i) => <Post key={i} post={post} user={i + 1} />)}
			</div>
		</>
	)
}

export default Home
