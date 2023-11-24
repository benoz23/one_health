AFRAME.registerComponent('markerhandler', {
  init: function () {
    const markerId = this.el.id;

    this.el.sceneEl.addEventListener('markerFound', () => {
      console.log(`Marker ${markerId} found`);
      
      // Disable other markers
      this.el.sceneEl.querySelectorAll('[markerhandler]').forEach((marker) => {
        if (marker !== this.el) {
          marker.setAttribute('visible', false);
          console.log(`Hiding marker ${marker.id}`);
        }
      });
    });

    this.el.sceneEl.addEventListener('markerLost', () => {
      console.log(`Marker ${markerId} lost`);

      // Enable all markers
      this.el.sceneEl.querySelectorAll('[markerhandler]').forEach((marker) => {
        marker.setAttribute('visible', true);
        console.log(`Showing marker ${marker.id}`);
      });
    });
  }
});
