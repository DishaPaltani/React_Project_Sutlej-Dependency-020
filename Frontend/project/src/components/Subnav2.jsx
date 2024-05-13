// import React from 'react';
// import { FaShoppingCart, FaUser } from 'react-icons/fa'; 

// import logo from './logo/logo.png';

// const Subnav = () => {
//   return (
//     <div style={styles.container}>
     
//       <div style={styles.searchContainer}>
//         <input
//           type="text"
//           placeholder="Search"
//           style={styles.searchInput}
//         />
//       </div>

  
//       <div style={styles.logoContainer}>
//         <img src={logo} alt="Your Logo" style={styles.logo} />
//       </div>

      
//       <div style={styles.actionsContainer}>
        
//         <FaShoppingCart style={{ ...styles.icon, fontSize: '24px' }} />
        
//         <FaUser style={{ ...styles.icon, fontSize: '24px', marginLeft: '10px' }} />
        
//       </div>
//     </div>
//   );
// };

// export default Subnav;

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '10px',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fffaf4 ',
//   },
//   searchContainer: {
//     flex: 2,
//     marginRight: '10px',
//   },
//   searchInput: {
//     width: '50%',
//     padding: '8px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//     backgroundColor: '#fff',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//     outline: 'none',
//   },
//   logoContainer: {
//     flex: 1,
//     textAlign: 'center',
//     backgroundColor: '#fffaf4 ',
//     padding: '8px',
//   },
//   logo: {
//     height: '100%', 
//     width: '100%', 
//   },
//   actionsContainer: {
//     flex: 2,
//     display: 'flex',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   icon: {
//     cursor: 'pointer',
//   },
// };
//      ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// import React from 'react';
// import { FaShoppingCart, FaUser } from 'react-icons/fa'; 
// import { Link } from 'react-router-dom'; // Import Link component
// import logo from './logo/logo.png';

// const Subnav = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.searchContainer}>
//         <input
//           type="text"
//           placeholder="Search"
//           style={styles.searchInput}
//         />
//       </div>

//       <div style={styles.logoContainer}>
//         <img src={logo} alt="Your Logo" style={styles.logo} />
//       </div>

//       <div style={styles.actionsContainer}>
//         <FaShoppingCart style={{ ...styles.icon, fontSize: '24px' }} />
       
//         <Link to="/login">
//           <FaUser style={{ ...styles.icon, fontSize: '24px', marginLeft: '10px' }} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Subnav;

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '10px',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fffaf4 ',
//   },
//   searchContainer: {
//     flex: 2,
//     marginRight: '10px',
//   },
//   searchInput: {
//     width: '50%',
//     padding: '8px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//     backgroundColor: '#fff',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//     outline: 'none',
//   },
//   logoContainer: {
//     flex: 1,
//     textAlign: 'center',
//     backgroundColor: '#fffaf4 ',
//     padding: '8px',
//   },
//   logo: {
//     height: '100%', 
//     width: '100%', 
//   },
//   actionsContainer: {
//     flex: 2,
//     display: 'flex',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   icon: {
//     cursor: 'pointer',
//   },
// };

// -----------------------------
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // Import Link component
import logo from './logo/logo.png';

const Subnav = () => {
  return (
    <div style={styles.container}>
      {/* <div style={styles.searchContainer}> */}
        {/* <input
          type="text"
          placeholder="Search"
          style={styles.searchInput}
        /> */}
      {/* </div> */}

      <div style={styles.logoContainer}>
        {/* Wrap the image inside a Link component */}
        <Link to="/Call">
          <img src={logo} alt="Your Logo" style={styles.logo} />
        </Link>
      </div>
      <Link to="/cart">
      <div style={styles.actionsContainer}>
        <FaShoppingCart style={{ ...styles.icon, fontSize: '24px' }} />
       </div >
       </Link>
       <div>
        <Link to="/Home">
          <FaUser style={{ ...styles.icon, fontSize: '24px', marginLeft: '10px' }} />
        </Link>
      </div>
    </div>
  );
};

export default Subnav;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fffaf4 ',
  },
  searchContainer: {
    flex: 2,
    marginRight: '10px',
  },
  searchInput: {
    width: '50%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    outline: 'none',
  },
  logoContainer: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fffaf4 ',
    padding: '8px',
  },
  logo: {
    height: '10%', 
    width: '20%', 
  },
  actionsContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
  },
};
