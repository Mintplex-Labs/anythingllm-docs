---
title: User Modes in AnythingLLM
displayed_sidebar: features
---

:::info Docker version only!
This feature is only available in the Docker version of AnythingLLM
:::

AnythingLLM supports two types of use cases: **single-user** and **multi-user** mode.

## Single-user Mode

Single-user mode is preferred for those who only themselves or a select group of trusted people will use the instance. If you want to have per-user permissions, you should switch to multi-user mode.

In single-user mode, you (and only you) have complete control over the instance. Anyone with the password to the instance, if set, will be able to use the instance, change any configuration or settings, and view all chats.

### Password Protecting the Instance

When using AnythingLLM in "single user mode," you can password protect the instance by toggling on the "Password Protect Instance" option. This will display an input where you can enter the password to protect the instance.

![Password Protect Instance](/img/password-protect-instance.png)

You can turn off password protection at any time or reset the password to the instance while logged in.

## Multi-user Mode

:::warning warning
Once in multi-user mode, you cannot revert back to single-user mode.
:::

The preferred method of use for AnythingLLM is **multi-user mode**. In this mode, you can set per-user role-based access permissions.

By default, you will create the administrator account, which has the highest level of privilege. As an administrator, you will have access to the entire system, logs, analytics, and more.

### User Roles

- **Admin**: Full access to the entire system
- **Manager**: Can view all workspaces and manage all properties except for settings for LLM, Embedder, and Vector database
- **Default**: Can only send chats to workspaces they are explicitly added to. Cannot see or edit any workspaces or system settings.

### Enabling Multi-user Mode

To enable multi-user mode, toggle on the "Enable multi-user mode" option. This will display an input where you can enter the username and password for the first admin account.

![Enable Multi-user Mode](/img/multi-user-mode.png)

This will be the default admin account that you will use to control the instance. Once set, you will be logged out so you can log in with the new password.

