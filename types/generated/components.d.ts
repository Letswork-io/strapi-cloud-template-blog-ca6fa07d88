import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface WorkspaceComponentWorkspaceSectionComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_workspace_section_component';
  info: {
    description: 'Whole workspace item';
    displayName: 'Workspace Item';
  };
  attributes: {
    bg_color: Schema.Attribute.String;
    cards: Schema.Attribute.Component<
      'workspace.workspace-item-component',
      true
    >;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorkspaceFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_workspace_feature_items';
  info: {
    description: 'Single feature text';
    displayName: 'Feature Item';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorkspaceWorkspaceItemComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_workspace_component';
  info: {
    description: 'Whole workspace item';
    displayName: 'Workspace Item';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'workspace.feature-item', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'workspace-component.workspace-section-component': WorkspaceComponentWorkspaceSectionComponent;
      'workspace.feature-item': WorkspaceFeatureItem;
      'workspace.workspace-item-component': WorkspaceWorkspaceItemComponent;
    }
  }
}
