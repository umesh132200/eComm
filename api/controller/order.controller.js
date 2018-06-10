const { getAllOrders, getOrder,
        addOrder, updateOrder,
        deleteOrder } = require('../model/order.model');

        exports.getAllOrders = getAllOrders;
        exports.getOrder = getOrder;
        exports.addOrder = addOrder;
        exports.updateOrder = updateOrder;
        exports.deleteOrder = deleteOrder;

