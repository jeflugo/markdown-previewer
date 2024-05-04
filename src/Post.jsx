import { Link } from 'react-router-dom'

function Post({ post, user, id }) {
	return (
		<div className='mb-4'>
			<div dangerouslySetInnerHTML={{ __html: post }} className='mb-2'></div>
			<div className='flex justify-between text-sm italic'>
				<h4>Posted by {user}</h4>
				<p>
					<Link to={`/posts/${id}`}>see more</Link>
				</p>
			</div>
		</div>
	)
}

export default Post
