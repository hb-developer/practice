import MsgItem from "./MsgItem";

const UserIds = ["roy", "jay"];
const getRandomUserId = () => UserIds[Math.round(Math.random())];

const msgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: 50 - 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: `${50 - i} mock text`,
  }));

// {
//   id: 1,
//   userid: getRandomUserId(),
//   timestamp: 1234567890123,
//   text: "1 mock text",
// },

const MsgList = () => (
  <ul className="message">
    {msgs.map((x) => (
      <MsgItem {...x} key={x.id} />
    ))}
  </ul>
);

export default MsgList;
