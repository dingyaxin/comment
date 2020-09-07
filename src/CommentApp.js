import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {
  static propTypes = {
    data: PropTypes.any,
    onSaveData: PropTypes.func.isRequired
  }

    constructor(props){
        super(props)
        this.state={
            comments:props.data
        }
    }

    handleSubmit(comment) {
      let comments=this.state.comments
        comments.push(comment)
        this.setState({
          comments: comments
        })
        this.props.onSaveData(comments)
    }
    handleDeleteComment(index){
      console.log(index);
      let comments=this.state.comments
      comments.splice(index,1)
      this.setState({
        comments:comments
      })
      this.props.onSaveData(comments)
    }
    render() {
    return (
      <div className='app-container'>
        <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
    )
  }
}

CommentApp=wrapWithLoadData(CommentApp,'comments')
export default CommentApp