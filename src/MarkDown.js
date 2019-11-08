import React, {useState} from 'react'
import 'bulma/css/bulma.css'
import showdown from 'showdown'

function MarkDown (props) {
    let preview = {
        maxWidth: '250px',
        minHeight:'60px',
        boxShadow: '6px 6px 10px grey',
        textAlign: 'center',
        margin: '0 auto'
    }
    const {props:md} = props
    let html
    if(md !== '') {
         const converter = new showdown.Converter()
         html = converter.makeHtml(md)
    }
    return (
        <div style={preview} >
            <h1 class='title is-6 has-background-grey-lighter has-text-grey'>preview</h1>
            {html}
        </div>
    )
}
export default MarkDown