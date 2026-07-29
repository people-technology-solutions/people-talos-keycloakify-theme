import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const mockKcContext = {
  url: {
    loginAction: '/login-action',
  },
  idpAlias: 'mockIdpAlias',
  brokerContext: {
    username: 'mockUser',
  },
  realm: {
    displayName: 'MockRealm',
  },
};

const meta: Meta<KcPageStory> = {
  title: 'login/login-idp-link-email.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'login-idp-link-email.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {
  globals: {
    kcContext: mockKcContext,
  },
};

export const WithIdpAlias: Story = {
  globals: {
    kcContext: {
      ...mockKcContext,
      idpAlias: 'Google',
      brokerContext: {
        username: 'john.doe',
      },
      realm: {
        displayName: 'MyRealm',
      },
    },
  },
};

export const WithCustomRealmDisplayName: Story = {
  globals: {
    kcContext: {
      ...mockKcContext,
      idpAlias: 'Facebook',
      brokerContext: {
        username: 'jane.doe',
      },
      realm: {
        displayName: 'CUSTOM REALM DISPLAY NAME',
      },
    },
  },
};

export const WithFormSubmissionError: Story = {
  globals: {
    kcContext: {
      ...mockKcContext,
      url: {
        loginAction: '/error',
      },
      message: {
        type: 'error',
        summary: 'An error occurred during form submission.',
      },
    },
  },
};
