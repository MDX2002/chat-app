import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  //   // 🚨 TEMPORARY DEBUG LINES 🚨
  // console.log("--- ID EVALUATION ---");
  // console.log("Online Array Data Type:", typeof onlineUsers[0], "Value:", onlineUsers[0]);
  // console.log("Conversation ID Data Type:", typeof conversation._id, "Value:", conversation._id);
  // console.log("Does array match exactly?:", onlineUsers.includes(conversation._id));
  console.log("Online Users Array:", onlineUsers);
  console.log("Current Convo ID:", String(conversation._id));
  console.log("Is Online?", isOnline);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div> */}

        {/* <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-slate-900" />
          )}
        </div> */}

        {/* CUSTOM TAILWIND V4 AVATAR BADGE FIX */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={conversation.profilePic}
              alt="user avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-slate-900 animate-pulse" />
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
