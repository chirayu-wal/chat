### ** 1️ Set Up Database Schema in Supabase**  
- Create **`conversations` table** (stores chat details).  
- Create **`messages` table** (stores messages linked to a conversation).  
- Ensure **real-time updates** using Supabase **Realtime API**.  

### ** 2️ Implement "Create Conversation" Feature **  
Add a "New Chat" button (if not already present).
Show a modal with:
Search box to find users.
Select multiple users (for group chat).
Create button to store the conversation in Supabase.
Once created, update the sidebar in real-time with the new conversation.


### **3  Implement Conversations List**  
- Fetch user’s **conversations from Supabase**.  
- Display latest messages for each conversation in the sidebar.  
- Clicking a chat should **load the conversation in the chat window**.  

### **4 Implement Real-Time Messaging**  
- **Typing and sending a message** should:  
  - **Store it in Supabase**.  
  - **Update in real-time** for all participants using **WebSockets**.  

### **5 Testing & Debugging**  
- Open the app in **two browsers** and ensure messages appear in real-time.  
- Fix any **sync issues** with messages or conversation updates.  

notes :-
at conversation level we need
grp/user image ,name ,members ,last_message ,last_message_time,tags
and user can see count of his unread messages

in message
message ,message_time ,is_read,time ,is_deleted

