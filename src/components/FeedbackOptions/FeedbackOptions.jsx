import { Button } from './Button';
export const FeedbackOptions =({options, onLeaveFeedback})=>{
   
       return <div>
       {options.map(option =>( 
               <Button
                       type='button'
                       onLeaveFeedback={() => onLeaveFeedback(option)}
                       key={option}
                       text={option}/>))}
        </div>
           
    }
