let view = new ol.View({
    center: [0, 0],
    zoom: 2,
});

var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
});

const map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
        vectorLayer,
    ],
    target: 'map',
    view: view,
});

var vectorSource = vectorLayer.getSource();

// Show event on map
function showEventMap(events) {
    vectorSource.clear()
    for (ev in events) {
        loc_4326 = events[ev].location;

        if (loc_4326 != null) {
            position = proj4326_3857(loc_4326);
            vectorSource.addFeature(position);
        }
    }
    // Adapt map extend
    view.fit(vectorSource.getExtent(), map.getSize())
    view.setZoom(view.getZoom()*0.9)
};

function getLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
        loc_4326 = [pos.coords.longitude, pos.coords.latitude, pos.coords.altitude];

        position = proj4326_3857(loc_4326);

        vectorSource.clear();
        vectorSource.addFeature(position);
        view.setCenter(loc_3857);
        view.setZoom(15)

    });
}

function proj4326_3857(loc_4326) {
    loc_3857 = ol.proj.transform(loc_4326, 'EPSG:4326', 'EPSG:3857')
    position = new ol.Feature(new ol.geom.Point(loc_3857));
    return position
}