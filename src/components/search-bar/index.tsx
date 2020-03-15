import React from "react";
import cn from 'classnames'

//@ts-ignore
import throttle from "lodash/throttle";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";
const search_throttle_interval = 500;

interface Props {
  onSearch: (query: string) => void;
  className?: string;
}

const placeholder = "Поиск";

class SearchBar extends React.Component<Props> {
  state = {
    value: "",
    placeholder
  };

  static contextType = PhotoContext;

  componentDidMount() {
    document.addEventListener("keypress", this.handleUserKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleUserKeyPress);
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  onFocus = () => {
    this.setState({ placeholder: "" });
  };

  onBlur = () => {
    this.setState({ placeholder });
  };

  handleUserKeyPress = throttle((e: KeyboardEvent) => {
    const { addQuery } = this.context;
    const { value } = this.state;
    const { onSearch } = this.props;

    if (e.key === "Enter" && value !== "") {
      onSearch(value);
      addQuery(value);

      this.setState({ value: "" });
    }
  }, search_throttle_interval);

  render() {
    const { value } = this.state;

    return (
      <input
        className={cn(style.input, 'heading1', this.props.className)}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        placeholder={this.state.placeholder}
        value={value}
      />
    );
  }
}

export default SearchBar;
