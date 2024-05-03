import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { useState } from 'react'

function App() {
	const [postContent, setPostContent] = useState('')
	const [post, setPost] = useState()

	const handleChange = e => setPostContent(e.target.value)
	const handleSubmit = e => {
		e.preventDefault()

		setPost(DOMPurify.sanitize(marked.parse(postContent)))
	}

	return (
		<div className='mx-auto w-[500px]'>
			<h1 className='text-center text-4xl'>Markdown poster</h1>
			<div>
				<form onSubmit={handleSubmit}>
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
				{post && <div dangerouslySetInnerHTML={{ __html: post }}></div>}
			</div>
		</div>
	)
}

export default App
