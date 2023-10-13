import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagList from './TagList'
import  './Tags.css'
const Tags = () => {

    const tagsList = [
{
    id: 1,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 2,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 3,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 4,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 5,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 6,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 7,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 8,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 9,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
{
    id: 10,
    tagName: 'javascript',
    tagDesc: "for questions regarding programming in ECMAScript (JAvaScript/JS) and it's various implementations.",
},
]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
    <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a Keyword or lable that categorize your question with other, similar questions</p>
        <p className='tags-p'>USing the right tags makes it easier for others to find and answer your question.</p>
       <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                    <TagList tag={tag} key={tagsList.id}/>
                ))
            }
       </div>
    </div>
      
    </div>
  )
}

export default Tags
