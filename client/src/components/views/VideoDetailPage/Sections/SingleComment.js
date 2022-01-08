import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';

const { TextArea } = Input;

function SingleComment(props) {

    const [OpenReply, setOpenReply] = useState(false)
    const [CommentValue, setCommentValue] = useState("")
    const onClickReplyOpen = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // const variables = {
        //     content: CommentValue,
        //     writer: user.userDate._id,
        //     postId: props.postId,
        //     responseTo:
        // }

        // Axios.post('/api/commen/saveComment', variables)
        //     .then(response => {
        //         if(response.data.success) {
        //             console.log(response.data.result)
        //         }else {
        //             alert('Failed to save Comment.')
        //         }
        // })
    }

    const OnHandleChange = (event) => {
        setCommentValue(event.currentTarget.CommentValue)
    }

    const actions = [
        <span onClick={onClickReplyOpen} key="comment-basic-reply-to">Reply to</span>
    ]

    return (
        <div>
            <Comment   
                actions={actions}
                author={props.comment.writer.name}
                avatar={<Avatar src={props.comment.writer.image} alt />}
                content={ <p>{props.comment.content}</p>}
            />

            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextArea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={OnHandleChange}
                        value={CommentValue}
                        placeholder="write some comments"
                    />
                    <br />
                    <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
                </form>
            }
        
        </div>
    )
}

export default SingleComment
