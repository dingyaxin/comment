import React,{Component} from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component{
    static propTypes={
        onSubmit:PropTypes.func,
    }

    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }

    UNSAFE_componentWillMount(){
        this._loadUsername()
    }

    componentDidMount(){
        this.textarea.focus()
    }
    
    _loadUsername(){
        let username=localStorage.getItem('username')
        if(username){
            this.setState({
                username
            })
        }
    }

    _saveUsername(username){
        localStorage.setItem('username',username)
    }

    handleUsernameBlur(e){
        this._saveUsername(e.target.value)
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
                <input placeholder='请输入用户名' value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}/>
            </div>
            <div className='comment-content'>
                <span>评论内容：</span>
                <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} ref={(textarea)=>this.textarea=textarea}/>
            </div>
            <div className='comment-submit'>
                <button onClick={this.handleSubmit.bind(this)}>发布</button>
            </div>
        </div>)
    }
}
export default CommentInput
