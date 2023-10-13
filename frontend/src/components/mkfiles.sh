#!/usr/bin/env bash

# Define an array of component names and their content
components=(
  "FindClientComponent FindClientContent"
  "ActiveClientsComponent ActiveClientsContent"
  "AppointmentSchedulingComponent AppointmentSchedulingContent"
  "RegisterClientComponent RegisterClientContent"
)

# Define the base path where the components should be created
base_path="./AdminAccounts"

# Function to create a component file with content
create_component() {
  local component_name="$1"
  local component_content="$2"
  local component_path="$base_path/$component_name.js"

  # Check if the file already exists
  if [ -f "$component_path" ]; then
    echo "$component_path already exists. Skipping."
  else
    # Create the component file with content
    echo "Creating $component_path"
    echo "$component_content" > "$component_path"
  fi
}

# Loop through the components and create them
for component_data in "${components[@]}"; do
  # Split the component_data into name and content
  IFS=" " read -r -a component_info <<< "$component_data"
  component_name="${component_info[0]}"
  component_content="${component_info[1]}"

  create_component "$component_name" "$component_content"
done
