import React from 'react';

export default class modalPlaceholder extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: '',
            author_id: this.props.state.session.id
        }
    }

    render(){
        console.log('info')
        console.log(this.props)
        console.log(this.state)
        return(
            <div>hello</div>
        )
    }
}