import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const meta: Meta<KcPageStory> = {
  title: 'login/login-verify-email.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'login-verify-email.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'You need to verify your email to activate your account.',
        type: 'warning',
      },
      user: {
        email: 'john.doe@gmail.com',
      },
    },
  },
};

export const WithSuccessMessage: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'Your email has been successfully verified.',
        type: 'success',
      },
      user: {
        email: 'john.doe@gmail.com',
      },
      url: {
        loginAction: '/mock-login-action',
      },
    },
  },
};

export const WithErrorMessage: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'There was an error verifying your email. Please try again.',
        type: 'error',
      },
      user: {
        email: 'john.doe@gmail.com',
      },
      url: {
        loginAction: '/mock-login-action',
      },
    },
  },
};

export const WithInfoMessage: Story = {
  globals: {
    kcContext: {
      message: {
        summary: 'Please verify your email to continue using our services.',
        type: 'info',
      },
      user: {
        email: 'john.doe@gmail.com',
      },
      url: {
        loginAction: '/mock-login-action',
      },
    },
  },
};
