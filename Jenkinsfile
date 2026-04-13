pipeline {
    agent any

    environment {
        SOURCE_BRANCH = "dev"
        DEST_BRANCH = "main"
        REPO_URL = "https://github.com/kishoresuzil1005/CRUD.git"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: "${SOURCE_BRANCH}",
                    url: "${REPO_URL}",
                    credentialsId: 'github-access-token'
            }
        }

        stage('Build') {
            steps {
                sh '''
                echo "Installing dependencies..."
                npm install

                echo "Building project..."
                npm run build
                '''
            }
        }

        stage('Merge to Destination Branch') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'github-access-token',
                    usernameVariable: 'GIT_USERNAME',
                    passwordVariable: 'GIT_TOKEN'
                )]) {

                    sh '''
                    git config user.name "jenkins"
                    git config user.email "jenkins@example.com"

                    # Set remote with credentials (secure way)
                    git remote set-url origin https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/kishoresuzil1005/CRUD.git

                    # Fetch latest branches
                    git fetch origin

                    # Checkout destination branch
                    git checkout ${DEST_BRANCH} || git checkout -b ${DEST_BRANCH}

                    # Merge source branch
                    git merge origin/${SOURCE_BRANCH}

                    # Push changes
                    git push origin ${DEST_BRANCH}
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline completed successfully"
        }
        failure {
            echo "❌ Pipeline failed"
        }
    }
}
