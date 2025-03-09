import { useState, useCallback, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useSupabase } from "@/hooks/useSupabase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, X } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

interface User {
  id: string;
  email: string;
  name: string;
}

interface NewChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewChatModal({ isOpen, onClose }: NewChatModalProps) {
  const { supabase, user } = useSupabase();
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useDebounce(searchQuery, 500);

  const searchUsers = useCallback(
    async (query: string) => {
      if (!supabase) return;

      setIsLoading(true);
      try {
        console.log("s");
        const { data: users, error } = await supabase
          .from("users")
          .select("id, email, name")
          .ilike("email", `%${query || ""}%`)
          .limit(5);
        console.log("my users");
        console.log(users);
        if (error) throw error;
        setFilteredUsers(users || []);
      } catch (error) {
        console.error("Error searching users:", error);
        toast.error("Failed to search users");
      } finally {
        setIsLoading(false);
      }
    },
    [supabase]
  );

  const createConversation = async () => {
    if (!supabase || !user) {
      toast.error("Not authenticated");
      return;
    }

    if (selectedUsers.length === 0) {
      toast.error("Please select at least one user");
      return;
    }

    setIsLoading(true);
    try {
      // First, create the conversation
      const isGroup = selectedUsers.length > 1;
      const { data: conversation, error: conversationError } = await supabase
        .from("conversations")
        .insert({
          name: isGroup
            ? `Group Chat (${selectedUsers.length + 1} members)`
            : null,
          is_group: isGroup,
        })
        .select()
        .single();

      if (conversationError) {
        console.error("Error creating conversation:", conversationError);
        throw new Error(conversationError.message);
      }

      if (!conversation) {
        throw new Error("No conversation data returned");
      }

      // Then add all participants including the current user
      const participants = [
        ...selectedUsers.map((selectedUser) => ({
          conversation_id: conversation.id,
          user_id: selectedUser.id,
        })),
        {
          conversation_id: conversation.id,
          user_id: user.id,
        },
      ];

      const { error: participantsError } = await supabase
        .from("conversation_participants")
        .insert(participants);

      if (participantsError) {
        console.error("Error adding participants:", participantsError);
        throw new Error(participantsError.message);
      }

      toast.success("Conversation created successfully");
      onClose();
      setSelectedUsers([]);
      setFilteredUsers([]);
      setSearchQuery("");
    } catch (error) {
      console.error("Error in conversation creation:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create conversation"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Update search results when debounced search query changes
  useEffect(() => {
    searchUsers(debouncedSearch);
  }, [debouncedSearch, searchUsers]);

  const toggleUser = (user: User) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u.id === user.id)
        ? prev.filter((u) => u.id !== user.id)
        : [...prev, user]
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Conversation</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users by email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>

          {/* Selected users */}
          {selectedUsers.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedUsers.map((user) => (
                <Badge
                  key={user.id}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {user.name || user.email}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => toggleUser(user)}
                  />
                </Badge>
              ))}
            </div>
          )}

          {/* Search results */}
          {isLoading ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded bg-gray-100">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredUsers
                .filter((u) => u.id !== user?.id)
                .map((user) => (
                  <div
                    key={user.id}
                    className={`flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer ${
                      selectedUsers.some((u) => u.id === user.id)
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => toggleUser(user)}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${user.email}`}
                        />
                        <AvatarFallback>
                          {user.name?.[0] || user.email[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {user.name || "Anonymous"}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              disabled={selectedUsers.length === 0}
              onClick={createConversation}
            >
              Create {selectedUsers.length > 1 ? "Group" : "Chat"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
