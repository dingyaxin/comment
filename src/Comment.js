import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
    static propTypes={
        comment:PropTypes.object,
       
    }

    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }

    render(){
        return(
        <div className='comment-show'>
            <span className='comment-show-username'>{this.props.comment.username}:</span>
            <span>{this.props.comment.content}</span>
            <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}> 删除</span>
        </div>)
    }
}

export default Comment;