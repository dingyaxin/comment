import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
    static propTypes={
        comment:PropTypes.array
    }

    render(){
        return(
        <div className='comment-show'>
            <span className='comment-show-username'>{this.props.comment.username}:</span>
            <span>{this.props.comment.content}</span>
        </div>)
    }
}

export default Comment;