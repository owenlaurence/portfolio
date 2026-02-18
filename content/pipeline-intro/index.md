### Continuous Integration and Continuous Deployment  
  Automated pipelines accelerate the process of testing, building, and deploying code changes. Using GitHub Actions, teams can create workflows that automatically run tests, build applications, and deploy to production environments whenever code is pushed to the repository.  
    
  Lets say we have a React application. To run our application, we run the commands:
  ~~~sh
    npm install
    npm test
    npm run build
    npm run dev

  ~~~

  These scripts build our code and serve the content to a location available to us. Here's the equivalent yaml configuration:
  ~~~yml
    name: Deploy NPM

    on:
      ...

    jobs:
      build-and-test:
        runs-on: ubuntu-latest

        steps:
          ...

          - name: Set up Node.js
            uses: actions/setup-node@v4
            with:
              node-version: 22

          - name: Install dependencies
            run: npm install

          - name: Run tests
            run: npm test

          - name: Build project
            run: npm run build



  ~~~

  The result is a ubuntu image which has our application downloaded and built.

  Ubuntu is most common, but you may use whichever platform is best for your application. For example: checkout [my automated CI/CD for full iOS delivery](./capacitor-plugin).

  Next step is running the image to create our container. This will vary depending on your target.
  Create your repository secrets and environment. Then deploy with: 
  
  ### AWS
  ~~~yml
   - name: Deploy to S3
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Sync build folder
        run: aws s3 sync dist/ s3://your-bucket-name --delete

  ~~~

  ### Azure
  ~~~yml
     - name: Deploy to Azure
        uses: azure/webapps-deploy@v3
        with:
          app-name: \${{ env.AZURE_WEBAPP_NAME }}
          publish-profile: \${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}

  ~~~  

  ### Docker
  ~~~yml
      - name: Build Docker image
        run: docker build -t myapp .

      - name: Push to Docker Hub
        run: |
          echo "\${{ secrets.DOCKER_PASSWORD }}" | docker login -u "\${{ secrets.DOCKER_USERNAME }}" --password-stdin
          docker tag myapp username/myapp:latest
          docker push username/myapp:latest

  ~~~  

  Some platfroms like [Vercel](https://vercel.com/docs/deployments) & [Railway](https://docs.railway.com/overview/advanced-concepts) have built-in CI/CD.
  
  **Important**: Keep your secrets **secured**. Reference secret keys *only through repository secrets*.

  