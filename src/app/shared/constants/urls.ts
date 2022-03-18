export const urls = {

    // Host 
    devUrl: 'http://humphrey.test/api/',
    stagingUrl: 'https://api-humphery.io-devs.cf/api/',
    awsUrl: 'https://18.217.219.187/api/',

    // AUTH
    login: 'auth/login',
    logout: 'auth/logout',
    forgotPasswordMail: 'auth/forgot-password',
    verifyPasswordToken: 'auth/verify-forgot-password-code',
    resetPassword: 'auth/reset-password',
    setupAccount: 'auth/setup-account',
    skipPasswordUpdate: 'auth/skip-update-password',



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
    bulkStatusUpdate: 'rod/work-orders/bulk-update-status',
    getCustomerOrders: 'rod/work-orders/get-customer-orders/listing',
    getJobNotes: 'rod/job-notes/listing',
    addJobNote: 'rod/job-notes/store',
    deleteJobNote: 'rod/job-notes/delete',
    getTicketNo: 'rod/delivery-notes/ticket-no',
    addDeliveryNote: 'rod/delivery-notes/store',
    updateDeliveryNote: 'rod/delivery-notes/update',
    getDeliveryNotes: 'rod/delivery-notes/listing',
    uploadFiles: 'rod/work-orders/files/store',
    removeFile: 'rod/work-orders/files/delete',

    // Products
    productListing: 'rod/work-orders/products',

    // Customers
    customerListing: 'phonebook/customers/listing',
    customerAdd: 'phonebook/customers/store',
    customerUpdate: 'phonebook/customers/update',
    customerDelete: 'phonebook/customers/delete',


    supplierListing: 'phonebook/suppliers/listing',
    supplierAdd: 'phonebook/suppliers/store',
    supplierUpdate: 'phonebook/suppliers/update',
    supplierDelete: 'phonebook/suppliers/delete',


    employeeListing: 'phonebook/employees/listing',
    employeeAdd: 'phonebook/employees/store',
    employeeUpdate: 'phonebook/employees/update',
    employeeDelete: 'phonebook/employees/delete',
    // Delivery List
    deliveryListing: 'delivery-list/delivery/listing',
    updateDeliveryListStatus: 'delivery-list/delivery/update-status',
    updateDeliveryList: 'delivery-list/delivery/update',

    // FSC
    fscListing: 'fsc/customer-orders/listing',
    addPurchaseOrder: 'fsc/purchase-orders/store',
    purchaseOrderListing: 'fsc/purchase-orders/listing',
    updateOrder: 'fsc/purchase-orders/update',
    deleteOrder: 'fsc/purchase-orders/delete',

    // Accounts
    accountStats: 'accounts/stats',
    customerTotals: 'accounts/customer-total-listing',

    salesOrdersRodListing: 'accounts/sale-order/work-order-listing',
    salesOrdersListing: 'accounts/sale-order/listing',
    addSalesOrder: 'accounts/sale-order/store',
    updateSalesOrderStatus: 'accounts/sale-order/update-status',
    updateSalesOrder: 'accounts/sale-order/update',
    deleteSalesOrder: 'accounts/sale-order/delete',


    accountsPurchaseOrdersListing: 'accounts/purchase-cost/listing',
    addAccountsPurchaseOrder: 'accounts/purchase-cost/store',
    updateAccountsPurchaseOrderStatus: 'accounts/purchase-cost/update-status',
    updateAccountsPurchaseOrder: 'accounts/purchase-cost/update',
    deletePurchaseOrder: 'accounts/purchase-cost/delete',

    fixedCostListing: 'accounts/fixed-cost/listing',
    addFixedCost: 'accounts/fixed-cost/store',
    updateFixedCost: 'accounts/fixed-cost/update',
    deleteFixedCost: 'accounts/fixed-cost/delete',


    creditCheckListing: 'accounts/credit-check/listing',
    creditCheckShow: 'accounts/credit-check/show',

    // History
    historyListing: 'history/listing'
};