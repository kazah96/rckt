import React from "react";
import cn from 'classnames';

import style from "./style.module.css";

interface Props {
  className?: string; 
}

const Divider: React.FC<Props>  = (props) => {
  return <div className={cn(props.className, style.divider)}></div>
}


export default Divider