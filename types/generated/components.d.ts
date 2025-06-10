import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_sections';
  info: {
    description: '';
    displayName: 'Banner Section';
  };
  attributes: {
    alignItems: Schema.Attribute.Enumeration<['left', 'right']>;
    anchorLink: Schema.Attribute.String;
    anchorText: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonType: Schema.Attribute.Enumeration<['ACTION', 'LINK']>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

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

export interface WorkspaceComponentCreditsWorkspaceItem
  extends Struct.ComponentSchema {
  collectionName: 'components_workspace_component_credits_workspace_items';
  info: {
    description: '';
    displayName: 'Credits Workspace';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonType: Schema.Attribute.Enumeration<['ACTION', 'LINK']>;
    content: Schema.Attribute.Component<'workspace.credit-card', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface WorkspaceComponentFaQs extends Struct.ComponentSchema {
  collectionName: 'components_workspace_component_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    Item: Schema.Attribute.Component<'workspace.faq-item', true>;
  };
}

export interface WorkspaceComponentGlobalSpacesCarousel
  extends Struct.ComponentSchema {
  collectionName: 'components_workspace_component_global_spaces_carousels';
  info: {
    description: '';
    displayName: 'Global Spaces Carousel';
  };
  attributes: {
    buttonAction: Schema.Attribute.Enumeration<['ACTION', 'LINK']>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    content: Schema.Attribute.Component<'workspace.spaces-card-item', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface WorkspaceComponentMemberListing
  extends Struct.ComponentSchema {
  collectionName: 'components_workspace_component_member_listings';
  info: {
    description: '';
    displayName: 'Member Listing';
  };
  attributes: {
    content: Schema.Attribute.Component<'workspace.member-card-item', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface WorkspaceComponentWorkspaceSectionComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_workspace_section_component';
  info: {
    description: 'Whole workspace item';
    displayName: 'Workspace';
  };
  attributes: {
    bg_color: Schema.Attribute.String;
    content: Schema.Attribute.Component<
      'workspace.workspace-item-component',
      true
    >;
    ctaAction: Schema.Attribute.Enumeration<['LINK', 'ACTION']>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorkspaceCreditCard extends Struct.ComponentSchema {
  collectionName: 'components_workspace_credit_cards';
  info: {
    description: '';
    displayName: 'Credit Card Item';
  };
  attributes: {
    customerName: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listCount: Schema.Attribute.Integer;
    planKey: Schema.Attribute.Enumeration<
      ['CreditPlan25', 'CreditPlan50', 'CreditPlan100']
    >;
    title: Schema.Attribute.String;
  };
}

export interface WorkspaceFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_workspace_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.Blocks;
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

export interface WorkspaceMemberCardItem extends Struct.ComponentSchema {
  collectionName: 'components_workspace_member_card_items';
  info: {
    displayName: 'Member Card Item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WorkspaceSpacesCardItem extends Struct.ComponentSchema {
  collectionName: 'components_workspace_spaces_card_items';
  info: {
    displayName: 'Spaces Card Item';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonBgColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#ffffff'>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonType: Schema.Attribute.Enumeration<['SINGLE', 'SEPARATE']>;
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
      'shared.banner-section': SharedBannerSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'workspace-component.credits-workspace-item': WorkspaceComponentCreditsWorkspaceItem;
      'workspace-component.fa-qs': WorkspaceComponentFaQs;
      'workspace-component.global-spaces-carousel': WorkspaceComponentGlobalSpacesCarousel;
      'workspace-component.member-listing': WorkspaceComponentMemberListing;
      'workspace-component.workspace-section-component': WorkspaceComponentWorkspaceSectionComponent;
      'workspace.credit-card': WorkspaceCreditCard;
      'workspace.faq-item': WorkspaceFaqItem;
      'workspace.feature-item': WorkspaceFeatureItem;
      'workspace.member-card-item': WorkspaceMemberCardItem;
      'workspace.spaces-card-item': WorkspaceSpacesCardItem;
      'workspace.workspace-item-component': WorkspaceWorkspaceItemComponent;
    }
  }
}
