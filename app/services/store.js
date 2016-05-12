import Ember from 'ember';

export default Ember.Service.extend({
  getOrders() {
    return [
      { id: '1', name: 'Maribeth' },
      { id: '2', name: 'Remi' }
    ];
  },

  getOrderById(id) {
    const orders = this.getOrders();
    return orders.findBy('id', id);
  }
});
