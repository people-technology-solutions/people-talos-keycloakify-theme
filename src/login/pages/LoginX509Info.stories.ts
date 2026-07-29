import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const meta: Meta<KcPageStory> = {
  title: 'login/login-x509-info.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'login-x509-info.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {};

export const WithoutUserEnabled: Story = {
  globals: {
    kcContext: {
      url: {
        loginAction: '/mock-login-action',
      },
      x509: {
        formData: {
          subjectDN: 'CN=John Doe, OU=Example Org, O=Example Inc, C=US',
          username: 'johndoe',
          isUserEnabled: false, // User not enabled for login
        },
      },
    },
  },
};
