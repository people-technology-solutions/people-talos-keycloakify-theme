import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const meta: Meta<KcPageStory> = {
  title: 'login/info.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'info.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {
  globals: {
    kcContext: {
      messageHeader: 'Message header',
      message: {
        summary: 'Server info message',
      },
    },
  },
};

export const WithLinkBack: Story = {
  globals: {
    kcContext: {
      messageHeader: 'Message header',
      message: {
        summary: 'Server message',
      },
      actionUri: undefined,
    },
  },
};

export const WithRequiredActions: Story = {
  globals: {
    kcContext: {
      messageHeader: 'Message header',
      message: {
        summary: 'Required actions:',
      },
      requiredActions: ['CONFIGURE_TOTP', 'UPDATE_PROFILE', 'VERIFY_EMAIL', 'CUSTOM_ACTION'],
      'x-keycloakify': {
        messages: {
          'requiredAction.CUSTOM_ACTION': 'Custom action',
        },
      },
    },
  },
};
