AFRAME.registerComponent('markerhandler', {
  init: function () {
    const markerId = this.el.id;

    this.el.sceneEl.addEventListener('markerFound', () => {
      console.log(`Marker ${markerId} found`);

      // Hide content within other markers
      this.el.sceneEl.querySelectorAll('[markerhandler]').forEach((marker) => {
        if (marker !== this.el) {
          marker.querySelectorAll('[visible]').forEach((content) => {
            content.setAttribute('visible', false);
            console.log(`Hiding content within marker ${marker.id}`);
          });
        }
      });
    });

    this.el.sceneEl.addEventListener('markerLost', () => {
      console.log(`Marker ${markerId} lost`);

      // Show content within all markers
      this.el.sceneEl.querySelectorAll('[markerhandler]').forEach((marker) => {
        marker.querySelectorAll('[visible]').forEach((content) => {
          content.setAttribute('visible', true);
          console.log(`Showing content within marker ${marker.id}`);
        });
      });
    });
  }
});
