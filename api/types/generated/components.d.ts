import type { Schema, Struct } from '@strapi/strapi';

export interface ConfigConfig extends Struct.ComponentSchema {
  collectionName: 'components_config_configs';
  info: {
    displayName: 'config';
    icon: 'crown';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    socialMedia: Schema.Attribute.Enumeration<
      ['instagram', 'facebook', 'tiktok']
    > &
      Schema.Attribute.Required;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'calendar';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'layout.link', true>;
    callToAction: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageInfoPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_page_info_page_infos';
  info: {
    displayName: 'pageInfo';
    icon: 'pencil';
  };
  attributes: {};
}

export interface SeoSeoInformation extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'config.config': ConfigConfig;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'page-info.page-info': PageInfoPageInfo;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
