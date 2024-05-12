import  './css-compo/Price.css';
import Input from './inner-compo/Input';

// const Price = ({handleChange}) => {
//   return (
//     <>

//      <div className='ml'>
//       <h2 className="sidebar-title price-title">Price</h2>

//       <label className='sidebar-label-container'>
//           <input onChange={handleChange} type="radio" value="" name='test2'/>
//           <span className='checkmark'></span>All

//         </label>

//       <Input
//         handleChange={handleChange}
//         value={100}
//         title="$0 - $100"
//         name="test2"
//       />
//       <Input
//         handleChange={handleChange}
//         value={250}
//         title="$100 - $250"
//         name="test2"
//       />
//       <Input
//         handleChange={handleChange}
//         value={500}
//         title="$250 - $500"
//         name="test2"
//       />
//       <Input
//         handleChange={handleChange}
//         value={600}
//         title="Over $500"
//         name="test2"
//       />

//     </div>
    
//     </>
//   );
// };

// export {Price};

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={250}
          title="$100 - $250"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={500}
          title="$250 - $500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={600}
          title="Over $500"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;