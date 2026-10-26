import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const meta: Meta<KcPageStory> = {
  title: 'login/logout-confirm.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'logout-confirm.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {};

export const WithCustomLogoutMessage: Story = {
  globals: {
    kcContext: {
      url: {
        logoutConfirmAction: '/mock-logout-action',
      },
      client: {
        baseUrl: '/mock-client-url',
      },
      logoutConfirm: {
        code: 'mock-session-code',
        skipLink: false,
      },
      message: {
        summary: 'Are you sure you want to log out from all sessions?',
        type: 'warning',
      },
    },
  },
};
