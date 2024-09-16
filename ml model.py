import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
# Load the CSV file
df = pd.read_csv("plant_data.csv")

# Preview the data
print(df.head())


# Encoding the 'Status' column (Healthy = 1, Critical = 0)
le = LabelEncoder()
df['Status'] = le.fit_transform(df['Status'])

# Define features (X) and label (y)
X = df[['Humidity', 'Temperature', 'Light_Intensity']]
y = df['Status']

# Split the data into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# Create the Random Forest model
model = RandomForestClassifier()

# Train the model
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
print(f"Accuracy: {accuracy_score(y_test, y_pred)}")
print(f"Classification Report:\n {classification_report(y_test, y_pred)}")

