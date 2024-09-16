import random
import pandas as pd

# Critical ranges for humidity, temperature, and light intensity
def generate_plant_data(num_samples):
    data = []
    
    for _ in range(num_samples):
        humidity = round(random.uniform(20, 90), 2)  # Random humidity between 20% and 90%
        temperature = round(random.uniform(5, 40), 2)  # Random temperature between 5°C and 40°C
        light_intensity = round(random.uniform(2000, 80000), 2)  # Random light intensity between 2,000 and 80,000 lux
        
        # Define plant status based on critical ranges
        if humidity < 30 or humidity > 80 or temperature < 10 or temperature > 35 or light_intensity < 5000 or light_intensity > 70000:
            status = "Critical"
        else:
            status = "Healthy"
        
        data.append([humidity, temperature, light_intensity, status])
    
    # Convert to DataFrame for easier manipulation
    df = pd.DataFrame(data, columns=["Humidity", "Temperature", "Light_Intensity", "Status"])
    
    return df

# Generate 10,000 samples
plant_data = generate_plant_data(1000000)

# Save to CSV
plant_data.to_csv('plant_data.csv', index=False)

print(plant_data)
