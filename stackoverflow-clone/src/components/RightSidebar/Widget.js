import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg';
import pen from '../../assets/pen-solid.svg';
import Blacklogo from '../../assets/blacklogo.svg'

function Widget() {
  return (
    <div className='widget'>
    <h4>The Over Flow blog</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={pen} alt='pen' width='18'/>
        <p>Observability is a key to the  of software(and your DevOps career)</p>
        </div>

        <div className='right-sidebar-div-2'>
        <img src={pen} alt='pen' width='18'/>
        <p>Observability is a key to the  of software(and your DevOps career)</p>
        </div>

        
      </div>
      <h4>Featured on Metatag</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={comment} alt='pen' width='18'/>
        <p>Review queue workflow- final release..</p>
        </div>

        <div className='right-sidebar-div-2'>
        <img src={comment} alt='pen' width='18'/>
        <p>Please welcome Valaued Associates : #958 <br/>
        -V2Blast #958 - SupercorG</p>
        </div>

         <div className='right-sidebar-div-2'>
        <img src={Blacklogo} alt='pen' width='18'/>
        <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow.</p>
        </div>
        
      </div>

      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <p>38</p>
        <p>Why was the spam flag declined, yet the question marked as spam?</p>
        </div>

        <div className='right-sidebar-div-2'>
        <p>20</p>
        <p>What is the best course of action when the user has high enough rep to..</p>
        </div>

        <div className='right-sidebar-div-2'>
        <p>14</p>
        <p>is a link to the "How to ask help page a uesful comment?</p>
        </div>
    </div>
    </div>
  )
}

export default Widget
