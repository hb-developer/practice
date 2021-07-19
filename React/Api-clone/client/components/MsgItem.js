const MsgItem = ({ userId, timestamp, text }) => (
  <li className="message__item">
    <h3>
      {userId}
      {""}
      <sub>
        {new Date(timestamp).toLocaleString("ko-KR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          mintue: "2-digit",
          hour12: true,
        })}
      </sub>
    </h3>
    {text}
  </li>
);

export default MsgItem;
