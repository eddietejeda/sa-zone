function ondragend(){var r=marker.getLatLng();updateMarker({lat:r.lat,"long":r.lng})}function updateMarker(r){$.ajax({type:"GET",url:"/",data:r,dataType:"json",success:function(r){marker.setLatLng(new L.LatLng(r.lat,r.lng)),marker.bindPopup(new L.Popup).openPopup();var a="";r.in_district?(historicDistrictLayer.setGeoJSON($.parseJSON(r.district_polygon.st_asgeojson)),historicDistrictLayer.setFilter(function(){return!0}),a="<br>Historic District: "+r.district_polygon.name):historicDistrictLayer.setFilter(function(){return!1}),marker.setPopupContent("Address: "+r.address+a),map.setView([r.lat,r.lng],15)}})}var prj="codeforamerica.hmebo8ll",map=L.mapbox.map("map",prj).setView([29.423889,-98.493056],12),historicDistrictLayer=L.mapbox.featureLayer().addTo(map),marker=L.marker(new L.LatLng(29.423889,-98.493056),{icon:L.mapbox.marker.icon({"marker-color":"CC0033"}),draggable:!0});marker.addTo(map),marker.on("dragend",ondragend),$("#address").keyup(function(r){13==r.keyCode&&updateMarker({address:$(this).val()})});