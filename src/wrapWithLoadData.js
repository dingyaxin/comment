import React,{Component} from 'react'

export default (WrappedComponent,name)=>{
    class LocalStorageActions extends Component{
        constructor(){
            super()
            this.state={
                data:null
            }
        }

        UNSAFE_componentWillMount(){
            this._loadData()
        }

        _loadData(){
            let data=localStorage.getItem(name)
            if(data){
                try{
                    this.setState({
                        data:JSON.parse(data)})
                }catch(e){
                    this.setState({
                        data:data
                })
            }
            }
          }

          savedata(data){
              try{
                localStorage.setItem(name,JSON.stringify(data))
              }catch(e){
                localStorage.setItem(name,data)
              }
          }

          render(){
              return(<WrappedComponent data={this.state.data} onSaveData={this.savedata.bind(this)} {...this.props}/>)
          }
    } 
    return LocalStorageActions;
}