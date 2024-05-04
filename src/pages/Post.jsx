import { Link } from 'react-router-dom'

function Post({ post, user }) {
	return (
		<div>
			<div>
				<Link to='/' className='mb-4 text-sm'>
					Go back
				</Link>
			</div>
			<div dangerouslySetInnerHTML={{ __html: post }} className='mb-2'></div>
			<div className='flex justify-between text-sm italic'>
				<h4>Posted by {user}</h4>
			</div>
		</div>
	)
}

export default Post
