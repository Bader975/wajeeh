// import { useRef, useEffect } from "react";
// import { useRecordVoice } from "@/hooks/useRecordVoice";
// import { FaMicrophone } from "react-icons/fa";
// import Chat from "./Chat";


// const Microphone = () => {
//   const { startRecording, stopRecording, text } = useRecordVoice();
//   const chatRef = useRef<any>(null);

//   useEffect(() => {
//     if (text) {
//       chatRef.current.handleSend();
//     }
//   }, [text]);

//   return (
//     <div className="flex flex-col justify-center items-center text-black">
//       <button
//         onMouseDown={startRecording}
//         onMouseUp={stopRecording}
//         onTouchStart={startRecording}
//         onTouchEnd={stopRecording}
//         className="border-none bg-transparent w-10"
//       >
//         <FaMicrophone />
//       </button>
//       <p>{text}</p>
//       <Chat ref={chatRef} speechText={text} />
//     </div>
//   );
// };

// export { Microphone };
