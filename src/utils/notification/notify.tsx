import { notification } from "antd";

const notify = (message: Array<any>) => {
  const body = {
    message: `${message[1]}`,
    description: `${message[2]}`
  };
  switch (message[0]) {
    case 'open':
      notification.open(body);
      break;
    case 'warning':
      notification.warning(body);
      break;
  }
}

export default notify;