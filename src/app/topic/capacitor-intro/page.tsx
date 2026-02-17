import TopicTemplate from "@/src/app/components/topic/template";
import { color } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import LoadingSkeleton from "../loading";

/*
    * runs-on: The OS on which we want to run our server. Ubuntu is most common, but you may select whichever platform works best for your application. 
        * For example: Checkout [my automated CI/CD for full iOS App Store delivery](./capacitor-plugin).
    
  <div style="padding:5px; border-left:4px solid #0969da; background:#f6f8fa;">
  <strong>Note:</strong> 
  </div>
*/


const topic = {
  topic: "Implementing CI/CD Pipeline with GitHub Actions",
  subject: "capacitor-intro",
  description:
    `### Continuous Integration and Continuous Deployment  
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

  `,
  steps: [
    "Create a .github/workflows directory in your repository",
    "Define a YAML workflow file with trigger events (push, pull_request, etc.)",
    "Set up jobs and steps for testing, building, and deployment",
    "Configure environment variables and secrets for secure deployment",
    "Test the pipeline with a sample commit",
    "Monitor workflow runs and optimize for faster execution"
  ],
  businessValue: "Implementing a CI/CD pipeline reduces manual deployment errors by 80%, decreases time-to-market by enabling multiple daily deployments instead of weekly releases, and frees up developer time by automating repetitive tasks. This translates to faster feature delivery, improved product quality, and reduced operational costs.",
  tags: [
    {
      text: "DevOps",
      color: "blue"
    },
    {
      text: "Automation",
      color: "green"
    },
    {
      text: "CI/CD",
      color: "purple"
    }
  ],
  technologies: ["GitHub Actions", "Docker", "YAML", "Node.js", "Jest", "AWS", "Terraform"],
  challenges: ["Manual deployment bottlenecks", "Inconsistent environment configurations", "Lack of automated testing", "Limited deployment visibility"],
  metrics: [
    {
      description: "Deployment frequency increased from weekly to daily",
      icon: <TrendingUp className={`size-6 text-blue-600`} />,
    },
    {
      description: "Mean time to recovery reduced by 60%",
      icon: <CheckCircle2 className={`size-6 text-green-600`} />,
    },
    {
      description: "Developer productivity increased by 40%",
      icon: <Zap className={`size-6 text-purple-600`} />,
    }

  ]

}


export default function CapacitorIntro() {
  return <TopicTemplate {...topic} />
  // return <LoadingSkeleton/>
}
