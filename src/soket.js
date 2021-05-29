import io from "socket.io-client";

const socket = io("http://10.131.56.224:4000");

export default socket;