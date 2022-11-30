import React from 'react'
import { Metric } from './Metric'

export const ContentRowMovies = () => {
    const metrics = [
        {title:"Movies",icon:"fa-film",color:"primary",data:"21"},
		{title:"Awards",icon:"fa-award",color:"success",data:"79"},
		{title:"User",icon:"fa-user",color:"warning",data:"49"}
    ]
  return (
    <div className="row">

		{
			metrics.map((metric,index) => (
				<Metric {...metric}/>
			))
		}

				
						
					</div>
  )
}
