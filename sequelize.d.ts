import 'sequelize';

declare module 'sequelize' {
    interface CreateOptions {
        newKey?: string;
    }
}
