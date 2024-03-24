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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.video-topic': ListVideoTopic;
    }
  }
}
