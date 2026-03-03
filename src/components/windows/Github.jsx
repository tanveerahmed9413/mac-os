import React from 'react'
import MacWindows from './MacWindows'
import githubData from '../../assets/github.json'
import Card from '../Card'

const Github = () => {
  // console.log(githubData);
  
  return (
    <div>
      <MacWindows>
        {
            githubData.map((user,idx)=>{
                return <Card user={user} key={idx} />
                
                
            })
            
            
        }
      </MacWindows>
    </div>
  )
}

export default Github
