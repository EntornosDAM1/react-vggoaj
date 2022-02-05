import React from 'react';


class Header extends React.Component{

  constructor(){
      super(props);
        this.state = {
            clicked: false
        };
      }
      render() {
        return (
          <nav className="header-navbar">
            <div className="navbar-logo">
              <img
                className="logo-image"
                src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
              />
              <i className="fas fa-user-graduate"/>
            </div>
            <div className="menu-icon" onClick={this.changeClicked.bind(this)}>
              a
              <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul
              className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}
            >
              {MenuItems.map((item) => {
                
                return (
                  <li key={item.id}>
                    <Link to={item.path} className="navbar-link" onClick={this.changeClicked.bind(this)}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        );
      }
}
export default Header;