
export type UserStatus = 'online' | 'offline'

export interface Conversation {
  id: string
  name: string | null
  is_group: boolean
  created_at: string
  updated_at: string
  last_message: string | null
  last_message_time: string | null
  tags: string[]
}

export interface ConversationParticipant {
  conversation_id: string
  user_id: string
  joined_at: string
  unread_count: number
}

export interface Message {
  id: string
  conversation_id: string
  sender_id: string
  message: string
  created_at: string
  is_read: boolean
  is_deleted: boolean
}

export interface DatabaseDefinitions {
  public: {
    Tables: {
      conversations: {
        Row: Conversation
        Insert: Omit<Conversation, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Conversation, 'id'>>
      }
      conversation_participants: {
        Row: ConversationParticipant
        Insert: Omit<ConversationParticipant, 'joined_at'>
        Update: Partial<Omit<ConversationParticipant, 'conversation_id' | 'user_id'>>
      }
      messages: {
        Row: Message
        Insert: Omit<Message, 'id' | 'created_at'>
        Update: Partial<Omit<Message, 'id'>>
      }
    }
  }
}

export type DbClient = DatabaseDefinitions
