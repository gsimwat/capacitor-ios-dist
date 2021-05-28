import { WebPlugin } from './index';
import { LocalNotificationsPlugin, LocalNotificationEnabledResult, LocalNotificationPendingList, LocalNotificationActionType, LocalNotification, LocalNotificationScheduleResult, NotificationPermissionResponse, NotificationChannel, NotificationChannelList } from '../core-plugin-definitions';
import { PermissionsRequestResult } from '../definitions';
export declare class LocalNotificationsPluginWeb extends WebPlugin implements LocalNotificationsPlugin {
    private pending;
    constructor();
    createChannel(channel: NotificationChannel): Promise<void>;
    deleteChannel(channel: NotificationChannel): Promise<void>;
    listChannels(): Promise<NotificationChannelList>;
    sendPending(): void;
    sendNotification(localNotification: LocalNotification): Notification;
    buildNotification(localNotification: LocalNotification): Notification;
    schedule(options: {
        notifications: LocalNotification[];
    }): Promise<LocalNotificationScheduleResult>;
    getPending(): Promise<LocalNotificationPendingList>;
    registerActionTypes(_options: {
        types: LocalNotificationActionType[];
    }): Promise<void>;
    cancel(pending: LocalNotificationPendingList): Promise<void>;
    areEnabled(): Promise<LocalNotificationEnabledResult>;
    requestPermission(): Promise<NotificationPermissionResponse>;
    requestPermissions(): Promise<PermissionsRequestResult>;
}
declare const LocalNotifications: LocalNotificationsPluginWeb;
export { LocalNotifications };