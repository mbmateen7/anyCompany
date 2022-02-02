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

    // Rod
    rodListing: 'rod/work-orders/listing',
    storeWorkOrder: 'rod/work-orders/store',
    updateInvoiceNo: 'rod/work-orders/update',
    updateWorkOrder: 'rod/work-orders/update',
    getWorkOrder: 'rod/work-orders/details',
    multiOrderUpdate: 'rod/work-orders/update-multiple',
    updateOrderStatus: 'rod/work-orders/update-status',
    getCustomerOrders: 'rod/work-orders/get-customer-orders/listing',
    getJobNotes: 'rod/job-notes/listing',
    addJobNote: 'rod/job-notes/store',
    deleteJobNote: 'rod/job-notes/delete',
    addDeliveryNote: 'rod/delivery-notes/store',
    updateDeliveryNote: 'rod/delivery-notes/update',
    getDeliveryNotes: 'rod/delivery-notes/listing',


    // Products
    productListing: 'rod/work-orders/products',

    // Customers
    customerListing: 'phonebook/customers/listing',
    customerAdd: 'phonebook/customers/store',
};