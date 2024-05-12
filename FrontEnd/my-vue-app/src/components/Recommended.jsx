import './css-compo/Recommended.css';
import { Button } from './inner-compo/Button';

function Recommended({handleClick}){
  return(
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products"/>
          <Button onClickHandler={handleClick} value="Red Wine" title="Red Wine"/>
          <Button onClickHandler={handleClick} value="Indian Wine" title="Indian Wine"/>
          <Button onClickHandler={handleClick} value="White Wine" title="White Wine"/>
          <Button onClickHandler={handleClick} value="Franch Wine" title="Franch Wine"/>
        </div>
      </div>
    
    </>

  )
}

export {Recommended}
