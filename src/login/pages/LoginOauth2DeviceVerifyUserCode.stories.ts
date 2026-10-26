import type { Meta, StoryObj } from '@storybook/angular';
import { decorators, KcPageStory } from '../KcPageStory';

const meta: Meta<KcPageStory> = {
  title: 'login/login-oauth2-device-verify-user-code.ftl',
  component: KcPageStory,
  decorators: decorators,
  globals: {
    pageId: 'login-oauth2-device-verify-user-code.ftl',
  },
};

export default meta;

type Story = StoryObj<KcPageStory>;

export const Default: Story = {};

export const WithErrorMessage: Story = {
  globals: {
    kcContext: {
      url: {
        oauth2DeviceVerificationAction: '/mock-oauth2-device-verification',
      },
      message: {
        summary: 'The user code you entered is invalid. Please try again.',
        type: 'error',
      },
    },
  },
};

export const WithEmptyInputField: Story = {
  globals: {
    kcContext: {
      url: {
        oauth2DeviceVerificationAction: '/mock-oauth2-device-verification',
      },
      message: {
        summary: 'User code cannot be empty. Please enter a valid code.',
        type: 'error',
      },
    },
  },
};
