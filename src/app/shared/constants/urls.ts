export const urls = {

    // Host 
    devUrl: 'http://humphree.test/api/',
    stagingUrl: 'http://humphree.test/api/',

    // AUTH
    login: 'auth/login',
    logout: 'auth/logout',
    forgotPasswordMail: 'auth/forgot-password',
    verifyPasswordToken: 'auth/verify-forgot-password-code',
    resetPassword: 'auth/reset-password',



    // Administration
    // Users
    getUsersList: 'administration/users/listing',
    addUser: 'administration/users/store',
    deleteUser: 'administration/users/delete',
    updateUser: 'administration/users/update',

    // ROles
    getRolesList: 'administration/roles/listing',
    addRole: 'administration/roles/store',
    deleteRole: 'administration/roles/delete',
    updateRole: 'administration/roles/update',
    getPermissionsList: 'administration/roles/permissions/listing',
};