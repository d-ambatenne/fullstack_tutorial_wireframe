# Fullstack Tutorial Wireframe
This is a simple fullstack project, consisting of three parts: Springboot app (backend_app), Web React.js app (web_app) and a multiplatform library for image validation

# The project leverages the following technologies
  AWS Kotlin SDK to save images in the S3
  Kotlin DL to check if an uploaded image contains a human face
  Kotlin multiplatform to make a library, that can be used both on a JS and JVM project
  
# Steps to build and run the project
> Do not forget to load Gradle projects (backend_app and image_validation_lib) in IDEA, after cloning this repository!

1. Build multiplatform library:
  - For JVM: run '''publishJvmPubllicationToMavenLocal''' Gradle task in >publishing
  As a result the JVM library will be pubilshed in your local Maven repository
  - For JS: run '''packJsNpmPublication''' Gradle task in >build
  As a result the JS library will be created in '''build/publications/npm/image_validation_lib-0.0.1.tgz'''. You will need it in the Fronent build phase

2. Build and run the backend application
  - Run ./gradlew bootRun in terminal in the backend_app project forlder
