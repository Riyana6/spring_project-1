import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="Container">
        <div className="row">
          <div className="col s6">
            <form>
              <div class="input-field col s12">
                <i class="material-icons prefix">person</i>
                <input type="text" id="autocomplete-input" class="autocomplete"/>
                <label for="autocomplete-input">Enter name</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">mail</i>
                <input type="email" id="autocomplete-input" class="autocomplete"/>
                <label for="autocomplete-input">Enter email</label>
              </div> 
              <div class="input-field col s12">
                <i class="material-icons prefix">vpn_key</i>
                <input type="password" id="autocomplete-input" class="autocomplete"/>
                <label for="autocomplete-input">Enter password</label>
              </div> 
            </form>
          </div>
          <div className="col s6">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
