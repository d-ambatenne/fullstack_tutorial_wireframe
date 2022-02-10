# Fullstack Tutorial Wireframe
This is a simple fullstack project, consisting of three parts: Springboot app (backend_app), Web React.js app (web_app) and a multiplatform library for image validation

# The project leverages the following technologies
  AWS Kotlin SDK to save images in the S3
  Kotlin DL to check if an uploaded image contains a human face
  Kotlin multiplatform to make a library, that can be used both on a JS and JVM project
  
# Steps to build and run the project
> Do not forget to load Gradle projects (backend_app and image_validation_lib) in IDEA, after cloning this repository!

1. Build multiplatform library:
  - For JVM: run `publishJvmPubllicationToMavenLocal` Gradle task in `publishing`
  As a result the JVM library will be pubilshed in your local Maven repository
  - For JS: run `packJsNpmPublication` Gradle task in `build`
  As a result the JS library will be created in `build/publications/npm/image_validation_lib-0.0.1.tgz`. You will need it in the Fronent build phase

2. Build and run the backend application
  - You will need an S3 credentials in place: https://docs.aws.amazon.com/sdk-for-kotlin/latest/developer-guide/get-started.html#get-started-setup
  - You will need to initialize the follwoing evnironment variables (AWS prefix is used because originaly the project used PostgeSQL on AWS, but you can use a local one):
    - `AWS_DB_HOST`
    - `AWS_DB_PORT`
    - `AWS_DB_USERNAME`
    - `AWS_DB_PASSWORD`
  - Run `./gradlew bootRun` in terminal in the backend_app project forlder

3. Build and run the web application
  - Copy the **contents** of the `image_validation_lib-0.0.1.tgz` to the `validator` folder of the `web_app` module
  - In terminal in `web_app` folder run `npm install`
  - run `npm install validator`
