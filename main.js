document.addEventListener("DOMContentLoaded", function () {
    const markers = {
        marker1: {
          id: 'marker1',
          url: 'img/marker/pattern-m_b1.patt',
          size: 0.1,
        },
        marker2: {
          id: 'marker2',
          url: 'img/marker/pattern-m_b2.patt',
          size: 0.1,
        },
        marker3: {
          id: 'marker3',
          url: 'img/marker/pattern-m_g1.patt',
          size: 0.1,
        },
        marker4: {
          id: 'marker4',
          url: 'img/marker/pattern-m_g2.patt',
          size: 0.1,
        },
        marker5: {
          id: 'marker5',
          url: 'img/marker/pattern-m_g3.patt',
          size: 0.1,
        },
      };
      
      let focusedMarker = null;
      
      function disableAllMarkersExceptFocused(markerId) {
        for (const marker in markers) {
          if (markers[marker].id !== markerId) {
            document.getElementById(markers[marker].id).setAttribute('visible', false);
          }
        }
      }
      
      function enableAllMarkers() {
        for (const marker in markers) {
          document.getElementById(markers[marker].id).setAttribute('visible', true);
        }
      }
      
      AR.addEventListener('markerFound', function(event) {
        focusedMarker = event.marker.id;
      
        disableAllMarkersExceptFocused(focusedMarker);
      });
      
      AR.addEventListener('markerLost', function(event) {
        if (event.marker.id === focusedMarker) {
          enableAllMarkers();
          focusedMarker = null;
        }
      });
});