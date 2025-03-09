1. Overview
The chat application is a real-time messaging platform built using Next.js 15, Supabase, shadcn/ui, Tailwind CSS, and TypeScript. It supports one-on-one (1-1) and group conversations with real-time messaging capabilities.

2. Core Features
2.1 Authentication (Completed)
Users can sign up and log in using Supabase authentication.
2.2 Conversations
Users can create and add conversations (both 1-1 and group chats).
Users can view their conversations in a sidebar.
Clicking a conversation opens the chat window.
2.3 Real-Time Messaging
Users can type and send messages in a conversation.
Messages are stored in the database and updated in real-time using Supabase and WebSockets.
The recipient sees new messages instantly without refreshing.
3. User Interface (UI) Requirements
The UI should closely match the provided screenshot.
Peripheral buttons (like settings, refresh, help) do not require functionality but should be visible.
4. Optional Features
Chat Search & Filters: Users can search for specific messages or filter conversations.
Chat Labels: Users can add labels (e.g., "Work," "Family") to conversations.
5. Bonus Features (Extra Points)
IndexedDB Support: Store messages and chat data locally in the browser.
Full Implementation of Optional Features.
Semantic HTML Tags: Improve accessibility and SEO by using meaningful HTML elements.
6. Tech Stack
Framework: Next.js 15
Backend: Supabase
UI Components: shadcn/ui
Styling: Tailwind CSS
Real-time Messaging: WebSockets & Supabase Realtime
Date Handling: moment.js
Local Storage (Optional): IndexedDB
