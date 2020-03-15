import React, { FC, useState, useEffect, ReactNode } from "react";
import Emitter from "eventemitter3";
import generate from "shortid";
import { Message, MessageType } from "./types";

import NotificationsContainer from "./container";

const emitter = new Emitter();

const defaultTime = 5000;

const Notifications: FC = () => {
  const [messages, setMessages] = useState<Array<Message>>([]);

  const removeValue = (id: string) => {
    setMessages(st => {
      return [...st.filter(w => w.id !== id)];
    });
  };

  const pushValue = ({ content, type, time = defaultTime }) => {
    const id = generate();

    setTimeout(() => {
      removeValue(id);
    }, time);

    setMessages(st => [...st, { content, id, type }]);
  };

  useEffect(() => {
    emitter.on<string>("push", pushValue);

    return () => {
      emitter.off<string>("push", pushValue);
    };
  }, []);

  return <NotificationsContainer handleClick={removeValue} messages={messages} />;
};

function pushNotification(content: string | ReactNode, type: MessageType, time = defaultTime): void {
  emitter.emit("push", { content, type, time });
}

export default Notifications;
export { pushNotification };
