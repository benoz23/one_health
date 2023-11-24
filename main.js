AFRAME.registerComponent('markerhandler', {
  init: function () {
    const markerId = this.el.id;

    this.el.sceneEl.addEventListener('markerFound', () => {
      // Disable other markers
      this.el.sceneEl.querySelectorAll('[markerhandler]').forEach((marker) => {
        if (marker.id !== markerId) {
          marker.setAttribute('visible', false);
        }
      });
    });

    this.el.sceneEl.addEventListener('markerLost', () => {
      // Enable all markers
      this.el.sceneEl.querySelectorAll('[markerhandler]').forEach((marker) => {
        marker.setAttribute('visible', true);
      });
    });
  }
});
