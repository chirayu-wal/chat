-- Drop existing policies
DROP POLICY IF EXISTS "Users can view conversations they are part of" ON conversations;
DROP POLICY IF EXISTS "Users can create conversations" ON conversations;
DROP POLICY IF EXISTS "Users can view conversation participants" ON conversation_participants;
DROP POLICY IF EXISTS "Users can add participants" ON conversation_participants;

-- Create new policies for conversations
CREATE POLICY "Enable all operations for authenticated users" ON conversations
    FOR ALL
    USING (auth.uid() IS NOT NULL);

-- Create new policies for conversation_participants
CREATE POLICY "Enable all operations for authenticated users" ON conversation_participants
    FOR ALL
    USING (auth.uid() IS NOT NULL);