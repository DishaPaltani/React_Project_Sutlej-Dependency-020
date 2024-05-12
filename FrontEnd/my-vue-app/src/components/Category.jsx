import './css-compo/Category.css';
import Input  from './inner-compo/Input';

function Category ({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test'/>
          <span className='checkmark'></span>All

        </label>
        
        <Input
         handleChange={handleChange}
         value="Red Wine"
         title="Red Wine"
         name="test"

        />
        <Input
         handleChange={handleChange}
         value="White Wine"
         title="White Wine"
         name="test"
         
        />
        

      </div>
    </div>

  );
}

export  {Category};
