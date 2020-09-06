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

    handleSubmit(comment) {
       /*  let comments=[]
        comments.push(comment) */
        this.state.comments.push(comment)
        this.setState({
          comments: this.state.comments
        })
    }
    handleDeleteComment(index){
      this.setState({
        comments:this.state.comments.splice(index,1)
      })
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