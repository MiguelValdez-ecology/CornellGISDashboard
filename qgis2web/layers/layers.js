var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_poi_2 = new ol.format.GeoJSON();
var features_poi_2 = format_poi_2.readFeatures(json_poi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_2.addFeatures(features_poi_2);
var lyr_poi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_2, 
                style: style_poi_2,
                popuplayertitle: 'poi',
                interactive: true,
                title: '<img src="styles/legend/poi_2.png" /> poi'
            });
var format_spider_map_layer_3 = new ol.format.GeoJSON();
var features_spider_map_layer_3 = format_spider_map_layer_3.readFeatures(json_spider_map_layer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spider_map_layer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spider_map_layer_3.addFeatures(features_spider_map_layer_3);
var lyr_spider_map_layer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_spider_map_layer_3, 
                style: style_spider_map_layer_3,
                popuplayertitle: 'spider_map_layer',
                interactive: true,
                title: '<img src="styles/legend/spider_map_layer_3.png" /> spider_map_layer'
            });
var format_pma_layer_4 = new ol.format.GeoJSON();
var features_pma_layer_4 = format_pma_layer_4.readFeatures(json_pma_layer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pma_layer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pma_layer_4.addFeatures(features_pma_layer_4);
var lyr_pma_layer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pma_layer_4, 
                style: style_pma_layer_4,
                popuplayertitle: 'pma_layer',
                interactive: true,
                title: '<img src="styles/legend/pma_layer_4.png" /> pma_layer'
            });
var format_Municipios_5 = new ol.format.GeoJSON();
var features_Municipios_5 = format_Municipios_5.readFeatures(json_Municipios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_5.addFeatures(features_Municipios_5);
var lyr_Municipios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_5, 
                style: style_Municipios_5,
                popuplayertitle: 'Municipios',
                interactive: true,
                title: '<img src="styles/legend/Municipios_5.png" /> Municipios'
            });
var format_Carr186_6 = new ol.format.GeoJSON();
var features_Carr186_6 = format_Carr186_6.readFeatures(json_Carr186_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carr186_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carr186_6.addFeatures(features_Carr186_6);
var lyr_Carr186_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carr186_6, 
                style: style_Carr186_6,
                popuplayertitle: 'Carr186',
                interactive: true,
                title: '<img src="styles/legend/Carr186_6.png" /> Carr186'
            });
var format_Parcela_Carr186_7 = new ol.format.GeoJSON();
var features_Parcela_Carr186_7 = format_Parcela_Carr186_7.readFeatures(json_Parcela_Carr186_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcela_Carr186_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcela_Carr186_7.addFeatures(features_Parcela_Carr186_7);
var lyr_Parcela_Carr186_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcela_Carr186_7, 
                style: style_Parcela_Carr186_7,
                popuplayertitle: 'Parcela_Carr186',
                interactive: true,
                title: '<img src="styles/legend/Parcela_Carr186_7.png" /> Parcela_Carr186'
            });
var format_Comunidades_within500m_8 = new ol.format.GeoJSON();
var features_Comunidades_within500m_8 = format_Comunidades_within500m_8.readFeatures(json_Comunidades_within500m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_within500m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_within500m_8.addFeatures(features_Comunidades_within500m_8);
var lyr_Comunidades_within500m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidades_within500m_8, 
                style: style_Comunidades_within500m_8,
                popuplayertitle: 'Comunidades_within500m',
                interactive: true,
                title: '<img src="styles/legend/Comunidades_within500m_8.png" /> Comunidades_within500m'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_poi_2.setVisible(true);lyr_spider_map_layer_3.setVisible(true);lyr_pma_layer_4.setVisible(true);lyr_Municipios_5.setVisible(true);lyr_Carr186_6.setVisible(true);lyr_Parcela_Carr186_7.setVisible(true);lyr_Comunidades_within500m_8.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_GoogleRoad_1,lyr_poi_2,lyr_spider_map_layer_3,lyr_pma_layer_4,lyr_Municipios_5,lyr_Carr186_6,lyr_Parcela_Carr186_7,lyr_Comunidades_within500m_8];
