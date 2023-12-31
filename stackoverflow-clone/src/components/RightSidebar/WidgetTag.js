import React from 'react'

function WidgetTag() {
  const tags = ['c', 'css', 'express', 'firebase', 'html', 'java', 'javascript', 'mearn', 'mogngodb', 'mysql', 'next.js', 'node.js', 'php', 'python', 'react.js'];

  return (
    <div className='widget-tags'>
    <h3>Watched Tags</h3>
    <div className='widget-tags-div'>
      {
        tags.map((tag) => (
        <p key={tag}>{tag} </p>
        ))
      }
    </div>
      
    </div>
  )
}

export default WidgetTag
