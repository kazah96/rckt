import React, { FC } from "react";
import cn from "classnames";

import style from "./style.module.css";
import { Message, MessageType } from "./types";

interface Props {
  message: Message;
  onClick: (id: string) => void; 
}

const styleMap = {
  [MessageType.Info]: style.info,
  [MessageType.Error]: style.error,
  [MessageType.Warning]: style.warning
};

const Notification: FC<Props> = ({ message, onClick }) => {
  return (
    <div onClick={() => onClick(message.id)} className={cn(style.message, styleMap[message.type])}>
      <div className={style.content}>
        {message.content}
      </div>
    </div>
  );
};

export default Notification;
