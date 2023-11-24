AFRAME.registerComponent('markerhandler', {
  init: function () {
    const markerId = this.el.id;

    this.el.sceneEl.addEventListener('markerFound', (event) => {
      if (event.target.id !== markerId) {
        // Disable other markers
        document.getElementById(event.target.id).setAttribute('visible', false);
      }
    });

    this.el.sceneEl.addEventListener('markerLost', (event) => {
      if (event.target.id !== markerId) {
        // Enable other markers
        document.getElementById(event.target.id).setAttribute('visible', true);
      }
    });
  }
});
