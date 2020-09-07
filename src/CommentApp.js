import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }

    UNSAFE_componentWillMount(){
      this._loadComments()
    }

    _loadComments(){
      let comments=localStorage.getItem('comments')
      if(comments){
        comments=JSON.parse(comments)
        console.log(comments)
        this.setState({
          comments:comments
        })
      }
    }
    _saveComments(comments){
      localStorage.setItem('comments',JSON.stringify(comments))
    }

    handleSubmit(comment) {
      let comments=this.state.comments
        comments.push(comment)
        this.setState({
          comments: comments
        })
        this._saveComments(comments)
    }
    handleDeleteComment(index){
      console.log(index);
      let comments=this.state.comments
      comments.splice(index,1)
      this.setState({
        comments:comments
      })
      this._saveComments(comments)
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

export default CommentApp