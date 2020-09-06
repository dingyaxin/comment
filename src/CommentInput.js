import React,{Component} from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component{
    static propTypes={
        onSubmit:PropTypes.func
    }

    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }

    componentWillMount(){
        this._saveUsername()
    }

    _saveUsername(username){
        localStorage.getItem('username',username)
    }

    handleUsernameChange(e){
        this.setState({
            username:e.target.value
        })
    }

    handleContentChange(e){
        this.setState({
            content:e.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content}=this.state
            this.props.onSubmit({username,content})
        }
        this.setState({
            content:''
        })
    }
    render(){
        return(<div className='comment-input'>
            <div className='comment-username'>
                <span>用户名：</span>
                <input placeholder='请输入用户名' value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
            </div>
            <div className='comment-content'>
                <span>评论内容：</span>
                <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
            </div>
            <div className='comment-submit'>
                <button onClick={this.handleSubmit.bind(this)}>发布</button>
            </div>
        </div>)
    }
}
export default CommentInput