lyr_poi_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'nombre': 'nombre', });
lyr_spider_map_layer_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_pma_layer_4.set('fieldAliases', {'fid': 'fid', 'Attribute': 'Attribute', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'MUNICIPIO': 'MUNICIPIO', 'blockgroup': 'blockgroup', 'Hashed Ubermedia Id': 'Hashed Ubermedia Id', 'distance from POI bg': 'distance from POI bg', 'cumsum': 'cumsum', 'land_area_k': 'land_area_k', });
lyr_Municipios_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.AREA': 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.AREA', 'CUERDAS': 'CUERDAS', 'DATE': 'DATE', 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.FID': 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.FID', 'COUNTYFP': 'COUNTYFP', 'STATEFP': 'STATEFP', 'CNTYIDFP': 'CNTYIDFP', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'MUNICIPIO': 'MUNICIPIO', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'Nombre': 'Municipio', 'Shape__Area': 'Área', 'Shape__Length': 'SHAPE.STLength()', });
lyr_Carr186_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parcela_Carr186_7.set('fieldAliases', {'fid': 'fid', 'oldpid': 'oldpid', 'num_catast': 'num_catast', 'tipo': 'tipo', 'inside_x': 'inside_x', 'inside_y': 'inside_y', 'catastro': 'catastro', 'municipio': 'municipio', 'contact': 'contact', 'dir_fisica': 'dir_fisica', 'dir_postal': 'dir_postal', 'cabida': 'cabida', 'gisarea': 'gisarea', 'land': 'land', 'structure': 'structure', 'machinery': 'machinery', 'totalval': 'totalval', 'exemp': 'exemp', 'exon': 'exon', 'taxable': 'taxable', 'deedbook': 'deedbook', 'deedpage': 'deedpage', 'salesamt': 'salesamt', 'salesdttm': 'salesdttm', 'sellername': 'sellername', 'byername': 'byername', 'estate': 'estate', 'deednum': 'deednum', 'layer': 'layer', 'path': 'path', });
lyr_Comunidades_within500m_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'UNIDAD': 'UNIDAD', 'PRECINTO': 'PRECINTO', 'BARRIO': 'BARRIO', 'Municipio': 'Municipio', 'lat': 'lat', 'long': 'long', });
lyr_poi_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'nombre': 'TextEdit', });
lyr_spider_map_layer_3.set('fieldImages', {'fid': '', 'Name': '', });
lyr_pma_layer_4.set('fieldImages', {'fid': 'TextEdit', 'Attribute': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'BLKGRPCE': 'TextEdit', 'GEOID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'blockgroup': 'TextEdit', 'Hashed Ubermedia Id': 'TextEdit', 'distance from POI bg': 'TextEdit', 'cumsum': 'TextEdit', 'land_area_k': 'TextEdit', });
lyr_Municipios_5.set('fieldImages', {'OBJECTID': '', 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.AREA': '', 'CUERDAS': '', 'DATE': '', 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.FID': '', 'COUNTYFP': '', 'STATEFP': '', 'CNTYIDFP': '', 'INTPTLAT': '', 'INTPTLON': '', 'MUNICIPIO': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'Nombre': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_Carr186_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Parcela_Carr186_7.set('fieldImages', {'fid': '', 'oldpid': '', 'num_catast': '', 'tipo': '', 'inside_x': '', 'inside_y': '', 'catastro': '', 'municipio': '', 'contact': '', 'dir_fisica': '', 'dir_postal': '', 'cabida': '', 'gisarea': '', 'land': '', 'structure': '', 'machinery': '', 'totalval': '', 'exemp': '', 'exon': '', 'taxable': '', 'deedbook': '', 'deedpage': '', 'salesamt': '', 'salesdttm': '', 'sellername': '', 'byername': '', 'estate': '', 'deednum': '', 'layer': '', 'path': '', });
lyr_Comunidades_within500m_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NOMBRE': '', 'TIPO': '', 'UNIDAD': '', 'PRECINTO': '', 'BARRIO': '', 'Municipio': '', 'lat': '', 'long': '', });
lyr_poi_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'nombre': 'no label', });
lyr_spider_map_layer_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_pma_layer_4.set('fieldLabels', {'fid': 'no label', 'Attribute': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'MUNICIPIO': 'no label', 'blockgroup': 'no label', 'Hashed Ubermedia Id': 'no label', 'distance from POI bg': 'no label', 'cumsum': 'no label', 'land_area_k': 'no label', });
lyr_Municipios_5.set('fieldLabels', {'OBJECTID': 'no label', 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.AREA': 'no label', 'CUERDAS': 'no label', 'DATE': 'no label', 'ASIGEGIS.GISADMIN.Limite_Municipio_2015oct.FID': 'no label', 'COUNTYFP': 'no label', 'STATEFP': 'no label', 'CNTYIDFP': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'MUNICIPIO': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'Nombre': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_Carr186_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Parcela_Carr186_7.set('fieldLabels', {'fid': 'no label', 'oldpid': 'no label', 'num_catast': 'no label', 'tipo': 'no label', 'inside_x': 'no label', 'inside_y': 'no label', 'catastro': 'no label', 'municipio': 'no label', 'contact': 'no label', 'dir_fisica': 'no label', 'dir_postal': 'no label', 'cabida': 'no label', 'gisarea': 'no label', 'land': 'no label', 'structure': 'no label', 'machinery': 'no label', 'totalval': 'no label', 'exemp': 'no label', 'exon': 'no label', 'taxable': 'no label', 'deedbook': 'no label', 'deedpage': 'no label', 'salesamt': 'no label', 'salesdttm': 'no label', 'sellername': 'no label', 'byername': 'no label', 'estate': 'no label', 'deednum': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Comunidades_within500m_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'UNIDAD': 'no label', 'PRECINTO': 'no label', 'BARRIO': 'no label', 'Municipio': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_Comunidades_within500m_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});