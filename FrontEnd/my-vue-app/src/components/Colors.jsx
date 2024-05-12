import './css-compo/Colors.css';
import Input from './inner-compo/Input';

const Colors = ({handleChange}) => {
  return (
    <>
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test2'/>
          <span className='checkmark all'></span>All

        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <label className="sidebar-label-container">
          <input 
          type='radio' 
          onChange={handleChange} 
          value="white" 
          name='test1'/>
          <span className="checkmark" 
          style={{
            background:"white", 
            border:"2px solid black", 
            color:"black"
            }}
            ></span>White

        </label>
    </div>
    
    </>
  )
}

export {Colors};
