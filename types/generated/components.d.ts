import type { Schema, Attribute } from '@strapi/strapi';

export interface ListVideoTopic extends Schema.Component {
  collectionName: 'components_list_video_topics';
  info: {
    displayName: 'videoTopic';
  };
  attributes: {
    description: Attribute.Text;
    videoUrl: Attribute.String;
    name: Attribute.String;
  };
}

export interface TopicContent extends Schema.Component {
  collectionName: 'components_topic_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.RichText;
    output: Attribute.RichText;
  };
}

export interface TopicTopic extends Schema.Component {
  collectionName: 'components_topic_topics';
  info: {
    displayName: 'Topic';
    description: '';
  };
  attributes: {
    topic: Attribute.String;
    Contents: Attribute.Component<'topic.content', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.video-topic': ListVideoTopic;
      'topic.content': TopicContent;
      'topic.topic': TopicTopic;
    }
  }
}
