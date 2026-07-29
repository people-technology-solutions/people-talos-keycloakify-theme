import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const meta: Meta<KcPageStory> = {
  title: 'login/login-username.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'login-username.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {};

export const WithEmailAsUsername: Story = {
  globals: {
    kcContext: {
      realm: {
        loginWithEmailAllowed: true,
        registrationEmailAsUsername: true,
      },
    },
  },
};

export const WithAuthPassKey: Story = {
  globals: {
    kcContext: {
      url: {
        loginAction: '/mock-login-action',
      },
      enableWebAuthnConditionalUI: true,
    },
  },
};
