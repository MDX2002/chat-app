import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversion: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
