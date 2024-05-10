import './css-compo/Sidebar.css';
import './Category';
import './Price';
import './Colors'
import { Category } from './Category';
import { Price } from './Price';
import { Colors } from './Colors';
function Sidebar(){
    return <>
    <section className='sidebar'>

      <div className='logo-container'>
        <h1>lOGO</h1>
      </div>
      
      <Category/>
      <Price/>
      <Colors/>

    </section>

    </>
}


export default Sidebar;
