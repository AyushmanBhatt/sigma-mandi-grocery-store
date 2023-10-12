# Import necessary libraries for Flask
from flask import Flask, render_template, request
import datetime
import pickle
import pandas as pd

# Initialize Flask app
app = Flask(__name__)

# Load the saved model and scaler using Pickle
with open('vegetable_price_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

# Determine the earliest year from your dataset
earliest_year = 2000  # Replace 2000 with the actual earliest year in your dataset

# Extract unique vegetable names from your dataset
# You should modify this part to extract vegetable names from your dataset

# For example, if the vegetable names are in a column named 'Vegetable' in your dataset:
data = pd.read_csv("vegetable_data.csv")
vegetable_names = data['Vegetable'].unique().tolist()

# Define a route for the home page


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get user inputs from the form
        selected_date = datetime.datetime.strptime(
            request.form['date'], '%Y-%m-%d')
        selected_vegetable = int(request.form['vegetable'])

        # Calculate the number of days since the earliest date
        days_since_earliest = (
            selected_date - datetime.datetime(earliest_year, 1, 1)).days

        # Preprocess the user inputs
        input_features = [[days_since_earliest, selected_vegetable]]
        input_features_scaled = scaler.transform(input_features)

        # Make a price prediction using the model
        predicted_price = model.predict(input_features_scaled)[0]

        return render_template('result.html', predicted_price=round(predicted_price))

    return render_template('index.html', vegetable_names=vegetable_names)


if __name__ == '__main__':
    app.run(debug=True)
