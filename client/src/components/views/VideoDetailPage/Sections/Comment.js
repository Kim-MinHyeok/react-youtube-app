import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import Axios from 'axios';
import { useSelector} from 'react-redux';
import SingleComment from './SingleComment'
const { TextArea } = Input;

function Comment(props) {
    const videoId = props.postId;
    const user = useSelector(state => state.user);
    const [commentValue, setcommentValue] = useState("")

    const handleClick = (event) => {
        setcommentValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            content: commentValue,
            writer: user.userData._id,
            postId: videoId
        }

        Axios.post('/api/commen/saveComment', variables)
        .then(response => {
            if(response.data.success) {
                console.log(response.data.result)
            }else {
                alert('Failed to save Comment.')
            }
        })
    }

    return (
        <div>
            <br />
            <p> Replies</p>
            <hr />

            {/* Comment Lists  */}

            {props.commentLists && props.commentsLists.map((comment, index) => (
                (!comment.responseTo && 
                    <SingleComment comment={comment} postId={videoId} />
                )
            ))}

            {/* Root Comment Form */}

            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={commentValue}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default Comment
