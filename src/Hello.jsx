import React from 'react'
import $ from 'jquery'

class Hello extends React.Component {
    jqueryFn = () => {
        
        $('.button').click(function(){
            console.log('click me.....')
            $('h1').hide()
        })
    }
    componentDidMount(){
        this.jqueryFn()
    }
    render() {
        return (
            <>
                <h1>Hello, This is hello Component</h1>
                <button className='button'>Click Me</button>
            </>
        )
    }
}

export default Hello