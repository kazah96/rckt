import React, { FC } from "react";
import cn from "classnames";
import { Message } from "./types";

import style from "./style.module.css";
import MessageComponent from "./message";

interface Props {
  handleClick: (id: string) => void;
  messages: Array<Message>;
}

const NotificationsContainer: FC<Props> = ({ messages, handleClick }) => {
  return (
    <div className={cn(style.container)}>
      {messages.map(msg => (
        <MessageComponent onClick={handleClick} key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default NotificationsContainer;
