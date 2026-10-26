import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const mockKcContext = {
  url: {
    loginAction: '/login-action',
  },
  idpAlias: 'mockIdpAlias',
};

const meta: Meta<KcPageStory> = {
  title: 'login/login-idp-link-confirm.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'login-idp-link-confirm.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {
  globals: {
    kcContext: mockKcContext,
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
