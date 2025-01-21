export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  attachments: Attachment[];
  createdAt: Date;
  readAt?: Date;
  type: 'direct' | 'announcement';
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'document' | 'other';
  size: number;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: Date;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  attachments: Attachment[];
  createdAt: Date;
  author: string;
  priority: 'low' | 'medium' | 'high';
  recipients: {
    type: 'all' | 'property' | 'unit';
    id?: string;
  };
  readBy: string[];
}