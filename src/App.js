import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import ThemeSwitcher from "./components/ThemeSwitcher";
import ToDoList from "./components/ToDoList";
import * as themes from "./themes";
import ThemeContext from "./themes/context";

class App extends Component {
  state = {
    theme: themes.dark,
  };
  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark,
    });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {(theme) => (
              <ThemeProvider theme={theme}>
                <ToDoList />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
