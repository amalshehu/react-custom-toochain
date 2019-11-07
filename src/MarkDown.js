import React, {useState} from 'react'
import showdown from 'showdown'

function MarkDown (props) {
    let preview = {
        maxWidth: '250px',
        minHeight:'60px',
        boxShadow: '6px 6px 10px grey',
        textAlign: 'center',
        margin: '0 auto'
    }

    const {props:array} = props
    const lastIndex = array.length-1 
    let html
    if(lastIndex !== -1) {
        var pre = document.getElementById('#preview')
         const converter = new showdown.Converter()
        const text = array[lastIndex].ques
         html = converter.makeHtml(text)
    }
    return (
        <div style={preview} id='preview'>
            <h1>preview</h1>
            {html}
        </div>
    )
}
export default MarkDown