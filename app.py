import dash
from dash import html
from dash import dash_table
from flask import send_from_directory
import pandas as pd
import os

app = dash.Dash(__name__)
server = app.server

# Path to the QGIS exported web map folder
QGIS_MAP_FOLDER = "qgis2web"
MAP_PATH = os.path.join(os.path.dirname(__file__), QGIS_MAP_FOLDER)

# Path to your CSV file
CSV_PATH = os.path.join(os.path.dirname(__file__), "Procedencia_visitors.csv")


# Load the CSV data
df = pd.read_csv(CSV_PATH)

# Create the layout
app.layout = html.Div([
    html.H1("Cornell GIS Dashboard"),

    html.Div([
        # Left: Embedded QGIS map
        html.Div([
            html.Iframe(
                src="/qgis-map/index.html",
                style={
                    "width": "100%",
                    "height": "80vh",
                    "border": "none"
                }
            )
        ], style={"width": "60%", "padding-right": "10px"}),

        # Right: Data table
        html.Div([
            html.H3("Procedencia de Visitantes"),
            dash_table.DataTable(
                data=df.to_dict('records'),
                columns=[{"name": col, "id": col} for col in df.columns],
                style_table={'height': '80vh', 'overflowY': 'auto'},
                style_cell={
                    'textAlign': 'left',
                    'padding': '5px',
                    'whiteSpace': 'normal',
                },
                page_size=20
            )
        ], style={"width": "40%", "padding-left": "10px", "overflow": "auto"})
    ], style={"display": "flex", "flex-direction": "row"})
])

# Serve the map files
@server.route("/qgis-map/<path:filename>")
def serve_qgis_webmap(filename):
    return send_from_directory(MAP_PATH, filename)

if __name__ == "__main__":
    app.run(debug=True)
