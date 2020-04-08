import React from "react";

import { useDebouncedCallback } from "use-debounce";
import Input, { InputProps } from "antd/lib/input";
import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";
import { css } from "emotion";

export interface DebouncedInputProps extends InputProps {
  wait?: number;
  /** hide search icon */
  hideSearch?: boolean;
  searchIconStyle?: React.CSSProperties;
  onDebouncedChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: Partial<DebouncedInputProps> = {
  wait: 300,
};

const DebouncedInput: React.FC<DebouncedInputProps> = (props) => {
  const { defaultValue, value, hideSearch, searchIconStyle, suffix, onChange, onDebouncedChange, wait, style, ...rest } = props;

  const inputStyle: React.CSSProperties = {
    width: props.width || 220,
    ...style,
  };
  const iconStyle: React.CSSProperties = {
    fontSize: "1.6em",
    color: "#d9d9d9",
    lineHeight: "22px",
    ...searchIconStyle,
  };

  // value 不同步
  const [keyword, setKeyword] = React.useState(value || defaultValue);

  const [debouncedChange] = useDebouncedCallback((v: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    onDebouncedChange && onDebouncedChange(v, e);
  }, wait);

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setKeyword(v);
    debouncedChange(v, e);
    onChange && onChange(e);
  };

  const suffixNode = !hideSearch && !suffix ? <JimoIcon style={iconStyle} name={EJimoIcon.search} /> : suffix;

  return <Input style={inputStyle} className={styleInput} defaultValue={defaultValue} value={keyword} onChange={onChangeEvent} suffix={suffixNode} {...rest} />;
};

DebouncedInput.defaultProps = defaultProps;

export default DebouncedInput;

let styleInput = css`
  .ant-input {
    flex-shrink: 1;
  }
`;
